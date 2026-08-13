# CANN website

Website for the **Cognition, Anatomy & Neural Networks (CANN)** research group across the University of Oxford and Trinity College Dublin.

## Repository structure

```text
.
├── site/                         # deployable static website
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── assets/
│   └── people/
├── content/people/              # structured people-data migration scaffold
├── scripts/check_site.py        # validation
├── docs/
│   ├── GITHUB_SETUP.md
│   ├── EDITOR_GUIDE.md
│   ├── MAINTAINER_HANDOVER.md
│   └── CUSTOM_DOMAIN.md
└── .github/
    ├── workflows/
    ├── CODEOWNERS
    ├── pull_request_template.md
    └── ISSUE_TEMPLATE/
```

## Recommended governance

- **GitHub organisation owners:** Seán + at least one durable backup owner.
- **`website-maintainers`:** rotating RA + Seán / backup. Repository role: **Maintain**.
- **`website-editors`:** current lab members. Repository role: **Write**.
- **Former lab members:** remove from editing teams when they leave.
- **`main`:** protected; changes arrive via pull request and validation.

This lets the website survive annual RA turnover without transferring ownership of the domain, hosting or repository.

## Deploy

The site deploys from `site/` to **GitHub Pages** using `.github/workflows/deploy-pages.yml`.

One-time setup: **[`docs/GITHUB_SETUP.md`](docs/GITHUB_SETUP.md)**

## Local preview

```bash
python -m http.server 8000 --directory site
```

Then visit `http://localhost:8000`.

## Validate before a pull request

```bash
python scripts/check_site.py
```

GitHub runs the same validation automatically on pull requests.

## Editing your profile

See **[`docs/EDITOR_GUIDE.md`](docs/EDITOR_GUIDE.md)**. Routine text/link edits can be made entirely in the GitHub web interface.

## Maintainer handover

See **[`docs/MAINTAINER_HANDOVER.md`](docs/MAINTAINER_HANDOVER.md)**.

## Data-driven migration

The current site remains a simple static site so it can go live immediately.

`content/people/people.json` is the first migration scaffold for moving repeated people metadata out of hand-written HTML. It is **not yet the sole live source of truth**. A later refactor can generate homepage cards, graph relationships, the directory and profiles from structured content without changing the visual design.

## Custom domain

See **[`docs/CUSTOM_DOMAIN.md`](docs/CUSTOM_DOMAIN.md)**.
