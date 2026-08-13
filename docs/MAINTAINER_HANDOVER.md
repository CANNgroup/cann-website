# Website maintainer handover

This is designed for a rotating RA / website maintainer.

## Ownership that should NOT rotate

Keep these under long-term control:

- CANNgroup GitHub organisation ownership: Seán + at least one long-term backup owner.
- Domain registrar account: Seán / a durable lab or institutional admin account.
- Recovery email and recovery methods for those owner accounts.

A departing RA should never be the sole owner of the GitHub organisation, domain, or DNS.

## Maintainer responsibilities

- review and merge profile/news pull requests;
- monitor the `Validate website` GitHub Action;
- add/remove people and update alumni status;
- keep image credits/permissions clear;
- make design/code changes through pull requests;
- periodically check external links;
- keep website documentation up to date.

## Annual handover

Before the current RA leaves:

1. Add the successor to `@CANNgroup/website-maintainers`.
2. Give the team **Maintain** access to the repository.
3. Have the successor merge one small test PR.
4. Have the successor inspect one successful Pages deployment.
5. Review the custom-domain/DNS documentation together.
6. Remove the departing RA from `website-maintainers`.
7. If they are leaving the lab, remove them from `website-editors` too.
8. Update their website status to alumnus if appropriate.
9. Confirm the departing RA is not a GitHub organisation owner unless there is a specific reason they should remain one.

## No shared deployment password

The supplied GitHub Pages workflow uses GitHub's Pages deployment permissions. It does not require a shared FTP password or long-lived deploy token in the repository.

## Rollback

If a bad change reaches production:

1. Open the merged pull request / commit.
2. Revert it on GitHub.
3. Merge the revert.
4. Pages deploys the restored site automatically.
