# KaamMitra.com — Frontend Master Plan
//for viewing diagrams (ctrl+shift+v)
## Version 1 Technology

- **HTML** → Page structure
- **CSS** → Design, layout, responsive UI
- **JavaScript** → Simple interactions

### Version 1 Scope

This is a college-project prototype. We will not build a production-level system yet.

We will not add:
- Backend
- Database
- Complicated APIs
- Real-time location
- Payment gateway
- Complex authentication
- Advanced search algorithms

---

# Overall Frontend Structure

```text
KaamMitra.com
├── PART 1 — HTML
│   ├── A. Public Pages
│   ├── B. Customer Portal
│   ├── C. Worker Portal
│   └── D. Admin Panel
├── PART 2 — CSS
│   ├── A. Global Design
│   ├── B. Public Pages
│   ├── C. Customer Portal
│   ├── D. Worker Portal
│   └── E. Admin Panel
└── PART 3 — JavaScript
    ├── A. Common Functions
    ├── B. Customer Functions
    ├── C. Worker Functions
    └── D. Admin Functions
```

# PART 1 — HTML

## Section A — Project Foundation

### Step H1 — Folder Structure
```text
KaamMitra.com/
├── index.html
├── pages/
├── customer/
├── worker/
├── admin/
└── assets/
    ├── css/
    ├── js/
    └── images/
```

### Step H2 — Common Public Pages
```text
index.html
pages/services.html
pages/find-workers.html
pages/how-it-works.html
pages/contact.html
pages/login.html
pages/register.html
pages/forgot-password.html
```

### Step H3 — Public Worker Profile
```text
pages/worker-profile.html
```

Contains worker name, profile information, skills, experience, rating, location, pricing, and Book/Request button.

## Section B — Customer Portal

### Step H4 — Customer Dashboard
```text
customer/dashboard.html
```
Welcome section, quick actions, booking summary, upcoming bookings, recent requests, saved workers.

**Status: Mostly done.**

### Step H5 — Find Workers
```text
customer/search.html
```
Service search, location search, worker cards, and basic filters.

**Status: Done.**

### Step H6 — Service Request
```text
customer/request-service.html
```
Service, description, location, date, time, budget, additional instructions, and submit request.

### Step H7 — Booking Confirmation
```text
customer/booking-customer.html
```
Worker information, service information, schedule, budget, and confirmation.

**Status: Done.**

### Step H8 — Customer Bookings
```text
customer/bookings.html
```
Upcoming, active, completed bookings, booking cards, and view details.

### Step H9 — Booking Details
```text
customer/booking-details.html
```
Booking ID, worker, service, schedule, payment, status, cancel, and message worker.

### Step H10 — Customer Messages
```text
customer/messages.html
```
Conversation list, chat area, message input, and send button.

### Step H11 — Customer Notifications
```text
customer/notifications.html
```
Booking notifications, messages, service reminders, and completion notifications.

### Step H12 — Customer Profile
```text
customer/profile.html
```
Customer information, contact information, address, and edit profile.

### Step H13 — Saved Workers
```text
customer/saved-workers.html
```
Saved worker cards, view profile, and remove worker.

## Section C — Worker Portal

### Step H14 — Worker Dashboard
```text
worker/dashboard.html
```
Welcome worker, today's jobs, pending requests, active jobs, completed jobs, total earnings, and quick actions.

### Step H15 — Worker Job Requests
```text
worker/requests.html
```
Customer, service, location, date/time, budget, Accept/Reject.

### Step H16 — Worker Jobs
```text
worker/jobs.html
```
Upcoming Jobs, Active Jobs, Completed Jobs.

### Step H17 — Worker Job Details
```text
worker/job-details.html
```
Customer, service, location, date, time, budget, status, Accept, Start Job, Complete Job.

### Step H18 — Worker Messages
```text
worker/messages.html
```
Simple worker-side messaging interface.

### Step H19 — Worker Notifications
```text
worker/notifications.html
```
New request, booking accepted, booking cancelled, new message, and job reminder.

### Step H20 — Worker Profile
```text
worker/profile.html
```
Name, skills, experience, services, location, pricing, rating, and edit profile.

### Step H21 — Worker Earnings
```text
worker/earnings.html
```
Total earnings, completed jobs, pending payment, and earnings history.

**Note: No real payment system in Version 1.**

## Section D — Admin Panel

### Step H22 — Admin Dashboard
```text
admin/dashboard.html
```
Total customers, total workers, total bookings, completed jobs, and pending requests.

### Step H23 — Manage Workers
```text
admin/workers.html
```
Worker list, worker status, approve, reject, and view profile.

### Step H24 — Manage Customers
```text
admin/customers.html
```
Customer list, customer information, and account status.

### Step H25 — Manage Bookings
```text
admin/bookings.html
```
Booking ID, customer, worker, service, date, and status.

### Step H26 — Manage Services
```text
admin/services.html
```
Service categories, add service, edit service, and delete service.

### Step H27 — Admin Reports
```text
admin/reports.html
```
Total jobs, completed jobs, cancelled jobs, total workers, and total customers.

### HTML Total
**27 major steps**

---

# PART 2 — CSS

Main stylesheet:

```text
assets/css/style.css
```

## Section A — Foundation

### Step C1 — Reset & Basic Styles
Style `*`, body, headings, paragraphs, links, and buttons.

### Step C2 — KaamMitra Colors
Main existing primary color:
```text
#1280A5
```
Use project colors consistently.

### Step C3 — Common Layout
Style header, nav, main, section, footer, and container.

### Step C4 — Buttons
Primary, secondary, danger, and success buttons.

### Step C5 — Cards
Common cards for workers, bookings, services, notifications, and dashboard statistics.

### Step C6 — Forms
Input, select, textarea, label, and form groups.

### Step C7 — Responsive Design
Desktop, tablet, and mobile.

## Section B — Customer CSS

- **Step C8** — Customer Dashboard
- **Step C9** — Search / Worker Cards
- **Step C10** — Booking Pages
- **Step C11** — Messages
- **Step C12** — Notifications
- **Step C13** — Profile

## Section C — Worker CSS

- **Step C14** — Worker Dashboard
- **Step C15** — Requests
- **Step C16** — Jobs
- **Step C17** — Job Details
- **Step C18** — Worker Messages
- **Step C19** — Worker Profile
- **Step C20** — Earnings

## Section D — Admin CSS

### Step C21 — Admin Layout
Simple sidebar:
```text
Dashboard
Workers
Customers
Bookings
Services
Reports
Logout
```

- **Step C22** — Admin Dashboard Cards
- **Step C23** — Admin Tables
- **Step C24** — Admin Forms
- **Step C25** — Admin Status Badges
- **Step C26** — Admin Responsive Design

### CSS Total
**26 major steps**

---

# PART 3 — JAVASCRIPT

JavaScript should remain simple. The goal is to make buttons and basic interactions work.

## Section A — Common Functions

### Step J1 — Common Navigation
Basic navigation behavior.

### Step J2 — Alerts / Confirmations
Examples: booking confirmed, booking cancelled, worker approved, worker deleted.

### Step J3 — Basic Form Validation
Check empty fields, invalid email, and missing required information.

## Section B — Customer JavaScript

- **Step J4** — Worker Search
- **Step J5** — Service Request
- **Step J6** — Booking Confirmation
- **Step J7** — Cancel Booking
- **Step J8** — Messages
- **Step J9** — Notifications
- **Step J10** — Profile Editing

No database for Version 1.

## Section C — Worker JavaScript

### Step J11 — Accept Request
`Accept → status becomes Accepted`

### Step J12 — Reject Request
`Reject → status becomes Rejected`

### Step J13 — Start Job
`Start Job → Active`

### Step J14 — Complete Job
`Complete → Completed`

### Step J15 — Worker Messages
Basic chat interaction.

### Step J16 — Worker Profile Edit
Simple edit/save interaction.

## Section D — Admin JavaScript

### Step J17 — Worker Management
Approve, reject, remove.

### Step J18 — Customer Management
Activate, deactivate.

### Step J19 — Booking Management
Pending, confirmed, completed, cancelled.

### Step J20 — Service Management
Add, edit, delete.

### Step J21 — Admin Statistics
Update simple dashboard numbers using demo data.

### JavaScript Total
**21 major steps**

---

# Final Project Structure

```text
KaamMitra.com/
├── index.html
├── pages/
│   ├── services.html
│   ├── find-workers.html
│   ├── how-it-works.html
│   ├── contact.html
│   ├── login.html
│   ├── register.html
│   ├── forgot-password.html
│   └── worker-profile.html
├── customer/
│   ├── dashboard.html
│   ├── search.html
│   ├── request-service.html
│   ├── booking-customer.html
│   ├── bookings.html
│   ├── booking-details.html
│   ├── messages.html
│   ├── notifications.html
│   ├── profile.html
│   └── saved-workers.html
├── worker/
│   ├── dashboard.html
│   ├── requests.html
│   ├── jobs.html
│   ├── job-details.html
│   ├── messages.html
│   ├── notifications.html
│   ├── profile.html
│   └── earnings.html
├── admin/
│   ├── dashboard.html
│   ├── workers.html
│   ├── customers.html
│   ├── bookings.html
│   ├── services.html
│   └── reports.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── main.js
    │   ├── customer.js
    │   ├── worker.js
    │   └── admin.js
    └── images/
```

---

# Development Phases

We will follow this order and not jump randomly between features.

```text
PHASE 1  → HTML Foundation
PHASE 2  → Customer HTML
PHASE 3  → Worker HTML
PHASE 4  → Admin HTML

PHASE 5  → Global CSS
PHASE 6  → Customer CSS
PHASE 7  → Worker CSS
PHASE 8  → Admin CSS

PHASE 9  → Common JavaScript
PHASE 10 → Customer JavaScript
PHASE 11 → Worker JavaScript
PHASE 12 → Admin JavaScript

PHASE 13 → Testing & Cleanup
```

## Complete Version 1 Count

| Part | Steps | Purpose |
|---|---:|---|
| HTML | 27 | Build pages |
| CSS | 26 | Design and responsive UI |
| JavaScript | 21 | Basic interactions |
| **Total** | **74** | **Version 1 Frontend** |

**Important:** 74 steps does not mean 74 complicated features. Many are small tasks.

---

# Version 1 Core Workflow

```text
CUSTOMER
   ↓
Find Worker
   ↓
View Worker Profile
   ↓
Request / Book Service
   ↓
Booking Confirmation
   ↓
Worker Receives Request
   ↓
Worker Accepts
   ↓
Job Starts
   ↓
Job Completed
   ↓
Admin Can View/Manage Booking
```

## Main Development Rule

> **Finish one phase before moving to another.**

Do not keep adding advanced features to pages that are already finished.

The focus is a **clear, understandable, presentable college project**.
