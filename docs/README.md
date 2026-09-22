# KaamMitra.com — Design Documentation

Design documents for the **KaamMitra.com** service marketplace backend.

This documentation is **read-only reference material** — the frontend in
`D:\KaamMitra.com` is complete and will NOT be modified. The backend will be
built in a separate project (`D:\KaamMitra-backend`).

## Document Index

| # | Document | Contents |
|---|----------|----------|
| 01 | [`01-Project-Structure.md`](01-Project-Structure.md) | Complete file/folder structure of KaamMitra.com (frontend) + proposed backend structure |
| 02 | [`02-DFD.md`](02-DFD.md) | Data Flow Diagrams — context (Level 0), Level 1, and Level 2 |
| 03 | [`03-Use-Case-Diagram.md`](03-Use-Case-Diagram.md) | Use case diagram + use case descriptions (actors, pre/post conditions) |
| 04 | [`04-ER-Diagram.md`](04-ER-Diagram.md) | Entity Relationship Diagram + relationship table |
| 05 | [`05-Class-Diagram.md`](05-Class-Diagram.md) | Class diagram (domain model for the backend) |

## How to view the diagrams

The diagrams are written in **Mermaid** so they render automatically:

- **GitHub / GitLab** — rendered inline automatically
- **VS Code** — install the *Markdown Preview Mermaid Support* extension and open the Preview (Ctrl+Shift+V)
- **mermaid.live** — paste the diagram code to export PNG/SVG for your report

## Systems overview

```
┌──────────────────────────────┐
│  KaamMitra.com Frontend       │  Static HTML/CSS/JS — D:\KaamMitra.com
│  Customer | Worker | Admin    │  (Live Server :5501)
└──────────────┬───────────────┘
               │ HTTP REST + JSON (fetch)
┌──────────────▼───────────────┐
│  FastAPI Backend              │  D:\KaamMitra-backend  (:8000)
│  SQLAlchemy + MySQL           │  JWT authentication
└──────────────────────────────┘
```

### Actors / Roles
- **Guest** — unregistered visitor (browse only)
- **Customer** — hires workers
- **Worker** — provides services
- **Admin** — manages the platform
- **Payment Gateway** — external system (eSewa / Khalti / Card)