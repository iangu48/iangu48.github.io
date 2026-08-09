# iangu.me

My personal site. Plain HTML and CSS — no framework, no dependencies, no build step.

```
index.html              the entire page
assets/css/styles.css   the entire stylesheet
assets/img/             portrait (two sizes, served via srcset)
assets/resume.pdf       résumé linked from the hero
CNAME                   custom domain (iangu.me)
```

## Editing

Open `index.html` and edit the markup directly. The sections are commented and
in the order they appear on the page.

- **Work** — add a `<li class="role">` to the `.roles` list. Older roles live in
  the collapsed `<details class="earlier">` block.
- **Projects** — add a `<li class="card">` to `.cards`. The grid reflows on its
  own; there is no column count to update.
- **Résumé** — replace `assets/resume.pdf`.

Colours, spacing, and the content width are CSS custom properties at the top of
`styles.css`.

## Previewing

No tooling required — open `index.html` in a browser. To exercise the absolute
paths (`/assets/...`) the way GitHub Pages serves them, run a local server:

```
python3 -m http.server 8000
```

## Deploying

Push to `master`. The workflow in `.github/workflows/deploy.yml` mirrors the repo
root onto the `gh-pages` branch, which is what Pages serves.

Alternatively, set Settings → Pages → Source to `master` / `/ (root)` and delete
`.github/` — then a push is the whole deploy.
