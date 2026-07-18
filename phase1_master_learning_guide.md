# 🎯 Duothan 6.0 — Phase 1 RECON: Master Learning Guide

> [!IMPORTANT]
> **Deadline: 22 July 2026, 11:59 PM** — You have ~4.5 days from today (18 July).
> This is a **PLANNING & DESIGN** phase. NO coding required. You submit ONE `.docx` file with 7 deliverables.

---

## 📌 The Big Picture — What Phase 1 Actually Is

Before diving into concepts, let's understand what you're doing and why:

```mermaid
graph LR
    A["🔍 Phase 1: RECON<br/>Planning & Design<br/><b>YOU ARE HERE</b>"] -->|Pass| B["🔨 Phase 2: REBUILD<br/>Development<br/>25-31 Jul"]
    B -->|Pass| C["🛡️ Phase 3: FORTIFY<br/>Deploy & Defend<br/>06 Aug"]
    C --> D["🏆 Winner"]
    
    style A fill:#ff6b6b,stroke:#c0392b,color:#fff,stroke-width:3px
    style B fill:#ffd93d,stroke:#f39c12,color:#333
    style C fill:#6bcb77,stroke:#27ae60,color:#fff
    style D fill:#9b59b6,stroke:#8e44ad,color:#fff
```

### The Scenario in Simple Terms
> Year 2065. A super malware destroyed all banking systems worldwide. Customer data is safe (backed up), but the old systems are infected and unusable. **Your job: Design a completely NEW banking platform from scratch** that is secure, scalable, and can never be taken down the same way again.

---

## 🗺️ Phase 1 Approach — How to Start & Continue

### The Path: Start-to-Finish Workflow

```mermaid
graph TD
    START["🚀 START HERE<br/>Read all documents"] --> UNDERSTAND["📖 Step 1: Understand<br/>the Scenario & Rules"]
    UNDERSTAND --> BRAINSTORM["💡 Step 2: Brainstorm<br/>Your Platform Idea"]
    BRAINSTORM --> D1["📋 D1: Problem<br/>Identification<br/><i>10%</i>"]
    D1 --> D2["💡 D2: Proposed<br/>Solution<br/><i>20% ⭐</i>"]
    D2 --> D3["🏗️ D3: System<br/>Architecture<br/><i>20% ⭐</i>"]
    D3 --> D4["🎨 D4: Wireframes<br/>Design<br/><i>15%</i>"]
    D4 --> D5["📝 D5: Functional<br/>Requirements<br/><i>15%</i>"]
    D5 --> D6["⚙️ D6: Non-Functional<br/>Requirements<br/><i>15%</i>"]
    D6 --> D7["🛠️ D7: Tech Stack<br/>Selection<br/><i>5%</i>"]
    D7 --> REVIEW["🔍 Review & Polish"]
    REVIEW --> SUBMIT["📤 SUBMIT<br/>.docx by 22 Jul"]

    style START fill:#2ecc71,stroke:#27ae60,color:#fff,stroke-width:3px
    style D2 fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:2px
    style D3 fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:2px
    style SUBMIT fill:#3498db,stroke:#2980b9,color:#fff,stroke-width:3px
```

### Daily Action Plan (18 Jul → 22 Jul)

```mermaid
gantt
    title Phase 1 Daily Schedule
    dateFormat  YYYY-MM-DD
    
    section Day 1 - 18 Jul
    Read all documents & learn concepts    :d1a, 2026-07-18, 1d
    Start Problem Identification (D1)      :d1b, 2026-07-18, 1d
    
    section Day 2 - 19 Jul
    Complete D1 + Start Proposed Solution   :d2a, 2026-07-19, 1d
    Learn Microservices Architecture        :d2b, 2026-07-19, 1d
    
    section Day 3 - 20 Jul
    Complete D2 + System Architecture (D3)  :d3a, 2026-07-20, 1d
    Start Wireframes in Figma (D4)          :d3b, 2026-07-20, 1d
    
    section Day 4 - 21 Jul
    Complete D4 + Write FR & NFR (D5+D6)    :d4a, 2026-07-21, 1d
    Tech Stack Selection (D7)               :d4b, 2026-07-21, 1d
    
    section Day 5 - 22 Jul
    Final review & polish all sections      :d5a, 2026-07-22, 1d
    Format .docx & SUBMIT                   :crit, d5b, 2026-07-22, 1d
```

---

## 📚 THEORY DEEP-DIVES — Everything You Need to Know

---

# 🔴 THEORY 1: Problem Identification (Deliverable 01 — 10%)

## What is Problem Identification?

Problem Identification is the process of **analyzing a situation, understanding what went wrong, who is affected, and defining a clear, solvable problem statement.** It's the foundation — if your problem is vague, your solution will be vague.

### The Framework: 4-Part Problem Analysis

```mermaid
graph TD
    PI["🔍 PROBLEM IDENTIFICATION"] --> WHAT["1️⃣ WHAT happened?<br/><i>The attack & damage</i>"]
    PI --> WHO["2️⃣ WHO is affected?<br/><i>Users & stakeholders</i>"]
    PI --> WHY["3️⃣ WHY does it matter?<br/><i>Consequences & urgency</i>"]
    PI --> SPECIFIC["4️⃣ WHAT specifically<br/>will you solve?<br/><i>Your focused problem</i>"]
    
    WHAT --> DETAIL1["Core banking DOWN<br/>ATMs OFFLINE<br/>Payments DESTROYED<br/>Loans NON-FUNCTIONAL"]
    WHO --> DETAIL2["Individual customers<br/>Small businesses<br/>Financial institutions<br/>Government services"]
    WHY --> DETAIL3["Cash-only society<br/>Economic stagnation<br/>Financial inequality<br/>Eroded public trust"]
    SPECIFIC --> DETAIL4["YOUR specific<br/>problem statement<br/><i>Be FOCUSED!</i>"]
    
    style PI fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:3px
    style SPECIFIC fill:#f39c12,stroke:#e67e22,color:#fff,stroke-width:2px
```

### Key Concepts to Understand:

#### 1. Cascading Failure
> When one part of a connected system fails and causes other parts to fail in a chain reaction.

**Example in the scenario:** The malware didn't just hit one system — it hit the core banking system, which then caused ATMs to go offline, which caused digital payments to fail, which caused loan systems to crash. This is because the OLD system was **monolithic** (one big connected block).

```mermaid
graph LR
    MALWARE["🦠 Super Malware"] --> CORE["💔 Core Banking<br/>FAILS"]
    CORE --> ATM["💔 ATMs<br/>OFFLINE"]
    CORE --> PAYMENT["💔 Digital Payments<br/>DOWN"]
    CORE --> LOAN["💔 Loan Systems<br/>CRASHED"]
    ATM --> PEOPLE["😰 People can't<br/>access money"]
    PAYMENT --> BUSINESS["😰 Businesses<br/>can't transact"]
    LOAN --> ECONOMY["😰 Economy<br/>stagnates"]
    
    style MALWARE fill:#c0392b,stroke:#922b21,color:#fff
    style CORE fill:#e74c3c,stroke:#c0392b,color:#fff
```

> **Why this matters for your document:** You must explain that the OLD system failed because it was monolithic — one point of failure took everything down. This sets up WHY your solution needs microservices.

#### 2. Monolithic vs. Microservices (Why the old system failed)

| Aspect | Monolithic (Old System) | Microservices (Your New System) |
|--------|------------------------|-------------------------------|
| **Structure** | One big application | Many small independent services |
| **Failure** | One bug = entire system crashes | One service fails, others continue |
| **Scaling** | Scale everything or nothing | Scale only what needs scaling |
| **Security** | One breach = access to everything | Breach is contained to one service |
| **Updates** | Must redeploy entire app | Update one service independently |

#### 3. Stakeholder Analysis

Stakeholders are everyone affected by or involved with the system. For your banking platform:

| Stakeholder | Impact | Need |
|------------|--------|------|
| **Individual Customers** | Can't access savings, make payments | Secure, easy access to money |
| **Small Business Owners** | Can't process transactions, pay employees | Digital payment processing |
| **Financial Institutions** | Lost infrastructure, lost trust | Resilient, modern platform |
| **Government** | Economic slowdown, inequality | Stable financial ecosystem |
| **Vulnerable Populations** | Disproportionately harmed by cash-only | Inclusive, accessible banking |

### How to Write Your Problem Identification

**Template Structure:**
1. **The Core Crisis** (1 paragraph) — What happened globally
2. **Socio-Economic Impact** (3-4 bullet points with explanations) — Real-world consequences
3. **The Specific Problem You Will Solve** (1-2 paragraphs) — Your focused problem statement
4. **Affected Users** (list with descriptions) — Who benefits from your solution

> [!TIP]
> Look at your existing [problem_identification.md](file:///c:/Users/ADMIN/Desktop/Duthon_6.0_BigBug/problem_identification.md) — you already have a strong draft! It covers all 4 parts well. Just expand the affected users section with more detail.

---

# 🔴 THEORY 2: Proposed Solution (Deliverable 02 — 20% ⭐)

## What Makes a Strong Proposed Solution?

Your solution must **directly address** the problem you identified. It needs to be specific, practical, and demonstrate modern technology understanding.

### Solution Design Framework

```mermaid
graph TD
    SOLUTION["💡 YOUR BANKING PLATFORM"] --> NAME["1️⃣ Platform Name<br/><i>Professional & memorable</i>"]
    SOLUTION --> OVERVIEW["2️⃣ High-Level Overview<br/><i>What does it do?</i>"]
    SOLUTION --> FEATURES["3️⃣ Key Features<br/><i>Core capabilities</i>"]
    SOLUTION --> VALUE["4️⃣ Value Proposition<br/><i>Why it's better</i>"]
    SOLUTION --> INNOVATION["5️⃣ Innovation<br/><i>What's unique?</i>"]
    
    FEATURES --> F1["🔐 Auth & Security<br/>MFA, Biometrics"]
    FEATURES --> F2["💰 Transactions<br/>P2P, Payments, Bills"]
    FEATURES --> F3["🤖 AI Fraud Detection<br/>Real-time monitoring"]
    FEATURES --> F4["🔄 Disaster Recovery<br/>Auto-backup, failover"]
    FEATURES --> F5["📊 Admin Dashboard<br/>System health monitoring"]
    
    style SOLUTION fill:#2ecc71,stroke:#27ae60,color:#fff,stroke-width:3px
    style FEATURES fill:#3498db,stroke:#2980b9,color:#fff,stroke-width:2px
```

### Key Concepts You Must Understand:

#### 1. Multi-Factor Authentication (MFA)
> Using **two or more** verification methods to prove identity.

```mermaid
graph LR
    USER["👤 User"] --> FACTOR1["🔑 Factor 1:<br/>Password<br/><i>Something you KNOW</i>"]
    FACTOR1 --> FACTOR2["📱 Factor 2:<br/>OTP/SMS Code<br/><i>Something you HAVE</i>"]
    FACTOR2 --> FACTOR3["👆 Factor 3:<br/>Fingerprint/Face<br/><i>Something you ARE</i>"]
    FACTOR3 --> ACCESS["✅ Access<br/>Granted"]
    
    style USER fill:#3498db,stroke:#2980b9,color:#fff
    style ACCESS fill:#2ecc71,stroke:#27ae60,color:#fff
```

**Why for banking:** After a massive cyber attack, people need to TRUST the new system. MFA ensures even if a password is stolen, the account stays secure.

#### 2. Zero-Trust Security Model
> **"Never trust, always verify"** — Every request is treated as potentially hostile, regardless of where it comes from.

```mermaid
graph TD
    ZT["🔒 ZERO TRUST MODEL"] --> P1["Verify Explicitly<br/><i>Always authenticate &<br/>authorize based on all<br/>available data points</i>"]
    ZT --> P2["Least Privilege Access<br/><i>Give users minimum<br/>permissions they need<br/>to do their job</i>"]
    ZT --> P3["Assume Breach<br/><i>Design as if attackers<br/>are already inside<br/>your network</i>"]
    
    P1 --> E1["Example: Even internal<br/>services must authenticate<br/>with each other using tokens"]
    P2 --> E2["Example: A teller can<br/>view transactions but<br/>can't modify system settings"]
    P3 --> E3["Example: Encrypt data<br/>even within the internal<br/>network, not just at edges"]
    
    style ZT fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:3px
```

#### 3. AI/ML-Based Fraud Detection
> Using artificial intelligence to detect unusual patterns in real-time.

**How it works (simplified):**
1. The AI learns what "normal" transaction behavior looks like
2. It monitors every transaction in real-time
3. If a transaction is "abnormal" (e.g., huge transfer at 3 AM to a new country), it flags it
4. The system can auto-freeze, notify the user, or require additional verification

```mermaid
graph LR
    TXN["💳 Transaction<br/>Initiated"] --> AI["🤖 AI/ML Engine<br/>Analyzes patterns"]
    AI -->|Normal| APPROVE["✅ Approved"]
    AI -->|Suspicious| FLAG["⚠️ Flagged"]
    FLAG --> REVIEW["👤 Manual Review<br/>OR Auto-Freeze"]
    FLAG --> NOTIFY["🔔 Notify User"]
    
    style AI fill:#9b59b6,stroke:#8e44ad,color:#fff,stroke-width:2px
    style FLAG fill:#f39c12,stroke:#e67e22,color:#fff
```

#### 4. Disaster Recovery Concepts

| Term | Meaning | Example |
|------|---------|---------|
| **RPO** (Recovery Point Objective) | How much data loss is acceptable | RPO = 1 hour means you lose max 1 hour of data |
| **RTO** (Recovery Time Objective) | How fast must the system recover | RTO = 30 min means system is back in 30 minutes |
| **Failover** | Automatic switch to backup system | If primary server dies, traffic routes to backup |
| **Multi-region** | Running copies in multiple locations | If AWS US-East goes down, US-West takes over |
| **Backup Strategy** | How and when data is saved | Full backup daily + incremental every hour |

```mermaid
graph LR
    PRIMARY["🖥️ Primary System<br/><i>AWS Region 1</i>"] -->|Real-time<br/>replication| BACKUP["🖥️ Backup System<br/><i>AWS Region 2</i>"]
    PRIMARY -->|"Every 6 hours"| SNAPSHOT["💾 Snapshots<br/><i>Cloud Storage</i>"]
    
    PRIMARY -->|"System fails! ❌"| FAILOVER["🔄 Automatic<br/>Failover"]
    FAILOVER --> BACKUP
    BACKUP -->|"Takes over in<br/> < 30 min (RTO)"| USERS["👥 Users<br/>uninterrupted"]
    
    style PRIMARY fill:#3498db,stroke:#2980b9,color:#fff
    style BACKUP fill:#2ecc71,stroke:#27ae60,color:#fff
    style FAILOVER fill:#e74c3c,stroke:#c0392b,color:#fff
```

### How to Write Your Proposed Solution

**Template Structure:**
1. **Platform Name** — Something like "NexusBank", "VaultPay", "FinShield"
2. **Executive Summary** (2-3 paragraphs) — What it does at a high level
3. **Core Features** (8-10 features with descriptions) — What the platform offers
4. **How It Solves the Problem** — Direct link back to Deliverable 01
5. **Security & Resilience** — How it prevents future attacks
6. **Innovation** — What makes it special (AI, blockchain, zero-trust, etc.)

---

# 🔴 THEORY 3: Microservices Architecture (Deliverable 03 — 20% ⭐)

## This is THE Most Important Concept for Phase 1

The competition **mandates** "independent services" architecture. This deliverable carries 20% weight. Let's deeply understand it.

### What Are Microservices?

> Microservices is an architectural style where a large application is built as a **collection of small, independent services**, each running its own process, managing its own database, and communicating through well-defined APIs.

### Monolithic vs. Microservices — Visual Comparison

```mermaid
graph TD
    subgraph MONO["❌ MONOLITHIC (The Old Failed System)"]
        direction TB
        M1["Authentication"] --- M2["User Management"]
        M2 --- M3["Transactions"]
        M3 --- M4["Payments"]
        M4 --- M5["Notifications"]
        M5 --- M6["Fraud Detection"]
        M1 --- MONEDB["📦 ONE Single<br/>Database"]
        M2 --- MONEDB
        M3 --- MONEDB
        M4 --- MONEDB
        M5 --- MONEDB
        M6 --- MONEDB
    end
    
    subgraph MICRO["✅ MICROSERVICES (Your New System)"]
        direction TB
        S1["🔐 Auth<br/>Service"] ~~~ S2["👤 User<br/>Service"]
        S2 ~~~ S3["💰 Transaction<br/>Service"]
        S3 ~~~ S4["💳 Payment<br/>Service"]
        S1 --- DB1["🗄️ DB1"]
        S2 --- DB2["🗄️ DB2"]
        S3 --- DB3["🗄️ DB3"]
        S4 --- DB4["🗄️ DB4"]
    end
    
    style MONO fill:#ffcccc,stroke:#e74c3c
    style MICRO fill:#ccffcc,stroke:#27ae60
```

### The Core Microservices Patterns You MUST Know

#### Pattern 1: API Gateway

```mermaid
graph TD
    CLIENT["📱 Client Apps<br/><i>Web & Mobile</i>"] --> GW["🚪 API GATEWAY<br/><i>Single entry point</i>"]
    GW -->|"/auth/*"| AUTH["🔐 Auth Service"]
    GW -->|"/users/*"| USER["👤 User Service"]
    GW -->|"/transactions/*"| TXN["💰 Transaction Service"]
    GW -->|"/payments/*"| PAY["💳 Payment Service"]
    
    GW -.->|Handles| CROSS["Cross-cutting concerns:<br/>• Rate Limiting<br/>• Authentication<br/>• Logging<br/>• SSL Termination"]
    
    style GW fill:#f39c12,stroke:#e67e22,color:#fff,stroke-width:3px
    style CLIENT fill:#3498db,stroke:#2980b9,color:#fff
```

> **What is an API Gateway?** It's the "front door" of your system. Every request from users goes through it first. It routes requests to the right microservice and handles common tasks like authentication, rate limiting, and logging.
>
> **Real-world analogy:** Think of a hotel reception desk — all guests go there first, and the receptionist directs them to the right department (housekeeping, dining, concierge).

#### Pattern 2: Database-Per-Service

```mermaid
graph TD
    subgraph "Database-Per-Service Pattern"
        AUTH["🔐 Auth Service"] --> ADB["🗄️ Auth DB<br/><i>Credentials, tokens,<br/>login history</i><br/><b>PostgreSQL</b>"]
        USER["👤 User Service"] --> UDB["🗄️ User DB<br/><i>Profiles, KYC,<br/>preferences</i><br/><b>PostgreSQL</b>"]
        TXN["💰 Transaction Service"] --> TDB["🗄️ Transaction DB<br/><i>Transfers, balances,<br/>history</i><br/><b>PostgreSQL</b>"]
        NOTIF["🔔 Notification Service"] --> NDB["🗄️ Notification DB<br/><i>Alerts, messages,<br/>templates</i><br/><b>MongoDB</b>"]
        FRAUD["🤖 Fraud Detection"] --> FDB["🗄️ Fraud DB<br/><i>Patterns, ML models,<br/>flagged activities</i><br/><b>MongoDB</b>"]
    end
    
    style ADB fill:#3498db,stroke:#2980b9,color:#fff
    style UDB fill:#3498db,stroke:#2980b9,color:#fff
    style TDB fill:#3498db,stroke:#2980b9,color:#fff
    style NDB fill:#2ecc71,stroke:#27ae60,color:#fff
    style FDB fill:#2ecc71,stroke:#27ae60,color:#fff
```

> **Why separate databases?** If one database is compromised, only that one service is affected. Also, different data types benefit from different database types:
> - **PostgreSQL (SQL)** → For financial data that needs strict consistency (ACID)
> - **MongoDB (NoSQL)** → For flexible data like logs, notifications

#### Pattern 3: Inter-Service Communication

Services need to talk to each other. There are two main ways:

```mermaid
graph TD
    subgraph SYNC["⚡ Synchronous (REST/gRPC)"]
        direction LR
        A1["Service A"] -->|"HTTP Request<br/>GET /users/123"| A2["Service B"]
        A2 -->|"HTTP Response<br/>{ user data }"| A1
    end
    
    subgraph ASYNC["📨 Asynchronous (Message Queue)"]
        direction LR
        B1["Service A"] -->|"Publish event:<br/>TransactionCompleted"| MQ["📬 Message Queue<br/><i>Kafka / RabbitMQ</i>"]
        MQ -->|"Consume"| B2["Service B<br/><i>Notification</i>"]
        MQ -->|"Consume"| B3["Service C<br/><i>Fraud Check</i>"]
    end
    
    style SYNC fill:#e8f4fd,stroke:#3498db
    style ASYNC fill:#eafaf1,stroke:#2ecc71
    style MQ fill:#f39c12,stroke:#e67e22,color:#fff
```

| Type | How It Works | When to Use | Example |
|------|-------------|-------------|---------|
| **Synchronous (REST)** | Service A calls Service B and WAITS for response | When you need immediate answer | User login → Auth service verifies |
| **Asynchronous (Message Queue)** | Service A publishes event, doesn't wait | When result isn't needed immediately | Transaction done → Notify user (can be slightly delayed) |

#### Pattern 4: Circuit Breaker

> **What?** A pattern that prevents cascading failures. If a service is down, stop trying to call it and fail gracefully instead of hanging.

```mermaid
stateDiagram-v2
    [*] --> Closed: Normal operation
    Closed --> Open: Failures exceed threshold
    Open --> HalfOpen: Timeout expires
    HalfOpen --> Closed: Test request succeeds
    HalfOpen --> Open: Test request fails
    
    note right of Closed: All requests pass through normally
    note right of Open: All requests immediately fail (fast fail)
    note right of HalfOpen: One test request allowed to check if service recovered
```

> **Real-world analogy:** Like an electrical circuit breaker in your house — if there's a power surge, the breaker trips to protect your appliances. Once the problem is fixed, you reset it.

### Complete System Architecture — What Your Diagram Should Look Like

```mermaid
graph TB
    subgraph CLIENTS["👥 Client Layer"]
        WEB["🌐 Web App<br/><i>React/Next.js</i>"]
        MOB["📱 Mobile App<br/><i>React Native</i>"]
    end

    subgraph EDGE["🌐 Edge Layer"]
        CDN["📡 CDN<br/><i>CloudFront</i>"]
        WAF["🛡️ WAF<br/><i>Web Application Firewall</i>"]
    end

    subgraph GATEWAY["🚪 Gateway Layer"]
        LB["⚖️ Load Balancer"]
        APIGW["🚪 API Gateway<br/><i>Kong / AWS API GW</i>"]
    end

    subgraph SERVICES["⚙️ Microservices Layer"]
        AUTH["🔐 Auth<br/>Service"]
        USERSVC["👤 User<br/>Service"]
        TXNSVC["💰 Transaction<br/>Service"]
        PAYSVC["💳 Payment<br/>Service"]
        ACCSVC["🏦 Account<br/>Service"]
        FRAUDSVC["🤖 Fraud Detection<br/><i>AI/ML</i>"]
        NOTIFSVC["🔔 Notification<br/>Service"]
        AUDITSVC["📝 Audit/Logging<br/>Service"]
        DRSVC["🔄 Disaster Recovery<br/>Service"]
        ADMINSVC["📊 Admin<br/>Service"]
    end

    subgraph DATA["🗄️ Data Layer"]
        PG1["🗄️ PostgreSQL<br/><i>Auth DB</i>"]
        PG2["🗄️ PostgreSQL<br/><i>Users DB</i>"]
        PG3["🗄️ PostgreSQL<br/><i>Transactions DB</i>"]
        PG4["🗄️ PostgreSQL<br/><i>Accounts DB</i>"]
        MONGO1["🗄️ MongoDB<br/><i>Logs & Notifications</i>"]
        REDIS["⚡ Redis<br/><i>Cache & Sessions</i>"]
    end

    subgraph MESSAGING["📨 Messaging Layer"]
        KAFKA["📬 Apache Kafka<br/><i>Event Streaming</i>"]
    end

    subgraph INFRA["🏗️ Infrastructure Layer"]
        K8S["☸️ Kubernetes<br/><i>Container Orchestration</i>"]
        DOCKER["🐳 Docker<br/><i>Containerization</i>"]
        CICD["🔄 CI/CD<br/><i>GitHub Actions</i>"]
    end

    subgraph MONITOR["📊 Monitoring Layer"]
        PROM["📈 Prometheus<br/><i>Metrics</i>"]
        GRAF["📊 Grafana<br/><i>Dashboards</i>"]
        ELK["📋 ELK Stack<br/><i>Logging</i>"]
    end

    subgraph SECURITY["🔒 Security Layer"]
        VAULT["🔑 HashiCorp Vault<br/><i>Secrets Management</i>"]
        IAM["🛂 IAM<br/><i>Identity & Access</i>"]
        TLS["🔐 TLS 1.3<br/><i>Encryption in Transit</i>"]
    end

    WEB --> CDN
    MOB --> CDN
    CDN --> WAF
    WAF --> LB
    LB --> APIGW
    APIGW --> AUTH
    APIGW --> USERSVC
    APIGW --> TXNSVC
    APIGW --> PAYSVC
    APIGW --> ACCSVC
    APIGW --> ADMINSVC
    
    AUTH --> PG1
    USERSVC --> PG2
    TXNSVC --> PG3
    ACCSVC --> PG4
    NOTIFSVC --> MONGO1
    AUDITSVC --> MONGO1
    
    AUTH --> REDIS
    TXNSVC --> REDIS
    
    TXNSVC --> KAFKA
    KAFKA --> FRAUDSVC
    KAFKA --> NOTIFSVC
    KAFKA --> AUDITSVC
    KAFKA --> DRSVC
    
    style CLIENTS fill:#3498db,stroke:#2980b9,color:#fff
    style GATEWAY fill:#f39c12,stroke:#e67e22,color:#fff
    style SERVICES fill:#2ecc71,stroke:#27ae60,color:#fff
    style DATA fill:#9b59b6,stroke:#8e44ad,color:#fff
    style SECURITY fill:#e74c3c,stroke:#c0392b,color:#fff
    style MONITOR fill:#1abc9c,stroke:#16a085,color:#fff
```

### Understanding Each Layer

| Layer | Purpose | Components | Why It's Needed |
|-------|---------|------------|-----------------|
| **Client** | User interfaces | Web app, Mobile app | Users interact with the platform |
| **Edge** | First line of defense | CDN, WAF | Block attacks before they reach your servers |
| **Gateway** | Traffic management | Load Balancer, API Gateway | Distribute load, route requests, rate limit |
| **Services** | Business logic | 10 microservices | Each handles one specific domain |
| **Data** | Persistent storage | PostgreSQL, MongoDB, Redis | Store and retrieve data reliably |
| **Messaging** | Async communication | Kafka | Services communicate without blocking |
| **Infrastructure** | Deployment | Docker, Kubernetes, CI/CD | Consistent, scalable deployment |
| **Monitoring** | Observability | Prometheus, Grafana, ELK | Know when things go wrong |
| **Security** | Protection | Vault, IAM, TLS | Protect at every layer |

---

# 🔴 THEORY 4: UX/UI & Wireframes (Deliverable 04 — 15%)

### What Are Wireframes?

Wireframes are **visual blueprints** of your application's screens. Think of them as the architectural floor plan of a building — they show layout, structure, and flow before the actual construction.

### Fidelity Levels

```mermaid
graph LR
    LOW["📝 Low-Fidelity<br/><i>Sketches, boxes,<br/>basic layout</i><br/><b>Too basic ❌</b>"] --> MID["🖼️ Mid-Fidelity<br/><i>Grayscale, proper<br/>structure, labels</i><br/><b>Good ✅</b>"]
    MID --> HIGH["🎨 High-Fidelity<br/><i>Colors, real content,<br/>polished design</i><br/><b>Best ⭐</b>"]
    
    style LOW fill:#ffcccc,stroke:#e74c3c
    style MID fill:#fff3cd,stroke:#f39c12
    style HIGH fill:#ccffcc,stroke:#27ae60
```

### Banking App UI Design Principles

| Principle | Why | How |
|-----------|-----|-----|
| **Trust** | Users give you their MONEY | Use blues, greens, whites. Show lock icons. |
| **Clarity** | Financial info must be crystal clear | Large fonts for balances, clear labels |
| **Simplicity** | Users of ALL ages need to use it | Minimal clicks to do common tasks |
| **Security Indicators** | Reassure users after a cyber attack | Encryption badges, "Secured by..." labels |
| **Accessibility** | Inclusive banking for everyone | High contrast, large touch targets, multilingual |

### Required Screens (User Flow)

```mermaid
graph TD
    SPLASH["🏦 Splash Screen"] --> LOGIN["🔐 Login / Register"]
    LOGIN -->|"MFA Verification"| MFA["📱 OTP / Biometric"]
    MFA --> DASH["🏠 Dashboard<br/><i>Balance, Quick Actions,<br/>Recent Transactions</i>"]
    
    DASH --> SEND["💸 Send Money"]
    DASH --> HISTORY["📋 Transaction History"]
    DASH --> PROFILE["👤 Profile & Settings"]
    DASH --> NOTIF["🔔 Notifications"]
    
    SEND --> CONFIRM["✅ Confirmation"]
    CONFIRM --> RECEIPT["🧾 Receipt"]
    RECEIPT --> DASH
    
    style DASH fill:#3498db,stroke:#2980b9,color:#fff,stroke-width:3px
    style LOGIN fill:#e74c3c,stroke:#c0392b,color:#fff
```

### Tool Recommendation: Figma (Free)

1. Go to [figma.com](https://figma.com) and create a free account
2. Create a new design file
3. Use frames for each screen (use phone frame: 390 × 844)
4. Design at least 6-7 screens
5. **Embed screenshots** in your Word doc AND include the Figma link

---

# 🔴 THEORY 5: Requirements Engineering (Deliverables 05 & 06 — 30% combined!)

### Functional Requirements (FR) — What the system DOES

> A functional requirement describes a **specific behavior or function** of the system.

**Writing Format:** `"The system shall..."` or `"As a [user], I can..."`

### How to Think About Functional Requirements

```mermaid
mindmap
  root["💡 Functional Requirements"]
    Authentication
      FR-01 Register with email, phone, NIC
      FR-02 Multi-factor authentication
      FR-03 Biometric login
      FR-04 Account lockout after 5 failures
      FR-05 Password reset via email/SMS
    Account Management
      FR-06 View real-time balance
      FR-07 Transaction history with filters
      FR-08 Manage multiple accounts
      FR-09 Profile and KYC management
    Transactions
      FR-10 Transfer money (internal)
      FR-11 Bill payments
      FR-12 Scheduled/recurring payments
      FR-13 Real-time transaction notifications
    Fraud & Security
      FR-14 Flag unusual patterns
      FR-15 Report unauthorized transactions
      FR-16 Auto-freeze suspicious accounts
    Admin
      FR-17 Monitor system health
      FR-18 Manage user accounts
      FR-19 Generate daily reports
```

### Non-Functional Requirements (NFR) — HOW the system performs

> [!WARNING]
> The competition document says NFRs **heavily weigh security, disaster recovery, cloud performance, and reliability.** This is your chance to score BIG on a section that many teams underestimate!

```mermaid
mindmap
  root["⚙️ Non-Functional Requirements"]
    🔒 Security CRITICAL
      TLS 1.3 encryption in transit
      AES-256 encryption at rest
      Zero-trust architecture
      PCI DSS compliance
      bcrypt password hashing
      Rate-limited APIs
    🔄 Disaster Recovery CRITICAL
      Automated backups every 6 hours
      RPO < 1 hour
      RTO < 30 minutes
      Multi-region failover
      99.99% uptime SLA
    ⚡ Performance
      API response < 200ms for 95%
      10,000+ concurrent users
      Page load < 3 seconds
      DB queries < 100ms
    ☁️ Scalability
      Auto-scaling on load
      Docker containerization
      Infrastructure as Code
      Horizontal scaling
    📊 Monitoring
      Health check endpoints
      Centralized logging
      Real-time dashboards
      Alerting on critical metrics
    ♿ Accessibility
      WCAG 2.1 AA
      Multi-language support
```

### Key Concept: ACID Properties (Critical for Banking!)

```mermaid
graph TD
    ACID["🏦 ACID Properties<br/><i>Why banking databases<br/>MUST use SQL (PostgreSQL)</i>"] --> A["<b>A</b>tomicity<br/><i>All or nothing.<br/>Transfer either completes<br/>fully or not at all.</i>"]
    ACID --> C["<b>C</b>onsistency<br/><i>Database always moves<br/>from one valid state<br/>to another.</i>"]
    ACID --> I["<b>I</b>solation<br/><i>Concurrent transactions<br/>don't interfere with<br/>each other.</i>"]
    ACID --> D["<b>D</b>urability<br/><i>Once committed, data<br/>survives crashes and<br/>power failures.</i>"]
    
    A --> EX1["Example: If transferring<br/>Rs.1000 from A to B,<br/>both debit AND credit<br/>must happen, or neither."]
    
    style ACID fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:3px
```

### NFR Key Concept: CAP Theorem

> In a distributed system, you can only guarantee **two out of three**: Consistency, Availability, Partition Tolerance.

```mermaid
graph TD
    CAP["CAP Theorem"] --> C2["<b>C</b>onsistency<br/><i>Every read gets the<br/>most recent write</i>"]
    CAP --> A2["<b>A</b>vailability<br/><i>Every request gets<br/>a response</i>"]
    CAP --> P2["<b>P</b>artition Tolerance<br/><i>System works despite<br/>network failures</i>"]
    
    C2 -.->|"For banking, choose"| CP["CP: Consistency +<br/>Partition Tolerance<br/><i>Better for financial data</i>"]
    A2 -.->|"For read-heavy services"| AP["AP: Availability +<br/>Partition Tolerance<br/><i>Better for notifications</i>"]
    
    style CAP fill:#9b59b6,stroke:#8e44ad,color:#fff,stroke-width:3px
    style CP fill:#2ecc71,stroke:#27ae60,color:#fff
```

> **For banking:** Choose **CP** (Consistency + Partition Tolerance) for financial transactions. You'd rather the system be briefly unavailable than show incorrect balances!

---

# 🔴 THEORY 6: Technology Stack (Deliverable 07 — 5%)

### Understanding the Full Stack

```mermaid
graph TD
    subgraph FRONTEND["🎨 Frontend (What users see)"]
        REACT["React.js / Next.js"]
        RN["React Native<br/><i>Mobile</i>"]
    end
    
    subgraph BACKEND["⚙️ Backend (Business logic)"]
        NODE["Node.js + Express<br/>OR Spring Boot (Java)"]
    end
    
    subgraph DATABASE["🗄️ Databases (Data storage)"]
        PG["PostgreSQL<br/><i>Financial data (ACID)</i>"]
        MG["MongoDB<br/><i>Logs, notifications</i>"]
        RD["Redis<br/><i>Caching, sessions</i>"]
    end
    
    subgraph COMM["📨 Communication"]
        KF["Apache Kafka<br/><i>Async messaging</i>"]
        KONG["Kong / AWS API GW<br/><i>API Gateway</i>"]
    end
    
    subgraph DEVOPS["🏗️ DevOps & Cloud"]
        DCK["Docker<br/><i>Containerization</i>"]
        K8["Kubernetes (EKS/GKE)<br/><i>Orchestration</i>"]
        GHA["GitHub Actions<br/><i>CI/CD</i>"]
        TF["Terraform<br/><i>Infrastructure as Code</i>"]
        AWS["AWS / GCP<br/><i>Cloud Provider</i>"]
    end
    
    subgraph OBSERVE["📊 Observability"]
        PROME["Prometheus<br/><i>Metrics</i>"]
        GRAFA["Grafana<br/><i>Dashboards</i>"]
        ELKS["ELK Stack<br/><i>Logging</i>"]
    end
    
    subgraph SEC["🔒 Security"]
        VAULTT["HashiCorp Vault<br/><i>Secrets</i>"]
        OAUTH["OAuth 2.0 + JWT<br/><i>Authentication</i>"]
    end
    
    FRONTEND --> COMM
    COMM --> BACKEND
    BACKEND --> DATABASE
    BACKEND --> COMM
    BACKEND --> DEVOPS
    DEVOPS --> OBSERVE
    DEVOPS --> SEC
    
    style FRONTEND fill:#61dafb,stroke:#21a1c4,color:#333
    style BACKEND fill:#68a063,stroke:#3c6e35,color:#fff
    style DATABASE fill:#336791,stroke:#1a3d5c,color:#fff
    style DEVOPS fill:#2496ed,stroke:#1a6fb5,color:#fff
    style SEC fill:#e74c3c,stroke:#c0392b,color:#fff
```

### Why Each Technology? (Justification Table)

| Layer | Technology | Justification |
|-------|-----------|---------------|
| **Frontend** | React.js / Next.js | Component-based, massive ecosystem, SSR for SEO, ideal for complex UIs |
| **Mobile** | React Native | Code sharing with React web, cross-platform iOS/Android |
| **Backend** | Node.js + Express | High performance async I/O, ideal for microservices, huge npm ecosystem |
| **API Gateway** | Kong / AWS API GW | Rate limiting, auth, request routing, DDoS protection built-in |
| **SQL Database** | PostgreSQL | ACID compliance mandatory for financial transactions, strong data integrity |
| **NoSQL Database** | MongoDB | Flexible schema for logs/notifications, horizontal scaling |
| **Cache** | Redis | Sub-millisecond reads, session management, reduces database load |
| **Message Queue** | Apache Kafka | High-throughput event streaming, guaranteed delivery, replay capability |
| **Containers** | Docker | Consistent environments, isolation between services, portable |
| **Orchestration** | Kubernetes (EKS/GKE) | Auto-scaling, self-healing, rolling updates, service discovery |
| **CI/CD** | GitHub Actions | Free, integrated with code repository, automates build-test-deploy |
| **Cloud** | AWS / GCP | Global infrastructure, managed services, compliance certifications |
| **IaC** | Terraform | Cloud-agnostic, version-controlled infrastructure, reproducible |
| **Monitoring** | Prometheus + Grafana | Industry standard, real-time metrics, beautiful dashboards |
| **Logging** | ELK Stack | Centralized logs from all microservices, powerful search |
| **Secrets** | HashiCorp Vault | Secure API keys, DB passwords, certificates — never hardcode secrets |
| **Auth** | OAuth 2.0 + JWT | Industry standard, stateless tokens, fine-grained permissions |

> [!TIP]
> **Key point for writing:** Don't just LIST technologies — **JUSTIFY every choice.** Explain HOW it supports microservices, security, and disaster recovery.

---

# 🎯 STRATEGIC ACTION PLAN

## Priority Matrix — Where to Spend Your Time

```mermaid
pie title Mark Distribution - Where to Focus
    "Proposed Solution (20%)" : 20
    "System Architecture (20%)" : 20
    "Functional Requirements (15%)" : 15
    "Non-Functional Requirements (15%)" : 15
    "Wireframes Design (15%)" : 15
    "Problem Identification (10%)" : 10
    "Technology Stack (5%)" : 5
```

## Winning Strategy

```mermaid
graph TD
    WIN["🏆 HOW TO WIN"] --> S1["1️⃣ Security is KING<br/><i>Theme is about a cyberattack<br/>Every section should emphasize security</i>"]
    WIN --> S2["2️⃣ Architecture is Foundation<br/><i>20% of marks<br/>Must be clean microservices</i>"]
    WIN --> S3["3️⃣ NFRs Are Underrated<br/><i>Most teams write generic NFRs<br/>Be specific with measurable values</i>"]
    WIN --> S4["4️⃣ Connect Everything<br/><i>Problem → Solution → Architecture<br/>Everything should flow logically</i>"]
    WIN --> S5["5️⃣ Professional Presentation<br/><i>Clean Word doc, numbered sections<br/>Consistent formatting</i>"]
    
    style WIN fill:#f39c12,stroke:#e67e22,color:#fff,stroke-width:3px
    style S1 fill:#e74c3c,stroke:#c0392b,color:#fff
    style S2 fill:#e74c3c,stroke:#c0392b,color:#fff
```

---

## 📋 Hour-by-Hour Action Plan

### 🔴 Day 1 — Today (18 Jul): LEARN + START

| Time Block | Task | What to Do |
|-----------|------|------------|
| **Evening 1h** | 📖 Read & Understand | Read all competition docs (you've done this ✅) |
| **1h** | 📚 Learn Microservices | Watch "Microservices Explained" by TechWorld with Nana (YouTube, ~15 min), read this guide's Theory 3 |
| **1h** | 📝 Draft D1 | Write Problem Identification using Template in Theory 1 (you already have a draft!) |
| **30 min** | 💡 Brainstorm | Name your platform, brainstorm key features |

### 🟡 Day 2 — (19 Jul): SOLUTION + ARCHITECTURE

| Time Block | Task | What to Do |
|-----------|------|------------|
| **2h** | 💡 Write D2 | Complete Proposed Solution using Theory 2's template |
| **1h** | 📚 Learn System Design | Watch ByteByteGo system design video (YouTube), understand layers |
| **2h** | 🏗️ Create D3 | Draw architecture diagram in Draw.io using Theory 3's reference diagram |

### 🟢 Day 3 — (20 Jul): WIREFRAMES + REQUIREMENTS

| Time Block | Task | What to Do |
|-----------|------|------------|
| **30 min** | 📚 Learn Figma | Watch "Figma for Beginners" (YouTube, ~20 min) |
| **3h** | 🎨 Create D4 | Design 6-7 screens in Figma following Theory 4's user flow |
| **2h** | 📝 Write D5 | Write Functional Requirements using Theory 5's mindmap as reference |

### 🔵 Day 4 — (21 Jul): NFRs + TECH STACK + POLISH

| Time Block | Task | What to Do |
|-----------|------|------------|
| **2h** | ⚙️ Write D6 | Write Non-Functional Requirements (focus on Security & DR!) |
| **1h** | 🛠️ Write D7 | Technology Stack with justifications using Theory 6's table |
| **2h** | ✨ Polish | Review all sections, ensure flow, fix formatting |

### 🟣 Day 5 — (22 Jul): FINAL REVIEW + SUBMIT

| Time Block | Task | What to Do |
|-----------|------|------------|
| **2h** | 🔍 Final Review | Read entire document end-to-end, check consistency |
| **1h** | 📄 Format .docx | Final formatting in Microsoft Word |
| **30 min** | 📤 Submit | Upload to duothan.ieeensbm.org/submission **BEFORE 11:59 PM** |

---

## 💡 My Suggestions

### 1. Team Work Division
If you have 2-4 team members, divide like this:

| Person | Responsibilities |
|--------|-----------------|
| **Person 1** | D1 (Problem) + D2 (Solution) + D5 (Functional Req) |
| **Person 2** | D3 (Architecture Diagram) + D7 (Tech Stack) |
| **Person 3** | D4 (Wireframes in Figma) |
| **Person 4** | D6 (Non-Functional Req) + Final document compilation |

### 2. Secret Weapons to Stand Out
- Use **data/statistics** in your Problem Identification (even hypothetical for 2065)
- Include a **threat model** in your solution showing attack vectors and defenses
- Add a **data flow diagram** alongside your architecture
- Design an **admin dashboard** wireframe (optional but impressive)
- Mention **PCI DSS compliance** in your NFRs — it's a banking security standard
- Add a **CI/CD pipeline diagram** showing your development workflow

### 3. Common Mistakes to Avoid
- ❌ Don't submit a monolithic architecture — it's microservices or nothing
- ❌ Don't write vague NFRs like "the system should be fast" — use measurable values
- ❌ Don't just list technologies — justify every choice
- ❌ Don't forget to embed wireframe screenshots AND include the Figma link
- ❌ Don't submit PDF — it MUST be .docx
- ❌ Don't neglect disaster recovery — the entire theme is about recovering from an attack

### 4. Quick YouTube Learning Playlist (Phase 1 Priority)
1. 🎥 **"Microservices Explained"** by TechWorld with Nana (~15 min)
2. 🎥 **"System Design for Beginners"** by Gaurav Sen (~20 min)
3. 🎥 **"API Gateway explained"** by ByteByteGo (~10 min)
4. 🎥 **"Figma Tutorial for Beginners"** by DesignCourse (~30 min)
5. 🎥 **"What is Zero Trust Security?"** by IBM Technology (~10 min)
6. 🎥 **"CAP Theorem Explained"** by Hussein Nasser (~15 min)

---

> [!NOTE]
> **This guide covers Phase 1 in depth.** Once you clear Phase 1, I'll create similar detailed guides for Phase 2 (REBUILD — Development) and Phase 3 (FORTIFY — Deployment & Defense). Focus all energy on Phase 1 now!

> [!CAUTION]
> **Deadline reminder: 22 July 2026, 11:59 PM.** Start working NOW. The competition started today at 6:00 AM!
