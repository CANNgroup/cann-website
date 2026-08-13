# Contributing to the CANN website

The live website is deployed from the `main` branch. Routine changes should arrive through pull requests rather than direct pushes.

## If you are a lab member updating your own profile

1. Open `site/people/`.
2. Open your HTML file.
3. Click the pencil / **Edit this file** button on GitHub.
4. Change only the text/links you need.
5. Choose **Create a new branch for this commit and start a pull request**.
6. Open the pull request.
7. The website maintainer reviews and merges it.
8. GitHub Pages deploys the merged version automatically.

For a new profile photo, the simplest route is to ask the website maintainer to add the image file, or open a profile-update issue.

## If you are a maintainer

Run before submitting:

```bash
python scripts/check_site.py
```

Preview locally:

```bash
python -m http.server 8000 --directory site
```

Then open `http://localhost:8000`.

## Do not

- commit confidential or unpublished information;
- upload copyrighted images without permission;
- put secrets/API keys in the repository;
- force-push `main`;
- give the domain registrar login to a temporary maintainer.
