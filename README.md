# Hugo website for SGP 2026

> :warning: **_Do not edit `public/` directly_**



## Example workflow

On your local machine, [install hugo](https://gohugo.io/installation/).

- MacOS: `brew install hugo`

Run the hugo server in the background while you're testing your edits:

    make server

Hugo is helping us have a "fancy" website, but it means things are a bit more
scattered. The goal is to push the layout/style related things into
`themes/minimalConference/*` and the content related items into
arrays/lists/maps in `config.yaml` (or `content/*.md` markdown files).

**Note:** Currently, the implementation of this is a mess and a lot of content is in the theme.
This needs to be cleaned up.

