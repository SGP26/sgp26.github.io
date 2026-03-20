"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const deadlineSpans = document.querySelectorAll(
    "span[expires-on]",
  );
  const currentDate = new Date();
  deadlineSpans.forEach(function (span) {
    const dateString = span.getAttribute("expires-on");
    const deadlineDate = new Date(dateString);
    if (!isNaN(deadlineDate)) {
      if (currentDate > deadlineDate) {
          console.log("expired");
        span.classList.add("deadline-expired");
      } else {
          console.log("time left: ", (deadlineDate-currentDate)/1000/3600/24, " days");
      }
    } else {
      console.warn(`Invalid date format in deadline span: ${dateString}`);
    }
  });
});
