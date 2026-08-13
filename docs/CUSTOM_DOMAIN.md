# Custom domain setup

The domain should be registered in an account controlled long-term by Seán / CANN, not by the rotating website RA.

GitHub's current Pages guidance recommends verifying the custom domain before use and recommends a `www` subdomain even when an apex/root domain is also configured.

## Recommended pattern

If you buy, for example, `cannlab.org`, configure both:
- `cannlab.org`
- `www.cannlab.org`

and use `www.cannlab.org` as the canonical Pages domain.

## GitHub side

1. Verify the domain in the CANNgroup organisation settings if appropriate.
2. Repository → **Settings** → **Pages**.
3. Under **Custom domain**, enter the chosen domain and save.
4. Once DNS is correct and the certificate is ready, enable **Enforce HTTPS**.

Because this repository deploys Pages through a GitHub Actions workflow, a `CNAME` file in `site/` is not required.

## DNS side

For a `www` subdomain, create a CNAME pointing to:

`CANNgroup.github.io`

For an apex/root domain, use the **current** GitHub Pages DNS values documented by GitHub rather than copying old IP addresses from a blog post.

Official reference:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Important

- Avoid wildcard DNS records such as `*.example.org`.
- Add/verify the custom domain on GitHub before pointing DNS at it.
- Keep registrar/DNS ownership with a durable account, not a temporary RA.
