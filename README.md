# Giant JSON Viewer

**High-Performance JSON Viewer & Analyzer for Android**

Giant JSON Viewer is a native Android application engineered for developers and data analysts who need to inspect huge JSON files on the go. While standard market viewers crash on files larger than 50MB, Giant JSON Viewer reliably handles multi-hundred megabyte files and has been tested with files up to several gigabytes.

It provides a desktop-class environment for browsing, searching, and converting massive datasets directly on your mobile device.

## Why Giant JSON Viewer?

*   **Massive File Support:** Uses advanced streaming techniques to open files far exceeding the Android RAM limit.
*   **Smart Indexing:** Builds a rapid-access index on first open. Once indexed, even multi-gigabyte files open with minimal loading time.
*   **High Performance:** Navigate through millions of lines rapidly.
*   **Data Reliability:** Built for stability, ensuring critical data is always accessible offline.

## Viewing Modes

The application provides three specialized modes to interact with your data:

### 1. Text Mode (Raw Viewer)
A high-performance raw text viewer optimized for log analysis and deep search operations. Supported for **JSON, NDJSON, and Plain Text**.
*   **Advanced Search:** Use Regex or standard search to find data instantly.
*   **Occurrence Counter:** Efficiently count matches across the entire file.
*   **Visual Tools:**
    *   **Long Line Handling:** Detects extremely long lines and offers options to truncate (5KB preview) or hide them completely to prevent crashes.
    *   **Syntax Highlighting:** Color-coded syntax (JSON Only) for readability.
    *   **Persistent Highlights:** Mark specific terms to track them as you scroll.
*   **Navigation:** Go To Line, Tree View Toggle (JSON Only).
*   **Integrated Tools:**
    *   **GenAI Regex Helper:** Describe your search intent in natural language, and the AI generates the precise Regex pattern for you.
    *   **Regex Builder:** A dedicated UI to test and refine complex regular expressions before applying them.

### 2. Browser Mode (Tree Viewer)
An interactive hierarchical view designed for navigating deeply nested structures like API responses. Supported for **JSON and NDJSON**.
*   **Organization:**
    *   **Bookmarks:** Save deep paths to revisit later.
    *   **Hidden Paths:** Hide irrelevant fields (e.g., "metadata") to focus on the data that matters.
*   **Smart Navigation:**
    *   **Sibling Navigation:** Quickly jump between adjacent objects in an array (Previous/Next Sibling).
    *   **Breadcrumbs:** Track your exact location in the JSON hierarchy.
    *   **Jump to Path/Index:** Utilize full JSONPath syntax or jump directly to specific items in massive arrays (e.g., `$.store.book[0]` or just `500000`).
    *   **Infinite Scrolling:** Seamlessly navigate through arrays with millions of items.

### 3. Structure Mode (Schema Viewer)
A "bird's eye view" visualization of your JSON schema, essential for understanding the shape of unfamiliar data. Supported for **JSON and NDJSON**.
*   **Interactive Graph:** Visualize your JSON structure as a zoomable, pannable tree diagram.
*   **Schema Analysis:** Analyze key types and hierarchy without loading values.
*   **Visual Export:** Save the structure graph as a high-resolution PNG image.
*   **Schema Export:** Generate TypeScript interfaces or JSON Schema (Draft-07) definitions.

## Advanced Data Analysis

### Graphical Query Builder (Smart Filter)
Designed for speed and ease of use, the Browser Mode features a powerful visual query builder.
*   **Visual Logic:** Build complex queries using a graphical interface with nested logic (AND, OR, Parentheses).
*   **No Code Required:** Select keys, operators (Equals, Contains, Regex, etc.), and values from dropdowns instead of writing manual queries.
*   **Instant Re-use:** Every filter run is cached as a "smart index". Re-applying a previous filter on a massive file is instant.
*   **Export Results:** You can export the filtered dataset directly to JSON, CSV, or SQL.

## Dedicated Tools
Quick-access utilities available directly from the Recent Files menu:
*   **Unescape JSON:** Clean up stringified JSON strings (removing backslashes) to perform analysis.
*   **Just Make Pretty:** A simple tool to format/beautify JSON text without opening the full viewer.
*   **Schema Validation:** Validate your JSON content against a standard JSON Schema (Draft-07).

## Data Conversion & Export
Transform your JSON data into compatible formats for analysis.
*Note: Export options are context-aware and appear when viewing arrays or objects compatible with tabular conversion.*

*   **Customizable Export:** It's not just a blind dump. You can **select specific keys** to include and **rename fields** during the export process.
*   **SQL Analyzer:** (During Export) Analyzes the first batch of records to automatically detect column types and schema for SQL export.
*   **SQL Export:** Generate `INSERT` statements for SQLite, MySQL, PostgreSQL, SQL Server, Oracle, and MariaDB.
*   **CSV Export:** Flatten extracted data into spreadsheet-compatible CSV files.


## Supported Formats
*   **JSON** (Standard, Minified, and Large-Value)
*   **NDJSON** (Newline Delimited JSON / JSONL)
*   **Plain Text** (Text Mode Only)

---

## Support Indie Development ❤️

We are solo developers and this project is our baby. We have engineered it from the ground up to handle data scales that others said were impossible on mobile.

We invite you to give it a try! If you enjoy using Giant JSON Viewer, please support us by leaving a **review on Google Play**. Your feedback ensures we can keep improving the tool you rely on.

Encountered a bug or have a suggestion? **[Report it on GitHub](https://github.com/kotysoft/GiantJSON/issues)**.

**[Download on Google Play](https://play.google.com/store/apps/details?id=com.giantjsonviewer)**
