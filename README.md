# Keeping Kidz Safe

Static child safety resource. Bold navy, lime and blue design with accessible navigation, family guides, linked official resources and an in-page checklist. Existing page URLs and CNAME are retained.

## Local preview

Run `python3 -m http.server 8765` in this directory and open http://localhost:8765.

## Relaunch checklist

- Preview desktop and mobile; check navigation, checklist, disclosure panels and printing.
- Confirm the expanded scope and all content before replacing the live publication.
- Keep the GitHub Pages custom domain configured for keepingkidzsafe.org.
- In Cloudflare, enable Always Use HTTPS, set minimum TLS 1.2 and verify Full (strict) origin encryption.
- Introduce HSTS after verifying HTTPS works across relevant hosts.
- Set response headers at the Cloudflare edge. GitHub Pages does not interpret a `_headers` file.
- Test Cloudflare challenge/analytics compatibility before enforcing a strict CSP.

Suggested security headers: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`.

The authored code loads no remote libraries or fonts. A baseline CSP for the authored site is `default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'none'`. Deploy in Report-Only first and tailor it to any Cloudflare-injected services. Framing controls must be sent as response headers, not HTML meta tags.

The checklist is memory-only; the site has no accounts, forms, analytics code, or local-storage tracking. Hosting providers may add security or analytics services. Review the privacy page against production settings.
