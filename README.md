# GiantJSON Viewer+

**A JSON viewer and analysis toolkit built for files that crash everything else**

Native Rust + SIMD engine. Multi-GB JSON, structural diff, HAR analysis, API client, SQL export — all offline, all on your Android device.

[![Google Play](https://img.shields.io/badge/Google%20Play-Download-brightgreen?style=for-the-badge&logo=google-play)](https://play.google.com/store/apps/details?id=com.giantjsonviewer)
[![Website](https://img.shields.io/badge/Website-giantjson.com-blue?style=for-the-badge&logo=google-chrome&logoColor=white)](https://giantjson.com)
[![Docs](https://img.shields.io/badge/Docs-Documentation-orange?style=for-the-badge&logo=bookstack&logoColor=white)](https://giantjson.com/docs/)

`Rust + SIMD Core` · `No Account` · `Offline` · `Read-Only & Safe`

---

## While Others Crash at 50 MB, This Opens Gigabytes

A native Rust core with SIMD acceleration handles what JavaScript-based viewers simply cannot. Tested with files over **100 GB**.

- **Rust + SIMD Core** — Native code, not a JavaScript wrapper. SIMD acceleration for search and parsing on ARM64 devices.
- **Smart Indexing** — First load builds a persistent index. Every subsequent open is near-instant.
- **Memory Safe** — Streaming architecture prevents Out-Of-Memory crashes on any Android device, regardless of file size.
- **Private by Design** — Your files never leave the device. No cloud storage, no upload, no account required.

## Supported Formats

| Format | Extensions | Details |
|--------|-----------|---------|
| **JSON** | `.json` `.jsonc` `.jsonld` `.geojson` `.topojson` | Standard, minified, and large-value JSON files |
| **NDJSON / JSONL** | `.ndjson` `.jsonl` `.ldjson` | Line-delimited datasets and event logs |
| **CBOR** | `.cbor` | Binary — automatically transcoded to JSON on first open |
| **MessagePack** | `.msgpack` `.mp` | Binary — automatically transcoded to JSON on first open |
| **HAR** | `.har` | HTTP Archive files from Chrome DevTools, Firefox, etc. |
| **Markdown** | `.md` `.markdown` `.mdown` | Full formatting, up to 50 MB |

Text must be **UTF-8**. The index format sets the outer bounds for JSON and NDJSON — up to **1 TB** per file, 255 levels of nesting and ~4.3 billion objects and arrays — and the index itself needs free space on the device. See [Known Limitations](https://giantjson.com/docs/known-limitations/).

Files also come in from the clipboard, a direct URL, the API Client, or drag-and-drop from your computer over WiFi.

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
- **Schema Analysis** — key types and hierarchy, without loading values
- **Schema Export** — TypeScript interfaces or JSON Schema Draft-07
- **Visual Export** — save the structure graph as PNG

### Text Mode — Raw Viewer
High-performance raw text viewer for log analysis and deep search operations.
- **Advanced Search** — regex or standard with scrollable match navigation
- **Occurrence Counter** — count matches across the entire file
- **Persistent Highlights** — mark terms and track them as you scroll
- **Long Line Handling** — extremely long lines are detected, with truncate or hide options
- **GenAI Regex Helper** — describe your search in plain English and get the pattern back

## Compare Files — Structural Diff

A structural diff of two JSON or NDJSON files, not a line diff. Formatting and key order never count as changes.

- **Key-Based List Matching** — list items are paired by an auto-detected key field (`id`, `sku`, `uuid`, …), so a reordered list is not a wall of noise. Override it globally or per list, or switch it off.
- **Move Detection** — records that only changed position are reported as moves, not as an add plus a delete.
- **Ignore Fields** — suppress `updated_at`, `trace_id` and friends by name or by path. The report states how many differences were hidden, so a filtered report never poses as a clean one.
- **Path Scoping** — point the whole comparison at one address such as `$.data.items` and ignore the envelope entirely.
- **Grouped Report** — opens on a summary with real before-and-after values and detected patterns, not a raw dump. Filter by add / delete / change / move, then export the report as Markdown or NDJSON.

[Read the guide](https://giantjson.com/docs/compare-json-files-android/) · [NDJSON compare](https://giantjson.com/docs/compare-ndjson-files/)

## HAR Analyzer

Drop a `.har` file exported from Chrome DevTools, Firefox, or any proxy tool and get an instant breakdown.
- **Overview Dashboard** — total requests, transfer size, avg response time, error count
- **Timing Waterfall** — DNS, connect, SSL, wait, receive breakdown per request
- **Per-Request Detail** — headers, cookies, request/response body with syntax highlighting, timing, TLS info
- **Filter & Search** — by method, status code, resource type, domain, or response time
- **Clone to API Client** — replay any HAR request in the built-in API client, or copy it as cURL

## API Client

REST & GraphQL client built for mobile. Not a full Postman replacement, but covers most real-world workflows.

- **HTTP Methods** — GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS, and GraphQL with variable support
- **Authentication** — Basic, Bearer, API Key, OAuth 2.0 with PKCE, AWS Signature V4
- **Postman Collections & Environments** — import and export both, v2.0 and v2.1, with folder structure and inherited auth
- **cURL Import & Export** — paste from DevTools, export to share
- **Environments & Variables** — `{{variable}}` syntax with Postman-compatible precedence
- **Network Metrics** — DNS, TCP, TLS, TTFB, and download timing per request
- **File Attachments** — multipart uploads, binary body payloads, session cookies
- **Responses Open in Viewer** — JSON responses go straight into the viewer to navigate, filter, search and export

## Analysis & Query Tools

- **Visual Query Builder** — build multi-condition filters with AND/OR logic and parentheses grouping, no code required
- **GenAI Regex Builder** — describe the pattern you want in plain English and get it back. Only your description is sent; your file never leaves the device.
- **SQL & CSV Export** — convert JSON to database-ready SQL (MySQL, PostgreSQL, SQLite, SQL Server, Oracle, MariaDB) or CSV
- **Data Masking** — redact sensitive fields during export for safe sharing
- **Schema Validation** — validate against JSON Schema Draft-07

## More Features

- **Local Receive** — transfer files from your computer over WiFi, USB tethering or USB-C Ethernet. No cables to the cloud, no account.
- **Mock API Server** — turn your phone into a mock server with custom endpoints and a live web dashboard
- **Sample JSON Generator** — test data from 12 templates or your own JSON Schema, streamed to disk up to 100 GB. Free.
- **Unescape & Prettify** — fix double-escaped JSON and beautify minified content in one tap
- **Markdown Viewer** — render `.md` files with full formatting, useful for the README bundled with a data export
- **Bookmarks** — save exact positions deep inside large files, even in multi-GB NDJSON streams
- **Base64 Detection** — 40+ formats auto-detected, preview images inline, extract decoded files
- **Binary Preview** — see what a `.cbor` or `.msgpack` file holds and its estimated JSON size before converting

## Web Tools

GiantJSON hosts developer tools locally on your phone. Open a browser on any device on the same network, enter the PIN shown on the phone, and use them. The server is reachable only from your local network — never from the internet or over mobile data.

- **File Transfer** — drag-and-drop or CLI (curl, PowerShell, Python), and pull files back from the phone as a ZIP
- **Shared Clipboard** — copy text in either direction
- **JWT Decoder** — decode header, payload, signature with expiry status, and verify HS256 / RS256
- **Timestamp Converter** — epoch to UTC, local, ISO 8601, auto-format detection
- **JSON Formatter** — format, minify, stringify, or unescape
- **URL Encoder / Decoder** — encode, decode, and parse URL components
- **Hash Generator** — MD5, SHA-1, SHA-256, SHA-512 and HMAC signatures, with hash comparison

## Free and PRO

Reading your data is free, at any file size. That covers all three viewing modes, filters, bookmarks, the HAR analyzer, the sample generator, binary conversion, GET requests in the API Client, and comparing files up to 1 MB per side.

A PRO licence unlocks the output and developer-tool side: JSON / CSV / SQL and schema export, regex (in filters, in search and in the builder), keyword highlighting, JSON transforms, schema validation, the mock API server, the hosted web tools with their JWT / timestamp / URL / hash tools, the non-GET HTTP methods, and comparing larger files. Available as a monthly subscription or a one-time lifetime purchase.

## Documentation

- [Complete Overview](https://giantjson.com/docs/overview/) — indexing, storage, and how the three modes fit together
- [Viewing Large Files](https://giantjson.com/docs/viewing-large-files/)
- [Compare JSON Files](https://giantjson.com/docs/compare-json-files-android/)
- [HAR File Analyzer](https://giantjson.com/docs/har-file-analyzer/)
- [API Client](https://giantjson.com/docs/api-client-android/)
- [JSON to CSV / SQL Export](https://giantjson.com/docs/json-to-csv-export/)
- [Sample JSON Generator](https://giantjson.com/docs/sample-json-generator/)
- [Known Limitations](https://giantjson.com/docs/known-limitations/) — the honest list of what it does not do
- [Privacy Policy](https://giantjson.com/docs/privacy-policy/)

## Support Independent Development

GiantJSON is a one-person project — built and maintained by a solo indie developer. It started as a tool to solve a problem no other app handled well, and evolved into a full developer toolkit.

If it's useful to you, a review on Google Play helps more than you'd think. And if something isn't working right, in-app feedback goes straight to me.

[![Google Play](https://img.shields.io/badge/Download-Google%20Play-brightgreen?style=for-the-badge&logo=google-play)](https://play.google.com/store/apps/details?id=com.giantjsonviewer)

---

© 2026 Kotysoft | [Documentation](https://giantjson.com/docs/) | [Report a Bug](https://github.com/kotysoft/GiantJSON/issues)
