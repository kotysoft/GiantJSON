# GiantJSON Viewer+

**A JSON viewer and analysis toolkit built for files that crash everything else**

Native Rust + SIMD engine. Multi-GB JSON, HAR analysis, API client, SQL export — all offline, all on your Android device.

[![Google Play](https://img.shields.io/badge/Google%20Play-Download-brightgreen?style=for-the-badge&logo=google-play)](https://play.google.com/store/apps/details?id=com.giantjsonviewer)
[![Website](https://img.shields.io/badge/Website-giantjson.com-blue?style=for-the-badge&logo=google-chrome&logoColor=white)](https://giantjson.com)
[![Docs](https://img.shields.io/badge/Docs-Documentation-orange?style=for-the-badge&logo=bookstack&logoColor=white)](https://giantjson.com/docs/)

`Rust + SIMD Core` · `No Cloud` · `No Account` · `Read-Only & Safe`

---

## While Others Crash at 50 MB, This Opens Gigabytes

A native Rust core with SIMD acceleration handles what JavaScript-based viewers simply cannot. Tested with files over **100 GB**.

- **Rust + SIMD Core** — Native code, not a JavaScript wrapper. SIMD acceleration for search and parsing on ARM64 devices.
- **Smart Indexing** — First load builds a persistent index. Every subsequent open is near-instant.
- **Memory Safe** — Streaming architecture prevents Out-Of-Memory crashes on any Android device, regardless of file size.
- **Private by Design** — Everything runs locally. No cloud, no tracking, no account required.

## Supported Formats

| Format | Details |
|--------|---------|
| **JSON** | Standard, minified, and large-value JSON files |
| **NDJSON / JSONL** | Line-delimited datasets and event logs |
| **CBOR** | Binary — automatically transcoded to JSON on first open |
| **MessagePack** | Binary — automatically transcoded to JSON on first open |
| **HAR** | HTTP Archive files from Chrome DevTools, Firefox, etc. |
| **Markdown** | [.md](cci:7://file:///c:/DEV/Android/JSON/web-docs.md:0:0-0:0) file rendering with full formatting |

## Three Viewing Modes

### Browser Mode — Tree Viewer
Interactive hierarchical view for navigating deeply nested JSON structures. Stream through gigabytes like a feed.
- **Infinite Scrolling** — navigate arrays with millions of items
- **Bookmarks** — save deep paths to revisit later
- **Hidden Paths** — collapse irrelevant fields to focus on what matters
- **Breadcrumbs** — track your exact location in the hierarchy
- **Jump to Path/Index** — JSONPath syntax or direct array index
- **Base64 Detection** — 40+ formats auto-detected, preview images inline, extract decoded files

### Structure Mode — Schema Viewer
Bird's-eye view of your JSON schema — visualize the shape of unfamiliar data without reading it line by line.
- **Interactive Graph** — zoomable, pannable tree diagram
- **Schema Export** — TypeScript interfaces or JSON Schema Draft-07
- **Visual Export** — save the structure graph as PNG

### Text Mode — Raw Viewer
High-performance raw text viewer for log analysis and deep search operations.
- **Advanced Search** — regex or standard with scrollable match navigation
- **Occurrence Counter** — count matches across the entire file
- **Persistent Highlights** — mark terms and track them as you scroll
- **GenAI Regex Helper** — describe your search in plain English, AI generates the regex

## HAR Analyzer

Drop a `.har` file exported from Chrome DevTools, Firefox, or any proxy tool and get an instant breakdown.
- **Overview Dashboard** — total requests, transfer size, avg response time, error count
- **Timing Waterfall** — DNS, connect, SSL, wait, receive breakdown per request
- **Per-Request Detail** — headers, cookies, request/response body with syntax highlighting, timing, TLS info
- **Filter & Search** — by method, status code, content type, domain, or response time
- **Clone to API Client** — replay any HAR request in the built-in API client

## API Client

REST & GraphQL client built for mobile. Not a full Postman replacement, but covers most real-world workflows.

- **HTTP Methods** — GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS, and GraphQL with variable support
- **Authentication** — Basic, Bearer Token, OAuth 2.0 with PKCE, AWS Signature V4
- **Postman Collection Import** — v2.0 and v2.1 with folder structure and inherited auth
- **cURL Import & Export** — paste from DevTools, export to share
- **Environments & Variables** — `{{variable}}` syntax with Postman-compatible precedence
- **Network Metrics** — DNS, TCP, TLS, TTFB, and download timing per request
- **File Attachments** — multipart uploads, binary body payloads, session cookies

## Analysis & Query Tools

- **Visual Query Builder** — build multi-condition filters with AND/OR logic and parentheses grouping, no code required
- **GenAI Regex Builder** — describe what you want in plain English, on-device AI generates the pattern
- **SQL & CSV Export** — convert JSON to database-ready SQL (MySQL, PostgreSQL, SQLite, SQL Server, Oracle, MariaDB) or CSV
- **Data Masking** — redact sensitive fields during export for safe sharing
- **Schema Validation** — validate against JSON Schema Draft-07

## More Features

- **Local Receive** — transfer files from desktop via WiFi drag-and-drop, no cables or cloud needed
- **Mock API Server** — turn your phone into a mock server with custom endpoints and a web dashboard
- **Unescape & Prettify** — fix double-escaped JSON and beautify minified content in one tap
- **Bookmarks** — save exact positions deep inside large files, even in multi-GB NDJSON streams
- **Base64 Detection** — 40+ formats auto-detected, preview images inline, extract decoded files

## Web Tools

GiantJSON hosts developer tools locally on your phone. Open a browser on any device on the same network and use them. Nothing is sent to the internet.

- **File Transfer** — drag-and-drop or CLI (curl, PowerShell, Python)
- **JWT Decoder** — decode header, payload, signature with expiry status
- **Timestamp Converter** — epoch to UTC, local, ISO 8601, auto-format detection
- **JSON Formatter** — format, minify, stringify, or unescape
- **URL Encoder / Decoder** — encode, decode, and parse URL components

## Support Independent Development

GiantJSON is a one-person project — built and maintained by a solo indie developer. It started as a tool to solve a problem no other app handled well, and evolved into a full developer toolkit.

If it's useful to you, a review on Google Play helps more than you'd think. And if something isn't working right, in-app feedback goes straight to me.

[![Google Play](https://img.shields.io/badge/Download-Google%20Play-brightgreen?style=for-the-badge&logo=google-play)](https://play.google.com/store/apps/details?id=com.giantjsonviewer)

---

© 2026 Kotysoft | [Documentation](https://giantjson.com/docs/) | [Report a Bug](https://github.com/kotysoft/GiantJSON/issues)
