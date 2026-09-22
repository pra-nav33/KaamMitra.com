# 02 — Data Flow Diagrams (DFD)

## Conventions

| Symbol | Meaning | Mermaid shape |
|--------|---------|---------------|
| Circle / entity | External entity (actor) | `((text))` |
| Rounded box | Process | `[text]` |
| Open-ended box / cylinder | Data store | `[(text)]` |
| Arrow with label | Data flow | `-->\|label\|` |

Process numbering: **1.0 Register/Login**, **2.0 Browse**, **3.0 Request**,
**4.0 Accept/Reject**, **5.0 Job Workflow**, **6.0 Payment**,
**7.0 Review**, **8.0 Messaging**, **9.0 Notifications**, **10.0 Admin**.

---

## Level 0 — Context Diagram

The whole system as a single process with external entities only.

```mermaid
flowchart LR
    Cust((Customer))
    Work((Worker))
    Admin((Admin))
    Guest((Guest))
    GW((Payment Gateway))

    SYS[KaamMitra System]

    Guest -->|"browse services & workers"| SYS
    Cust <-->|"register, login, request service, bookings, payments, reviews, messages"| SYS
    Work <-->|"register, login, accept/reject, start/complete jobs, earnings, messages"| SYS
    Admin <-->|"manage users, workers, services, bookings, payments, complaints, reports"| SYS
    SYS <-->|"payment processing"| GW
```

---

## Level 1 — Main Processes

```mermaid
flowchart TB
    Cust((Customer))
    Work((Worker))
    Admin((Admin))

    P1["1.0 Register / Login"]
    P2["2.0 Browse Services & Workers"]
    P3["3.0 Request Service"]
    P4["4.0 Accept / Reject Request"]
    P5["5.0 Manage Job Workflow"]
    P6["6.0 Process Payment"]
    P7["7.0 Submit Review"]
    P8["8.0 Messaging"]
    P9["9.0 Notifications"]
    P10["10.0 Admin Management"]

    D1[("D1 Users")]
    D2[("D2 Customers")]
    D3[("D3 Workers")]
    D4[("D4 Categories")]
    D5[("D5 Services")]
    D6[("D6 Bookings")]
    D7[("D7 Payments")]
    D8[("D8 Reviews")]
    D9[("D9 Conversations / Messages")]
    D10[("D10 Notifications")]
    D11[("D11 Complaints")]
    D12[("D12 Saved Workers")]

    %% Guest / Customer flows
    Guest((Guest)) --> P2
    Cust --> P1
    Cust <-->|"login details / token"| P1
    Cust --> P3
    Cust --> P6
    Cust --> P7
    Cust --> P8
    Cust <-->|"saved workers"| P2

    %% Worker flows
    Work --> P1
    Work --> P4
    Work --> P5
    Work --> P8
    Work <-->|"earnings data"| P6

    %% Admin flows
    Admin --> P10

    %% Processes ↔ Data stores
    P1 <--> D1
    P1 <--> D2
    P1 <--> D3
    P2 <--> D4
    P2 <--> D5
    P2 <--> D3
    P2 <--> D12
    P3 -->|"create pending booking"| D6
    P4 <--> D6
    P5 <--> D6
    P6 <--> D6
    P6 <--> D7
    P7 <--> D8
    P7 --> D3
    P8 <--> D9
    P9 <--> D10
    P10 <--> D1
    P10 <--> D3
    P10 <--> D4
    P10 <--> D6
    P10 <--> D7
    P10 <--> D11

    %% Notifications produced by processes
    P3 --> P9
    P4 --> P9
    P5 --> P9
    P6 --> P9
    P8 --> P9
```

### Data stores (Level 1)

| Store | Contents |
|-------|----------|
| D1 Users | login credentials, role, status |
| D2 Customers | customer profile (name, email, phone, location) |
| D3 Workers | worker profile (profession, price, skills, rating, verification) |
| D4 Categories | the 5 main service categories |
| D5 Services | sub-services under each category |
| D6 Bookings | service requests and their status lifecycle |
| D7 Payments | payment records per booking |
| D8 Reviews | ratings & comments |
| D9 Conversations / Messages | chat history |
| D10 Notifications | in-app notifications |
| D11 Complaints | complaint records |
| D12 Saved Workers | customer → worker saves |

---

## Level 2 — Detailed Processes

### 3.0 Request Service (Customer → Booking)

```mermaid
flowchart LR
    Cust((Customer))
    P31["3.1 Validate Request"]
    P32["3.2 Create Booking"]
    P33["3.3 Notify Worker"]
    D6[("D6 Bookings")]
    D10[("D10 Notifications")]

    Cust -->|"request details (category, service, date, budget, address)"| P31
    P31 -->|"validated request"| P32
    P32 -->|"booking status = pending"| D6
    P32 --> P33
    P33 -->|"new request notification"| D10
```

### 4.0 / 5.0 Accept-Reject and Job Workflow

```mermaid
flowchart LR
    Work((Worker))
    P4["4.1 Accept / Reject"]
    P51["5.1 Start Job"]
    P52["5.2 Complete Job"]
    D6[("D6 Bookings")]
    D7[("D7 Payments")]

    Work -->|"accept / reject"| P4
    P4 -->|"status = accepted / rejected"| D6
    D6 -->|"accepted booking"| P51
    P51 -->|"status = in_progress"| D6
    D6 -->|"in_progress booking"| P52
    P52 -->|"status = completed"| D6
    P52 -->|"create pending payment"| D7
```

### 6.0 Payment

```mermaid
flowchart LR
    Cust((Customer))
    GW((Payment Gateway))
    P61["6.1 Initiate Payment"]
    P62["6.2 Confirm Payment"]
    P63["6.3 Record / Payout"]
    D6[("D6 Bookings")]
    D7[("D7 Payments")]

    Cust -->|"choose method (cash / eSewa / Khalti / card)"| P61
    P61 -->|"payment request"| GW
    GW -->|"successful / failed"| P61
    P61 --> P62
    P62 -->|"status = paid"| D7
    P63 -->|"update booking payment state"| D6
    P63 -->|"worker payout entry"| D7
```

### 10.0 Admin Management

```mermaid
flowchart LR
    Admin((Admin))
    P101["10.1 Manage Users"]
    P102["10.2 Manage Workers"]
    P103["10.3 Manage Services"]
    P104["10.4 Manage Bookings"]
    P105["10.5 Manage Payments"]
    P106["10.6 Manage Complaints"]
    P107["10.7 Reports & Settings"]

    Admin --> P101
    Admin --> P102
    Admin --> P103
    Admin --> P104
    Admin --> P105
    Admin --> P106
    Admin --> P107

    P101 --> D1
    P102 --> D3
    P103 --> D4
    P104 --> D6
    P105 --> D7
    P106 --> D11
    P107 <--> D1
    P107 <--> D6
    P107 <--> D7
```