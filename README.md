# GiantJSON Viewer+

A JSON viewer and analysis toolkit built for files that crash everything else.

Made for developers, analysts, and QA engineers who work with massive datasets — multi-GB logs, database dumps, API responses — directly on Android. **No cloud, no account, no limits.**

> This is a read-only viewer and analysis tool — built for inspecting and understanding data, not editing it.

While most viewers struggle above 50MB, GiantJSON uses a native **Rust + SIMD engine** to handle multi-gigabyte files without running out of memory. Built and maintained by a solo indie developer.

---

## Private & Secure

Everything runs locally on your device.

- All search, analysis, and export happens offline
- No cloud uploads, no tracking servers
- GenAI Regex only calls AI to generate patterns — your data never leaves

---

## Built for Performance

- **Multi-GB Support:** Open files that other viewers can't handle
- **Smart Indexing:** First load builds an index for instant navigation
- **Memory Safe:** Designed to prevent Out-Of-Memory crashes on any device
- **Rust + SIMD Core:** Native speed, not a JavaScript wrapper

---

## Developer Toolkit

- **SQL & CSV Export:** Convert to SQL queries or CSV tables
- **Data Masking:** Redact fields during export for safe sharing
- **Search & Regex:** Full-text search with regex support
- **Advanced Filter:** Visual query builder with field-level conditions
- **GenAI Regex Builder:** Describe what you need, AI writes the regex
- **Path Navigation:** Jump directly to any node
- **Schema Export:** Export structure as JSON Schema, TypeScript, or Markdown
- **Schema Analysis:** Auto-detect field types and data patterns for export
- **Formatter:** Auto-prettify and syntax highlight raw content

---

## API Client

Full-featured REST and GraphQL client, right on your phone:

- GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS + GraphQL queries
- **Auth:** Basic, Bearer, OAuth 2.0 (with PKCE), AWS Signature V4
- Postman collection import with folder structure and variables
- Environment support with variable precedence
- File attachments, binary uploads, session cookies
- Import/export via cURL
- Responses open directly in the viewer

---

## HAR Analyzer

Drop a `.har` file and get a full network analysis dashboard:

- Overview stats: request count, response times, errors, transfer size
- Timing breakdown, status distribution, domain summary
- Filter by method, status, content type, domain, or response time
- Request detail tabs: headers, cookies, body, timing waterfall, TLS
- Clone any request to API Client or copy as cURL

---

## Basic Mock API Server

Turn your phone into a mock API server:

- Custom endpoints with method, status code, and headers
- Point responses to local files
- Web dashboard with request logging

---

## Local Receive

Transfer files from desktop to phone over WiFi:

- Drag and drop from your browser — no cables, no cloud
- No account or desktop app needed

---

## 3 View Modes

1. **Browser:** Stream through gigabytes like a feed
2. **Structure:** Visualize data as a graph to understand its shape
3. **Text:** Raw view with syntax highlighting and formatting

---

## More

- **Markdown Viewer:** Render `.md` files
- **Bookmarks:** Save locations in huge files to find later in Browser Mode
- **Unescape & Prettify:** Fix serialized JSON in one tap
- **Hide Paths:** Collapse irrelevant arrays or objects
- **Validator:** Validate against a schema file

**Supports:** `.json`, `.jsonl`, `.ndjson`, `.har`, `.md`

---

This app is a one-person project under active development. If you find it useful, a review on Google Play helps more than you'd think. And if something isn't working right, the in-app feedback goes straight to the developer.

---

**Keywords:** json viewer, json reader, large json, big json, json formatter, json parser, json to sql, json to csv, log viewer, developer tools, offline json, api client, graphql, postman, mock api, mock server, har viewer, data masking, file transfer, markdown viewer, json schema, json validator, json path, huge file opener, json tool
