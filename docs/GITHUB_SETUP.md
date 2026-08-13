# One-time GitHub setup

Recommended repository: `CANNgroup/cann-website`

## 1. Create the repository

Create a repository in the **CANNgroup** GitHub organisation.

Recommended:
- name: `cann-website`
- visibility: **Public**
- do not initialise with another README if you are uploading this prepared repository

Upload/push the contents so that `site/`, `.github/`, `docs/`, etc. are at the repository root.

## 2. Enable GitHub Pages

Repository → **Settings** → **Pages** → **Build and deployment**.

Set the source to **GitHub Actions**.

Push/merge to `main`. The workflow in `.github/workflows/deploy-pages.yml` will validate and deploy `site/`.

## 3. Create two GitHub teams

### `website-maintainers`
Suggested members:
- Seán
- current website RA
- optionally one additional technically comfortable long-term member

Give this team **Maintain** access to `cann-website`.

### `website-editors`
Suggested members:
- current lab members who should be able to propose changes

Give this team **Write** access.

When somebody leaves the lab, remove them from the relevant team(s).

## 4. Protect `main`

Create a branch ruleset for `main`.

Recommended:
- require a pull request before merging;
- require at least 1 approval;
- require status checks;
- require the `check-site` validation job;
- require conversation resolution;
- block force pushes;
- block branch deletion;
- require Code Owner review after the `website-maintainers` team exists.

## 5. Confirm CODEOWNERS

`.github/CODEOWNERS` points changes to `@CANNgroup/website-maintainers`.

Once the team exists and has repository access, require Code Owner review in the `main` ruleset.

## 6. Test the workflow

Make a trivial change in a branch, open a PR and confirm:
- `Validate website` passes;
- a maintainer can approve;
- merge succeeds;
- the Pages deployment succeeds.

## 7. Connect the custom domain

Follow `docs/CUSTOM_DOMAIN.md` once the domain has been chosen/purchased.

## 8. Invite lab members

Send current members `docs/EDITOR_GUIDE.md`.

The rule is:
- propose your own update via PR;
- the rotating website maintainer reviews/merges;
- access is removed when you leave the lab.
