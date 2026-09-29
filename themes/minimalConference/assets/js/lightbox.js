// Lightbox for the photo gallery pages.
// Without JS the grid links still work: they open the full photo in a new tab.
(() => {
  const links = [...document.querySelectorAll(".photo-grid a.photo")];
  const dialog = document.getElementById("lightbox");
  if (links.length === 0 || !dialog) {
    return;
  }

  const img = document.getElementById("lightbox-img");
  const figure = document.getElementById("lightbox-figure");
  const download = document.getElementById("lightbox-download");
  const share = document.getElementById("lightbox-share");
  const counter = document.getElementById("lightbox-counter");
  const fsButton = document.getElementById("lightbox-fs");
  let lastPointerType = ""; // how the current interaction is pointing

  const photos = links.map((a) => ({
    src: a.href,
    alt: a.querySelector("img").alt,
    name: a.href.split("/").pop(),
  }));

  let i = 0;

  // Preloaded photo blobs, per index. navigator.share() must be called
  // synchronously inside the tap: awaiting a fetch first can lose the
  // "transient user activation" Chrome demands, and share then throws
  // NotAllowedError and does nothing.
  const fileCache = new Map();
  const preloadFile = (n) => {
    fetch(photos[n].src)
      .then((res) => res.blob())
      .then(
        (blob) =>
          fileCache.set(
            n,
            new File([blob], photos[n].name, { type: blob.type || "image/jpeg" })
          )
      )
      .catch(() => {});
  };

  const FROM_CLASSES = ["lb-from-right", "lb-from-left", "lb-from-bottom", "lb-from-top"];

  const show = (n, from) => {
    i = (n + photos.length) % photos.length;
    const p = photos[i];
    img.alt = p.alt;
    download.href = p.src;
    download.setAttribute("download", p.name);
    counter.textContent = `${i + 1} / ${photos.length}`;
    // Preload neighbours so prev/next feel instant.
    new Image().src = photos[(i + photos.length - 1) % photos.length].src;
    new Image().src = photos[(i + 1) % photos.length].src;

    if (from) {
      // Snap to the off state (transition off), then release back to center.
      img.classList.add("lb-anim-off");
      img.classList.remove(...FROM_CLASSES);
      img.classList.add(`lb-from-${from}`);
      void img.offsetWidth; // apply the off state before re-enabling the transition
      img.classList.remove("lb-anim-off");
      requestAnimationFrame(() =>
        requestAnimationFrame(() => img.classList.remove(`lb-from-${from}`))
      );
    }
    // Drop the old photo first: a plain src swap keeps the previous
    // pixels on screen until the new one has fully loaded, so on a slow
    // connection "next" looks like a no-op. Cleared, the img is a 0x0
    // box and the new photo (progressive JPEGs: as it arrives) renders
    // directly, with the spinner on top.
    img.removeAttribute("src");
    img.src = p.src;
    // Spinner until the photo arrives; an unloaded <img> is a 0x0 box,
    // so on a slow connection the lightbox would just be black.
    figure.classList.toggle("lb-loading", !img.complete);
    // While open, keep the single history entry pointing at the current
    // photo; stepping must not pile up entries.
    if (dialog.open) {
      history.replaceState(null, "", `#${p.name}`);
    }
    if (navigator.share) {
      preloadFile(i);
    }
  };

  const step = (d) => show(i + d, d > 0 ? "right" : "left");

  links.forEach((a, n) => {
    a.addEventListener("pointerdown", (e) => (lastPointerType = e.pointerType));
    a.addEventListener("click", (e) => {
      e.preventDefault();
      show(n);
      // One entry per lightbox session; "back" pops it and closes the
      // dialog, keeping the visitor on the day's page.
      history.pushState(null, "", `#${photos[n].name}`);
      dialog.showModal();
      // On touch, go fullscreen right away: the URL bar would otherwise eat
      // the screen. Must happen inside the tap gesture; ignored where the
      // Fullscreen API is missing (e.g. iOS Safari).
      if (lastPointerType === "touch") {
        document.documentElement
          .requestFullscreen()
          .catch(() => {});
      }
    });
  });

  // "Back" while the lightbox is open pops the entry pushed on open and
  // just closes the dialog.
  window.addEventListener("popstate", () => {
    if (dialog.open) {
      dialog.close();
    }
  });

  // Closing via Esc, the X, or the backdrop leaves the anchor behind;
  // strip it so a stale entry doesn't swallow the next "back".
  dialog.addEventListener("close", () => {
    if (location.hash) {
      history.replaceState(null, "", location.pathname + location.search);
    }
  });

  document.getElementById("lightbox-prev").addEventListener("click", () => step(-1));
  document.getElementById("lightbox-next").addEventListener("click", () => step(1));
  document
    .getElementById("lightbox-close")
    .addEventListener("click", () => {
      dialog.close();
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    });

  // Fullscreen the document, not the dialog: Chrome refuses requestFullscreen
  // on a showModal()ed <dialog> (it lives in the top layer). The lightbox is
  // fixed at 100vw x 100dvh, so it still covers the whole screen.
  fsButton.addEventListener("click", () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen().catch((err) => {
        console.warn("fullscreen refused:", err);
      });
    }
  });
  // execCommand("copy") fallback for non-secure contexts (plain http),
  // where navigator.clipboard does not exist.
  const legacyCopy = (text) => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    ta.remove();
    return ok;
  };

  // Tiny toast, e.g. "Link copied" after the clipboard fallback.
  const TOAST_MS = 1800;
  const toast = (msg) => {
    const t = document.createElement("div");
    t.className = "lb-toast";
    t.textContent = msg;
    dialog.appendChild(t);
    void t.offsetWidth; // apply the hidden state before transitioning in
    t.classList.add("lb-toast-show");
    setTimeout(() => {
      t.classList.remove("lb-toast-show");
      t.addEventListener("transitionend", () => t.remove(), { once: true });
    }, TOAST_MS);
  };

  // Mobile share: send the photo file itself via the Web Share API,
  // falling back to a plain URL where file sharing is unsupported.
  if (navigator.share) {
    share.addEventListener("click", () => {
      const p = photos[i];
      // Share the deep link, not the bare image URL: opening it reopens
      // the lightbox right on this photo.
      const data = {
        title: p.alt,
        url: location.origin + location.pathname + `#${p.name}`,
      };
      // Synchronous call inside the tap (see fileCache); if the blob is
      // not ready yet, share the plain link instead.
      const file = fileCache.get(i);
      navigator
        .share(file ? { ...data, files: [file] } : data)
        .catch((err) => {
          if (err && err.name === "AbortError") {
            return; // the user dismissed the share sheet
          }
          console.warn("share failed:", err);
          if (file) {
            // File sharing unsupported: retry with the link only.
            navigator.share(data).catch((e) => {
              if (!e || e.name !== "AbortError") {
                console.warn("share failed:", e);
                toast("Sharing failed");
              }
            });
          } else {
            toast("Sharing failed");
          }
        });
    });
  } else {
    // No Web Share API (e.g. Firefox): fall back to copying the link.
    share.addEventListener("click", async () => {
      const url =
        location.origin + location.pathname + `#${photos[i].name}`;
      let ok = false;
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(url);
          ok = true;
        } catch (err) {
          console.warn("clipboard API failed:", err);
        }
      }
      if (!ok) {
        ok = legacyCopy(url);
      }
      toast(ok ? "Link copied" : "Copying failed");
    });
  }

  document.addEventListener("fullscreenchange", () => {
    const on = !!document.fullscreenElement;
    fsButton.textContent = on ? "\u2921" : "\u26F6"; // ⤡ shrink / ⛶ expand
    fsButton.setAttribute("aria-label", on ? "Exit fullscreen" : "Toggle fullscreen");
  });

  // Tapping the dark area (not the photo or controls):
  // with a mouse it closes; with a finger it steps left/right by screen half.
  // Trust the actual pointer of the gesture, not the UA's hover claims.
  dialog.addEventListener("pointerdown", (e) => (lastPointerType = e.pointerType));
  dialog.addEventListener("click", (e) => {
    if (swipeActive) {
      return; // the tap is the tail of a swipe, already handled
    }
    // Clicks on the photo itself: outer thirds step, middle third is a no-op.
    if (e.target === img) {
      const t = (e.clientX - img.getBoundingClientRect().left) / img.clientWidth;
      if (t < 1 / 3) {
        step(-1);
      } else if (t > 2 / 3) {
        step(1);
      }
      return;
    }
    // Clicks on the dark area: a finger steps by screen half, a mouse closes.
    if (e.target !== dialog && e.target !== figure) {
      return;
    }
    if (lastPointerType === "touch") {
      step(e.clientX < innerWidth / 2 ? -1 : 1);
    } else {
      dialog.close();
    }
  });

  dialog.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      step(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      step(-1);
    } else if (e.key === "Home") {
      e.preventDefault();
      show(0);
    } else if (e.key === "End") {
      e.preventDefault();
      show(photos.length - 1);
    }
    // Esc is handled natively by <dialog>.
  });

  // The spinner clears as soon as the photo is usable.
  img.addEventListener("load", () => figure.classList.remove("lb-loading"));
  img.addEventListener("error", () => figure.classList.remove("lb-loading"));

  // Swipe (touch and mouse drag alike):
  // left/right and up/down all step, whichever axis dominates.
  //
  // The listeners live on the figure, not the image: while a photo is
  // still loading the <img> is a 0x0 box and swipes on it are lost.
  const SWIPE_THRESHOLD = 50;
  let startX = null;
  let startY = null;
  let swipeActive = false;
  figure.addEventListener("pointerdown", (e) => {
    if (e.target.closest("figcaption")) {
      return; // the bottom bar is not swipe territory
    }
    startX = e.clientX;
    startY = e.clientY;
    // Capturing on the target (not the figure) keeps the synthetic
    // click's target, which the click handler relies on (thirds vs.
    // dark area).
    e.target.setPointerCapture(e.pointerId);
  });
  figure.addEventListener("pointerup", (e) => {
    if (startX === null) {
      return;
    }
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    startX = startY = null;
    let from = null;
    if (Math.abs(dx) >= Math.abs(dy)) {
      if (Math.abs(dx) > SWIPE_THRESHOLD) {
        from = dx < 0 ? "right" : "left"; // left: next, right: prev
      }
    } else if (Math.abs(dy) > SWIPE_THRESHOLD) {
      from = dy > 0 ? "bottom" : "top"; // down: next, up: prev
    }
    if (from) {
      swipeActive = true; // suppress the synthetic click right after the swipe
      setTimeout(() => (swipeActive = false), 350);
      show(i + (from === "right" || from === "bottom" ? 1 : -1), from);
    }
  });
  figure.addEventListener("pointercancel", () => {
    startX = startY = null;
  });

  // Deep link: /photos/friday/#IMG_x.jpg reopens the lightbox on that photo.
  const start = photos.findIndex((p) => location.hash === `#${p.name}`);
  if (start !== -1) {
    show(start);
    dialog.showModal();
  }
})();
