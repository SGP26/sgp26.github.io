# Hugo website for SGP 2026

> :warning: **_Do not edit `public/` directly_**



## Installation

On your local machine, [install hugo](https://gohugo.io/installation/) and go.
(We need go to use the `responsive-images` module (and maybe more in the future).

- MacOS: `brew install hugo go`

Run the hugo server in the background while you're testing your edits:

    make server


## Project structure
Hugo is helping us have a "fancy" website, but it means things are a bit more
scattered. The goal is to push the layout/style related things into
`themes/minimalConference/*` and the content related items into
arrays/lists/maps in `config.yaml` (or `content/*.md` markdown files).

**Note:** Currently, the implementation of this is a mess and a lot of content is in the theme.
This needs to be cleaned up.

