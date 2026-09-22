# 01 — KaamMitra.com Project Structure

## 1. Existing Frontend — `D:\KaamMitra.com`

Complete static frontend. HTML/CSS/JS only. Demo behavior runs on
**localStorage** (no server).

```
D:\KaamMitra.com\
│
├── .git\                            # Git repository history
├── .vscode\
│   └── settings.json                # Live Server port 5501
│
├── index.html                       # Landing page: hero search, categories,
│                                    #   how-it-works, portals, contact
│
├── pages\                           # PUBLIC pages
│   ├── login.html                   #   Login (email or phone + password)
│   ├── register.html                #   Register (customer / worker role)
│   ├── forgot-password.html         #   Password recovery request
│   ├── services.html                #   Service categories & search
│   ├── workers.html                 #   Find workers (search + filters)
│   ├── worker-profile.html          #   Public worker profile (?worker= param)
│   └── how-it-works.html            #   How the platform works (static)
│
├── customer\                        # CUSTOMER PORTAL (13 pages)
│   ├── dashboard.html               #   Overview: quick actions, activity, bookings,
│   │                                #     saved workers, payment reminder
│   ├── search.html                  #   Find & filter workers
│   ├── bookings.html                #   My bookings (overview + lists)
│   ├── booking-details.html         #   Booking detail (worker, service, schedule)
│   ├── booking-customer.html        #   Booking confirmation page
│   ├── request-service.html         #   Service request form (full form)
│   ├── saved-workers.html           #   Saved workers list
│   ├── messages.html                #   Chat with workers
│   ├── notifications.html           #   Notifications + mark-all-read
│   ├── payment.html                 #   Make payment (cash/eSewa/Khalti/card) + history
│   ├── review.html                  #   Leave a review (rating + comment)
│   ├── profile.html                 #   Customer profile (view)
│   └── settings.html                #   Account + notification settings
│
├── worker\                          # WORKER PORTAL (9 pages)
│   ├── dashboard.html               #   Overview: requests, active jobs, earnings
│   ├── requests.html                #   New job requests (accept / reject)
│   ├── jobs.html                    #   My jobs (start / complete)
│   ├── job-details.html             #   Single job detail + status flow
│   ├── earnings.html                #   Earnings summary + transactions
│   ├── messages.html                #   Chat with customers
│   ├── notifications.html           #   Notifications + mark-all-read
│   ├── profile.html                 #   Worker profile (edit via modal)
│   └── settings.html                #   Availability + notification settings
│
├── admin\                           # ADMIN PANEL (9 pages)
│   ├── dashboard.html               #   Stats: customers, workers, bookings, revenue
│   ├── users.html                   #   Customer accounts (search, enable/disable)
│   ├── workers.html                 #   Worker accounts (approve/reject/suspend)
│   ├── services.html                #   Service categories (add/edit/disable)
│   ├── bookings.html                #   All bookings (search, view, cancel)
│   ├── payments.html                #   Payments (search, view, mark paid)
│   ├── complaints.html              #   Complaints (search, status)
│   ├── reports.html                 #   Platform statistics
│   └── settings.html                #   Platform settings (maintenance, toggles)
│
└── assets\
    ├── css\
    │   ├── common.css               #   Shared styles (public + portals)
    │   ├── home.css                 #   Landing page styles
    │   ├── customer.css             #   Customer portal styles
    │   ├── worker.css               #   Worker portal styles
    │   ├── admin.css                #   Admin panel styles
    │   └── style.css                #   ⚠ NOT referenced by any page (orphan)
    ├── images\
    │   ├── logo.png                 #   Site logo
    │   ├── hero-character.png       #   Landing hero image
    │   └── profile.png              #   Default profile avatar
    └── js\
        ├── app.js                   #   localStorage helpers (workers/bookings/
        │                            #     complaints) — ⚠ NOT linked by any page
        ├── customer.js              #   Customer portal logic (search, messages,
        │                            #     notifications, review, settings, requests)
        ├── worker.js                #   Worker portal logic (requests, jobs,
        │                            #     earnings, profile, messages, settings)
        ├── admin.js                 #   Admin panel logic (users, workers, services,
        │                            #     bookings, payments, settings)
        ├── workers.js               #   Public "Find Workers" search/filter
        ├── worker-profile.js        #   Public worker profile rendering
        ├── booking.js               #   Booking confirm/cancel
        └── dashboard.js             #   ⚠ EMPTY and unreferenced (orphan)
```

### How the frontend currently works (summary)

| Aspect | Current behavior |
|---|---|
| Data | Hard-coded demo data inside each HTML file (workers, bookings, payments, stats) |
| State | `localStorage` keys: `kaamMitraJobStatuses`, `kaamMitraWorkerProfile`, `kaamMitraWorkerSettings`, `kaamMitraAdminSettings`, `userStatus_*`, `workerStatus_*`, `serviceStatus_*`, `bookingStatus_*`, `paymentStatus_*` |
| Navigation | plain `<a href>` links between pages; no auth guard |
| Forms | login/register/forgot-password have no JS; request-service/review/settings only show `alert()`; booking uses `confirm()` |
| Identity | fake ids: `data-request="request1..3"`, `data-job="job1..3"`, workers `ram/suresh/hari` |

---

## 2. Proposed Backend — `D:\KaamMitra-backend`

Separate project. **FastAPI + SQLAlchemy + MySQL + JWT**. Serves REST APIs only.

```
D:\KaamMitra-backend\
├── run.py                        # uvicorn entry point (python run.py)
├── requirements.txt              # Python package list
├── .env                          # SECRET_KEY, DATABASE_URL, JWT expiry, CORS origins
├── .env.example                  # Sample .env (committed)
├── README.md                     # Setup + run instructions
├── seed.py                       # Create tables + seed categories, demo workers, admin
│
├── docs\                         # ← this documentation folder
│   ├── README.md
│   ├── 01-Project-Structure.md
│   ├── 02-DFD.md
│   ├── 03-Use-Case-Diagram.md
│   ├── 04-ER-Diagram.md
│   └── 05-Class-Diagram.md
│
└── app\
    ├── __init__.py               # create_app() — FastAPI app factory
    ├── core\
    │   ├── config.py             # Pydantic settings from .env
    │   └── security.py           # password hash/verify + JWT create/decode
    ├── db\
    │   ├── base.py               # DeclarativeBase / Base
    │   └── database.py           # engine + SessionLocal + get_db
    ├── models\                   # SQLAlchemy models (one file per domain)
    │   ├── user.py               # User, Customer, Worker
    │   ├── category.py           # Category, Service
    │   ├── worker.py             # WorkerSkill
    │   ├── booking.py            # Booking, BookingTimeline
    │   ├── messaging.py          # Conversation, Message, Notification
    │   ├── payment.py            # Payment, Payout
    │   ├── review.py             # Review
    │   ├── complaint.py          # Complaint
    │   └── misc.py               # SavedWorker, PasswordReset, AppSetting
    ├── schemas\                  # Pydantic models (request/response)
    │   ├── auth.py
    │   ├── user.py
    │   ├── booking.py
    │   ├── payment.py
    │   └── ...
    ├── api\
    │   ├── deps.py               # get_current_user + role dependencies
    │   └── v1\
    │       ├── router.py         # aggregates all routers under /api/v1
    │       └── endpoints\
    │           ├── auth.py
    │           ├── public.py     # categories, services, workers (browse)
    │           ├── customers.py
    │           ├── workers.py
    │           ├── bookings.py
    │           ├── messaging.py
    │           ├── notifications.py
    │           ├── payments.py
    │           └── admin.py
    └── utils\
        ├── envelope.py           # {success, data, message} response helpers
        └── helpers.py            # booking number, money, slugify
```

> The backend will **never** contain HTML/CSS/JS. The frontend communicates with it
> over HTTP REST + JSON using `fetch`, with `Authorization: Bearer <jwt>` tokens.