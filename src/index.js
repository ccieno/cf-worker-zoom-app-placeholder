export default {
  async fetch(request) {
    const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Zoom App Placeholder</title>
</head>
<body>
  <h1>Zoom App Placeholder</h1>
  <p>This is a temporary landing page for Zoom app setup.</p>
</body>
</html>`;

    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Content-Security-Policy": [
          "default-src 'self'",
          "script-src 'self' https://appssdk.zoom.us",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: https:",
          "connect-src 'self' https://appssdk.zoom.us https://api.zoom.us https://zoom.us",
          "frame-ancestors https://zoom.us https://*.zoom.us",
          "base-uri 'self'",
          "object-src 'none'"
        ].join("; ")
      }
    });
  }
};