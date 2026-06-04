# zoom-app-placeholder — Zoom App Placeholder Worker

A minimal Cloudflare Worker that serves a placeholder page for a Zoom App during the Marketplace submission and approval process.

## What it does

Serves a simple HTML page with the message "Zoom App Placeholder — This is a temporary landing page for Zoom app setup." The page is correctly configured to be embedded inside the Zoom client as an app iframe.

## Why it exists

Zoom's App Marketplace requires a live, accessible HTTPS URL for the app's home URL during submission — even before the real app is built. This worker satisfies that requirement with minimal effort while development continues elsewhere.

## How it works

A single Cloudflare Worker (`src/index.js`) responds to all requests with a static HTML page. The response includes the security headers Zoom requires for iframe embedding:

| Header | Value |
|---|---|
| `Content-Security-Policy` | Allows scripts from `appssdk.zoom.us`, frames from `zoom.us` and `*.zoom.us` |
| `Strict-Transport-Security` | Enforces HTTPS |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |

## Development

```bash
npm run dev      # local dev with wrangler
npm run deploy   # deploy to Cloudflare
npm test         # run vitest tests
```
