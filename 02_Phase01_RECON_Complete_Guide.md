# 🔍 Phase 01 — RECON: Complete Guide & How-To

## 📌 Phase Overview

**Phase Name:** RECON (Reconnaissance)  
**Tagline:** *"Assess the damage. Design the recovery. Prepare the blueprint for rebuilding the future."*  
**Type:** Online  
**Start:** 18 July 2026, 6:00 AM  
**Deadline:** 22 July 2026, 11:59 PM  
**Winners Announced:** 24 July 2026, 5:00 PM  

> [!IMPORTANT]
> **This is a PLANNING and DESIGN phase — NO CODING is required!**
> You are creating a complete project blueprint for a digital banking platform.

---

## 🎯 What You Need To Do

You must submit **ONE single Microsoft Word document (.docx)** containing **7 deliverables** in order. Let's break each one down:

### Deliverables Flow

```mermaid
graph LR
    D1["📋 D1<br/>Problem<br/>ID<br/><i>10%</i>"] --> D2["💡 D2<br/>Proposed<br/>Solution<br/><i>20%</i>"]
    D2 --> D3["🏗️ D3<br/>System<br/>Architecture<br/><i>20%</i>"]
    D3 --> D4["🎨 D4<br/>Wireframes<br/>Design<br/><i>15%</i>"]
    D4 --> D5["📝 D5<br/>Functional<br/>Requirements<br/><i>15%</i>"]
    D5 --> D6["⚙️ D6<br/>Non-Functional<br/>Requirements<br/><i>15%</i>"]
    D6 --> D7["🛠️ D7<br/>Tech Stack<br/>Selection<br/><i>5%</i>"]
    
    style D2 fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:3px
    style D3 fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:3px
    style D1 fill:#3498db,stroke:#2980b9,color:#fff
    style D4 fill:#f39c12,stroke:#e67e22,color:#fff
    style D5 fill:#f39c12,stroke:#e67e22,color:#fff
    style D6 fill:#f39c12,stroke:#e67e22,color:#fff
    style D7 fill:#95a5a6,stroke:#7f8c8d,color:#fff
```

---

### 📋 Deliverable 01: Problem Identification (10% — 10 Marks)

#### What is it?
Analyze and clearly define **what went wrong** in the banking sector after the Super Malware Agent attack.

#### The Problem Analysis Framework

```mermaid
graph TD
    PI["🔍 PROBLEM IDENTIFICATION"] --> WHAT["1️⃣ WHAT happened?<br/><i>Describe the attack<br/>and its damage</i>"]
    PI --> WHO["2️⃣ WHO is affected?<br/><i>Identify all<br/>stakeholders</i>"]
    PI --> WHY["3️⃣ WHY it matters?<br/><i>Explain urgency<br/>and consequences</i>"]
    PI --> FOCUS["4️⃣ WHAT will YOU solve?<br/><i>Define your focused<br/>problem statement</i>"]
    
    WHAT --> W1["Core banking systems destroyed"]
    WHAT --> W2["ATMs offline"]
    WHAT --> W3["Digital payments non-functional"]
    WHAT --> W4["Loan systems down"]
    
    WHO --> U1["Individual banking customers"]
    WHO --> U2["Small business owners"]
    WHO --> U3["Financial institutions"]
    WHO --> U4["Government financial services"]
    
    style PI fill:#3498db,stroke:#2980b9,color:#fff,stroke-width:3px
    style FOCUS fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:2px
```

#### How to do it:
1. **Describe the attack's impact** on the financial sector:
   - Core banking systems destroyed
   - ATMs offline
   - Digital payments non-functional
   - Loan systems down
   - People forced to cash-only
   - Economic recovery slowed
   - Financial inequality increased

2. **Identify the SPECIFIC banking problem** your solution will solve. Pick a focused problem, for example:
   - "Restoring secure digital transactions for small businesses and individuals"
   - "Rebuilding a resilient core banking platform that prevents single-point-of-failure attacks"

3. **Define affected users:**
   - Individual banking customers
   - Small business owners
   - Financial institutions
   - Government financial services
   - Vulnerable populations (elderly, rural communities)

4. **Explain WHY this matters:**
   - Why restoring secure banking is essential for economic recovery
   - What happens if the problem isn't solved
   - The humanitarian dimension (welfare, pensions, remittances)

#### Tips for high marks:
- Be **specific**, not vague
- Show you understand the **real-world impact**
- Connect the problem to **real banking challenges**
- Use data/statistics if possible (even hypothetical ones for the 2065 scenario)
- Explain the **root cause** (monolithic architecture = cascading failure)

---

### 📋 Deliverable 02: Proposed Solution (20% — 20 Marks) ⭐ HIGH WEIGHT

#### What is it?
Your technology-based solution to the problem you identified.

#### Solution Design Framework

```mermaid
graph TD
    SOLUTION["💡 YOUR BANKING PLATFORM"] --> NAME["1️⃣ Platform Name<br/><i>Professional & memorable</i>"]
    SOLUTION --> OVERVIEW["2️⃣ High-Level Overview<br/><i>What does it do?</i>"]
    SOLUTION --> FEATURES["3️⃣ Core Features"]
    SOLUTION --> VALUE["4️⃣ Value Proposition<br/><i>Why is it better?</i>"]
    SOLUTION --> INNOVATION["5️⃣ Innovation<br/><i>What makes it unique?</i>"]
    
    FEATURES --> F1["🔐 Secure Authentication<br/><i>MFA, biometrics, NIC verification</i>"]
    FEATURES --> F2["💰 Encrypted Transactions<br/><i>End-to-end, real-time</i>"]
    FEATURES --> F3["🤖 AI Fraud Detection<br/><i>Real-time ML-based monitoring</i>"]
    FEATURES --> F4["🏦 Account Management<br/><i>Balance, transfers, history</i>"]
    FEATURES --> F5["💳 Payment Processing<br/><i>P2P, merchant, bills</i>"]
    FEATURES --> F6["📄 Loan Management<br/><i>Applications, tracking, repayment</i>"]
    FEATURES --> F7["🔄 Disaster Recovery<br/><i>Multi-region, auto-failover</i>"]
    FEATURES --> F8["📊 Admin Dashboard<br/><i>System health, analytics</i>"]
    
    style SOLUTION fill:#2ecc71,stroke:#27ae60,color:#fff,stroke-width:3px
    style FEATURES fill:#3498db,stroke:#2980b9,color:#fff
    style F1 fill:#e74c3c,stroke:#c0392b,color:#fff
    style F7 fill:#e74c3c,stroke:#c0392b,color:#fff
```

#### How to do it:
1. **Name your platform** — Give it a catchy, professional name (e.g., NexusBank, VaultPay, FinShield, AegisFinance)

2. **Describe the solution** at a high level:
   - What does it do?
   - How does it restore financial services?
   - What makes it secure against future attacks?

3. **Key features to include:**
   - Secure user authentication (multi-factor, biometric)
   - Encrypted transactions (TLS 1.3 in transit, AES-256 at rest)
   - Real-time fraud detection (AI/ML-based)
   - Account management (balance, transfers, history)
   - Payment processing (P2P, merchant, bills)
   - Loan management system
   - Disaster recovery mechanisms
   - Admin dashboard for monitoring

4. **Explain the VALUE:**
   - How does this help users?
   - Why is this better than the old system?
   - How does it prevent future attacks?

5. **Innovation angle:**
   - AI-powered fraud detection with behavioral analytics
   - Blockchain for transaction transparency and audit trails
   - Zero-trust security model at every layer
   - Automated failover and self-healing infrastructure
   - Financial inclusion features for underserved populations

#### Security Architecture of Your Solution

```mermaid
graph TD
    SEC["🛡️ MULTI-LAYERED SECURITY"] --> L1["Layer 1: Edge Security<br/><i>WAF, DDoS Protection,<br/>CDN with SSL</i>"]
    SEC --> L2["Layer 2: Authentication<br/><i>MFA, Biometrics,<br/>OAuth 2.0 + JWT</i>"]
    SEC --> L3["Layer 3: Network<br/><i>Zero-Trust, mTLS,<br/>Service Mesh</i>"]
    SEC --> L4["Layer 4: Data<br/><i>AES-256 at rest,<br/>TLS 1.3 in transit</i>"]
    SEC --> L5["Layer 5: Application<br/><i>Input validation, OWASP,<br/>Rate limiting</i>"]
    SEC --> L6["Layer 6: Monitoring<br/><i>AI Threat Detection,<br/>Real-time alerts, Audit logs</i>"]
    
    style SEC fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:3px
    style L1 fill:#fab1a0,stroke:#e17055,color:#333
    style L2 fill:#fab1a0,stroke:#e17055,color:#333
    style L3 fill:#fab1a0,stroke:#e17055,color:#333
    style L4 fill:#fab1a0,stroke:#e17055,color:#333
    style L5 fill:#fab1a0,stroke:#e17055,color:#333
    style L6 fill:#fab1a0,stroke:#e17055,color:#333
```

#### Tips for high marks:
- Make the solution **directly address** your identified problem
- Show **practical value** — not just theoretical
- Demonstrate **modern technology** understanding
- Explain HOW it prevents future attacks (not just "it's secure")
- Include a **threat model** showing attack vectors and how your system defends against each

---

### 📋 Deliverable 03: System Architecture Diagram (20% — 20 Marks) ⭐ HIGH WEIGHT

#### What is it?
A visual diagram showing how your entire system is structured using **independent services (microservices)**.

#### Complete System Architecture

```mermaid
graph TB
    subgraph CLIENTS["👥 Client Layer"]
        WEB["🌐 Web App<br/><i>React / Next.js</i>"]
        MOB["📱 Mobile App<br/><i>React Native</i>"]
    end

    subgraph EDGE["🛡️ Edge & Security Layer"]
        CDN["📡 CDN<br/><i>CloudFront</i>"]
        WAF["🛡️ WAF<br/><i>Web Application Firewall</i>"]
        DDOS["🚫 DDoS Protection<br/><i>AWS Shield</i>"]
    end

    subgraph GATEWAY["🚪 Gateway Layer"]
        LB["⚖️ Load Balancer<br/><i>Auto-scaling</i>"]
        APIGW["🚪 API Gateway<br/><i>Kong / AWS API GW</i><br/>Rate Limiting · Auth · Routing"]
    end

    subgraph SERVICES["⚙️ Microservices Layer (Independent Services)"]
        AUTH["🔐 Authentication<br/>Service"]
        USERSVC["👤 User Management<br/>Service"]
        TXNSVC["💰 Transaction<br/>Service"]
        ACCSVC["🏦 Account<br/>Service"]
        PAYSVC["💳 Payment Gateway<br/>Service"]
        FRAUDSVC["🤖 Fraud Detection<br/>Service<br/><i>AI/ML</i>"]
        NOTIFSVC["🔔 Notification<br/>Service"]
        AUDITSVC["📝 Audit & Logging<br/>Service"]
        DRSVC["🔄 Disaster Recovery<br/>Service"]
        ADMINSVC["📊 Admin Dashboard<br/>Service"]
    end

    subgraph DATA["🗄️ Data Layer (Database-Per-Service)"]
        PG1["🗄️ PostgreSQL<br/><i>Auth DB</i>"]
        PG2["🗄️ PostgreSQL<br/><i>Users DB</i>"]
        PG3["🗄️ PostgreSQL<br/><i>Transactions DB</i>"]
        PG4["🗄️ PostgreSQL<br/><i>Accounts DB</i>"]
        MONGO["🗄️ MongoDB<br/><i>Logs, Notifications,<br/>Fraud Patterns</i>"]
        REDIS["⚡ Redis Cache<br/><i>Sessions & Hot Data</i>"]
    end

    subgraph MESSAGING["📨 Event-Driven Communication"]
        KAFKA["📬 Apache Kafka<br/><i>Event Streaming &<br/>Async Communication</i>"]
    end

    subgraph INFRA["🏗️ Infrastructure"]
        DOCKER["🐳 Docker Containers"]
        K8S["☸️ Kubernetes<br/><i>EKS / GKE / AKS</i>"]
        CICD["🔄 CI/CD Pipeline<br/><i>GitHub Actions</i>"]
        TF["📐 Terraform<br/><i>Infrastructure as Code</i>"]
    end

    subgraph OBSERVE["📊 Observability"]
        PROM["📈 Prometheus<br/><i>Metrics Collection</i>"]
        GRAF["📊 Grafana<br/><i>Dashboards</i>"]
        ELK["📋 ELK Stack<br/><i>Centralized Logging</i>"]
    end

    subgraph SECURITY["🔒 Security Infrastructure"]
        VAULT["🔑 HashiCorp Vault<br/><i>Secrets Management</i>"]
        IAM["🛂 IAM<br/><i>Role-Based Access</i>"]
        TLS["🔐 TLS 1.3 + mTLS<br/><i>Encryption Everywhere</i>"]
    end

    WEB --> CDN
    MOB --> CDN
    CDN --> WAF
    WAF --> DDOS
    DDOS --> LB
    LB --> APIGW
    
    APIGW --> AUTH
    APIGW --> USERSVC
    APIGW --> TXNSVC
    APIGW --> ACCSVC
    APIGW --> PAYSVC
    APIGW --> ADMINSVC
    
    AUTH --> PG1
    USERSVC --> PG2
    TXNSVC --> PG3
    ACCSVC --> PG4
    NOTIFSVC --> MONGO
    AUDITSVC --> MONGO
    FRAUDSVC --> MONGO
    
    AUTH --> REDIS
    TXNSVC --> REDIS
    ACCSVC --> REDIS
    
    TXNSVC --> KAFKA
    PAYSVC --> KAFKA
    KAFKA --> FRAUDSVC
    KAFKA --> NOTIFSVC
    KAFKA --> AUDITSVC
    KAFKA --> DRSVC
    
    style CLIENTS fill:#3498db,stroke:#2980b9,color:#fff
    style EDGE fill:#e74c3c,stroke:#c0392b,color:#fff
    style GATEWAY fill:#f39c12,stroke:#e67e22,color:#fff
    style SERVICES fill:#2ecc71,stroke:#27ae60,color:#fff
    style DATA fill:#9b59b6,stroke:#8e44ad,color:#fff
    style MESSAGING fill:#1abc9c,stroke:#16a085,color:#fff
    style OBSERVE fill:#00cec9,stroke:#00b894,color:#fff
    style SECURITY fill:#d63031,stroke:#c0392b,color:#fff
```

#### How services communicate:

```mermaid
graph LR
    subgraph SYNC["⚡ Synchronous (Real-time)"]
        direction LR
        SA["Service A"] -->|"REST API / gRPC<br/>Request → Response"| SB["Service B"]
    end
    
    subgraph ASYNC["📨 Asynchronous (Event-driven)"]
        direction LR
        SC["Service C"] -->|"Publish Event"| KAFKA2["📬 Kafka"]
        KAFKA2 -->|"Consume"| SD["Service D"]
        KAFKA2 -->|"Consume"| SE["Service E"]
    end
    
    style SYNC fill:#e8f4fd,stroke:#3498db
    style ASYNC fill:#eafaf1,stroke:#2ecc71
    style KAFKA2 fill:#f39c12,stroke:#e67e22,color:#fff
```

| Communication Type | How It Works | When to Use | Example |
|--------------------|-------------|-------------|---------|
| **REST APIs** | Synchronous HTTP request/response | When immediate response needed | User login → Auth verifies credentials |
| **gRPC** | High-performance RPC, binary protocol | High-throughput service-to-service | Account service ↔ Transaction service |
| **Message Queue (Kafka)** | Async publish/subscribe events | When response not immediately needed | Transaction completed → Trigger notification |
| **Service Mesh** | Sidecar proxy for inter-service security | All service-to-service communication | mTLS between all microservices |

#### Tools to create the diagram:
- **Draw.io / Diagrams.net** (free, recommended)
- **Lucidchart**
- **Figma** (for more visual diagrams)
- **Miro**
- **Excalidraw**

#### Tips for high marks:
- **MUST be microservices** — monolithic = low marks
- Show **clear data flow** with arrows
- Label **every component**
- Show **security at every layer**
- Include **disaster recovery** in the architecture
- Show **database-per-service** pattern clearly
- Include all layers: Client → Edge → Gateway → Services → Data → Messaging → Monitoring

---

### 📋 Deliverable 04: Wireframes Design (15% — 15 Marks)

#### What is it?
Visual interface designs showing how users will interact with the banking platform.

#### User Flow Diagram

```mermaid
graph TD
    SPLASH["🏦 Splash Screen<br/><i>App branding</i>"] --> ONBOARD["📖 Onboarding<br/><i>First-time setup</i>"]
    ONBOARD --> REGISTER["📝 Registration<br/><i>Email, Phone, NIC</i>"]
    REGISTER --> LOGIN["🔐 Login Page<br/><i>Credentials entry</i>"]
    LOGIN --> MFA["📱 MFA Verification<br/><i>OTP / Biometric</i>"]
    MFA --> DASH["🏠 DASHBOARD<br/><i>Balance overview<br/>Quick actions<br/>Recent transactions</i>"]
    
    DASH --> SEND["💸 Send Money<br/><i>Recipient, Amount</i>"]
    DASH --> HISTORY["📋 Transaction History<br/><i>Filters, search, export</i>"]
    DASH --> PROFILE["👤 Profile & Settings<br/><i>KYC, preferences</i>"]
    DASH --> BILLS["💡 Bill Payments<br/><i>Utilities, subscriptions</i>"]
    DASH --> NOTIF["🔔 Notifications<br/><i>Alerts, messages</i>"]
    DASH --> CARDS["💳 Card Management<br/><i>Virtual/Physical cards</i>"]
    
    SEND --> CONFIRM["✅ Confirmation<br/><i>Review details</i>"]
    CONFIRM --> PIN["🔢 PIN / Biometric<br/><i>Authorize transaction</i>"]
    PIN --> RECEIPT["🧾 Receipt<br/><i>Success / Share</i>"]
    RECEIPT --> DASH
    
    style DASH fill:#3498db,stroke:#2980b9,color:#fff,stroke-width:3px
    style LOGIN fill:#e74c3c,stroke:#c0392b,color:#fff
    style MFA fill:#e74c3c,stroke:#c0392b,color:#fff
    style SEND fill:#2ecc71,stroke:#27ae60,color:#fff
```

#### Required screens (minimum):

| # | Screen | Purpose | Priority |
|---|--------|---------|----------|
| 1 | 🔐 Login / Registration | Entry point, first impression | **Must-have** |
| 2 | 📱 MFA Verification | Security verification step | **Must-have** |
| 3 | 🏠 Dashboard / Home | Balance, quick actions, recent transactions | **Must-have** |
| 4 | 💸 Send Money / Transfer | Core banking function | **Must-have** |
| 5 | 📋 Transaction History | View past transactions with filters | **Must-have** |
| 6 | 👤 Profile / Settings | User preferences, KYC, security | **Must-have** |
| 7 | 🔔 Notifications | Alerts and messages | **Should-have** |
| 8 | 📊 Admin Dashboard | System health and analytics | **Nice-to-have** (impressive!) |

#### Fidelity levels:

```mermaid
graph LR
    LOW["📝 Low-Fidelity<br/><i>Basic sketches</i><br/><b>Too basic ❌</b>"] --> MID["🖼️ Mid-Fidelity<br/><i>Grayscale, structured</i><br/><b>Good enough ✅</b>"]
    MID --> HIGH["🎨 High-Fidelity<br/><i>Colors, polished</i><br/><b>Best for marks ⭐</b>"]
    
    style LOW fill:#ff7675,stroke:#d63031,color:#fff
    style MID fill:#ffeaa7,stroke:#fdcb6e,color:#333
    style HIGH fill:#55efc4,stroke:#00b894,color:#333
```

#### Tools to use:
- **Figma** (free, highly recommended)
- **Adobe XD**
- **Canva** (simpler option)
- **Sketch** (macOS only)

#### Important UX considerations for a banking app:

```mermaid
mindmap
  root["🎨 BANKING UX PRINCIPLES"]
    Trust & Security
      Blues and greens color palette
      Lock icons and encryption badges
      Visible security indicators
      "Secured by..." labels
    Clarity
      Large, readable balance display
      Clear transaction labels
      Intuitive navigation
      Status indicators
    Simplicity
      Minimal steps for common tasks
      Clear call-to-action buttons
      Logical information hierarchy
      Clean, uncluttered layouts
    Accessibility
      WCAG 2.1 AA compliance
      High contrast ratios
      Large touch targets
      Multi-language support
    Mobile-First
      Responsive design
      Touch-optimized interactions
      Biometric integration
      Push notifications
```

#### Submission format:
- **Embed clear screenshots** in the Word document
- **Include a working link** to the original design file (Figma/Canva/XD)

#### Tips for high marks:
- Go for **high-fidelity** if possible
- Show **multiple screens** that tell a story
- Include **user flows** (login → dashboard → transfer → confirmation)
- Make it look **professional and trustworthy** — it's a banking app!
- Show **error states** and **loading states** for extra polish

---

### 📋 Deliverable 05: Functional Requirements (15% — 15 Marks)

#### What is it?
A list of what the system **should DO** from the user's perspective.

#### How to write them:

Use the format: *"The system shall..."* or *"As a [user], I can..."*

#### Functional Requirements Mind Map

```mermaid
mindmap
  root["📝 FUNCTIONAL REQUIREMENTS"]
    🔐 Authentication & Security
      FR-01 Register with email, phone, NIC
      FR-02 Multi-factor authentication
      FR-03 Biometric login support
      FR-04 Account lockout after 5 failures
      FR-05 Password reset via email/SMS
      FR-06 Session timeout management
    🏦 Account Management
      FR-07 View real-time balance
      FR-08 Transaction history with filters
      FR-09 Manage multiple accounts
      FR-10 KYC verification workflow
      FR-11 Profile preferences management
    💰 Transactions
      FR-12 Internal fund transfers
      FR-13 Bill payments
      FR-14 Scheduled/recurring payments
      FR-15 Real-time notifications
      FR-16 QR code payments
      FR-17 Transaction receipt generation
    🤖 Fraud & Security
      FR-18 Flag unusual patterns
      FR-19 Report unauthorized transactions
      FR-20 Auto-freeze suspicious accounts
      FR-21 Real-time fraud alerts
    📊 Admin Features
      FR-22 System health monitoring
      FR-23 User account management
      FR-24 Daily transaction reports
      FR-25 Audit trail viewing
```

#### Example Functional Requirements:

**User Authentication & Security:**
- FR-01: The system shall allow users to register with email, phone number, and NIC verification
- FR-02: The system shall support multi-factor authentication (MFA)
- FR-03: The system shall lock accounts after 5 failed login attempts
- FR-04: The system shall support biometric authentication (fingerprint/face)

**Account Management:**
- FR-05: Users shall be able to view their account balance in real-time
- FR-06: Users shall be able to view transaction history with filters (date, type, amount)
- FR-07: Users shall be able to manage multiple bank accounts from a single profile

**Transactions:**
- FR-08: Users shall be able to transfer money to other accounts within the platform
- FR-09: Users shall be able to make bill payments
- FR-10: Users shall receive real-time notifications for all transactions
- FR-11: The system shall support recurring/scheduled payments

**Fraud Detection:**
- FR-12: The system shall flag unusual transaction patterns for review
- FR-13: The system shall allow users to report unauthorized transactions
- FR-14: The system shall temporarily freeze accounts upon detecting suspicious activity

**Admin Features:**
- FR-15: Admins shall be able to monitor system health in real-time
- FR-16: Admins shall be able to manage user accounts (suspend, verify, restore)
- FR-17: The system shall generate daily transaction reports

#### Tips for high marks:
- Be **comprehensive** — cover ALL aspects of the system
- Group them logically (Auth, Accounts, Transactions, Admin, etc.)
- Number them for easy reference
- Each requirement should be **testable** and **specific**
- Aim for **20-30 requirements** across all categories

---

### 📋 Deliverable 06: Non-Functional Requirements (15% — 15 Marks)

#### What is it?
The **quality standards** of the system — HOW it performs, not what it does.

> [!WARNING]
> The competition document says this **heavily weighs security, disaster recovery, cloud performance, and reliability**. Focus on these!

#### NFR Categories & Focus

```mermaid
graph TD
    NFR["⚙️ NON-FUNCTIONAL<br/>REQUIREMENTS"] --> SEC["🔒 SECURITY<br/><b>CRITICAL ⭐</b>"]
    NFR --> DR["🔄 DISASTER RECOVERY<br/><b>CRITICAL ⭐</b>"]
    NFR --> PERF["⚡ PERFORMANCE"]
    NFR --> CLOUD["☁️ CLOUD & SCALABILITY"]
    NFR --> MON["📊 MONITORING"]
    NFR --> ACC["♿ ACCESSIBILITY"]
    
    SEC --> S1["TLS 1.3 in transit"]
    SEC --> S2["AES-256 at rest"]
    SEC --> S3["Zero-trust architecture"]
    SEC --> S4["PCI DSS compliance"]
    SEC --> S5["bcrypt password hashing"]
    SEC --> S6["Rate-limited APIs"]
    
    DR --> D1["Auto backups every 6hr"]
    DR --> D2["RPO < 1 hour"]
    DR --> D3["RTO < 30 minutes"]
    DR --> D4["Multi-region failover"]
    DR --> D5["99.99% uptime SLA"]
    
    PERF --> P1["API response < 200ms"]
    PERF --> P2["10,000+ concurrent users"]
    PERF --> P3["Page load < 3 seconds"]
    
    style NFR fill:#2c3e50,stroke:#1a252f,color:#fff,stroke-width:3px
    style SEC fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:2px
    style DR fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:2px
    style PERF fill:#f39c12,stroke:#e67e22,color:#fff
    style CLOUD fill:#3498db,stroke:#2980b9,color:#fff
    style MON fill:#1abc9c,stroke:#16a085,color:#fff
    style ACC fill:#9b59b6,stroke:#8e44ad,color:#fff
```

#### Example Non-Functional Requirements:

**🔒 Security (CRITICAL for this competition):**
- NFR-01: All data in transit must be encrypted using TLS 1.3
- NFR-02: All data at rest must be encrypted using AES-256
- NFR-03: The system must implement zero-trust security architecture
- NFR-04: All API endpoints must be authenticated and rate-limited
- NFR-05: Passwords must be hashed using bcrypt with salt
- NFR-06: The system must comply with banking security standards (PCI DSS)

**⚡ Performance:**
- NFR-07: API response time must be < 200ms for 95% of requests
- NFR-08: The system must handle 10,000+ concurrent users
- NFR-09: Database queries must complete within 100ms
- NFR-10: Page load time must be < 3 seconds

**🔄 Disaster Recovery (CRITICAL):**
- NFR-11: The system must have automated backups every 6 hours
- NFR-12: Recovery Point Objective (RPO) must be < 1 hour
- NFR-13: Recovery Time Objective (RTO) must be < 30 minutes
- NFR-14: The system must support multi-region failover
- NFR-15: The system must maintain 99.99% uptime (SLA)

**☁️ Cloud & Scalability:**
- NFR-16: The system must auto-scale based on traffic load
- NFR-17: Services must be containerized using Docker
- NFR-18: Infrastructure must be managed as code (Terraform/CloudFormation)
- NFR-19: The system must support horizontal scaling

**📊 Monitoring & Observability:**
- NFR-20: All services must have health check endpoints
- NFR-21: System must provide centralized logging
- NFR-22: Real-time monitoring dashboards must be available
- NFR-23: Alerting must be configured for critical system metrics

**♿ Accessibility & Usability:**
- NFR-24: The application must support WCAG 2.1 AA standards
- NFR-25: The system must support multiple languages (Sinhala, Tamil, English)

#### Disaster Recovery Visualization

```mermaid
graph LR
    PRIMARY["🖥️ PRIMARY<br/><i>AWS Region 1</i>"] -->|"Real-time<br/>replication"| STANDBY["🖥️ STANDBY<br/><i>AWS Region 2</i>"]
    PRIMARY -->|"Every 6 hours"| SNAPSHOTS["💾 SNAPSHOTS<br/><i>S3 Cross-Region</i>"]
    PRIMARY -->|"Continuous"| LOGS["📋 WAL Logs<br/><i>Point-in-time<br/>recovery</i>"]
    
    PRIMARY -.->|"❌ System Fails!"| FAILOVER["🔄 AUTOMATIC<br/>FAILOVER"]
    FAILOVER --> STANDBY
    STANDBY -->|"Takes over in<br/>< 30 min (RTO)"| USERS["👥 Users<br/>uninterrupted"]
    
    SNAPSHOTS -.->|"Max data loss:<br/>< 1 hour (RPO)"| RESTORE["♻️ Full<br/>Restoration"]
    
    style PRIMARY fill:#3498db,stroke:#2980b9,color:#fff
    style STANDBY fill:#2ecc71,stroke:#27ae60,color:#fff
    style FAILOVER fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:2px
    style USERS fill:#00b894,stroke:#00a381,color:#fff
```

#### Tips for high marks:
- **Security and Disaster Recovery** are the MOST important — spend time here
- Use **measurable values** (not "the system should be fast" but "response time < 200ms")
- Show understanding of **cloud-native** practices
- Include **compliance requirements** (PCI DSS for banking)
- Aim for **20-25 requirements** across all categories

---

### 📋 Deliverable 07: Technology Stack Selection (5% — 5 Marks)

#### What is it?
The tools, languages, frameworks, and cloud services you plan to use — with **justification**.

#### Technology Stack Overview

```mermaid
graph TD
    subgraph FE["🎨 FRONTEND"]
        REACT["React.js / Next.js<br/><i>Web Application</i>"]
        RN["React Native<br/><i>Mobile Apps</i>"]
    end
    
    subgraph BE["⚙️ BACKEND"]
        NODE["Node.js + Express<br/><i>OR Spring Boot (Java)</i>"]
        APIG["Kong / AWS API Gateway<br/><i>API Management</i>"]
    end
    
    subgraph DB["🗄️ DATABASES"]
        PGSQL["PostgreSQL<br/><i>Financial Data (ACID)</i>"]
        MGDB["MongoDB<br/><i>Logs & Notifications</i>"]
        RDIS["Redis<br/><i>Caching & Sessions</i>"]
    end
    
    subgraph MSG["📨 MESSAGING"]
        KFK["Apache Kafka<br/><i>Event Streaming</i>"]
    end
    
    subgraph DEVOPS["🏗️ DEVOPS & CLOUD"]
        DCK["Docker<br/><i>Containerization</i>"]
        K8S2["Kubernetes (EKS/GKE)<br/><i>Orchestration</i>"]
        GHA2["GitHub Actions<br/><i>CI/CD Pipeline</i>"]
        TF2["Terraform<br/><i>Infrastructure as Code</i>"]
        CLOUD2["AWS / GCP<br/><i>Cloud Provider</i>"]
    end
    
    subgraph OBS["📊 OBSERVABILITY"]
        PROM2["Prometheus + Grafana<br/><i>Metrics & Dashboards</i>"]
        ELK2["ELK Stack<br/><i>Centralized Logging</i>"]
    end
    
    subgraph SECU["🔒 SECURITY"]
        HCV["HashiCorp Vault<br/><i>Secrets Management</i>"]
        OA["OAuth 2.0 + JWT<br/><i>Authentication</i>"]
    end
    
    FE --> BE
    BE --> DB
    BE --> MSG
    BE --> DEVOPS
    DEVOPS --> OBS
    DEVOPS --> SECU
    
    style FE fill:#61dafb,stroke:#21a1c4,color:#333
    style BE fill:#68a063,stroke:#3c6e35,color:#fff
    style DB fill:#336791,stroke:#1a3d5c,color:#fff
    style MSG fill:#e67e22,stroke:#d35400,color:#fff
    style DEVOPS fill:#2496ed,stroke:#1a6fb5,color:#fff
    style OBS fill:#00cec9,stroke:#00b894,color:#fff
    style SECU fill:#e74c3c,stroke:#c0392b,color:#fff
```

#### Recommended Stack (Example):

| Layer | Technology | Justification |
|-------|-----------|---------------|
| **Frontend** | React.js / Next.js | Component-based, large ecosystem, SSR for performance, ideal for complex UIs |
| **Mobile** | React Native / Flutter | Cross-platform development, code reuse with web frontend |
| **Backend** | Node.js (Express) / Spring Boot (Java) | High performance, scalability, enterprise-grade, extensive ecosystem |
| **API Gateway** | Kong / AWS API Gateway | Built-in rate limiting, authentication, request routing, DDoS protection |
| **Database (SQL)** | PostgreSQL | ACID compliance critical for financial transactions, strong data integrity |
| **Database (NoSQL)** | MongoDB | Flexible schema for logs, notifications, fraud patterns |
| **Cache** | Redis | Sub-millisecond reads, session management, reduces database load |
| **Message Queue** | Apache Kafka / RabbitMQ | High-throughput async communication, guaranteed delivery between services |
| **Containerization** | Docker | Consistent deployment environments, service isolation |
| **Orchestration** | Kubernetes (EKS/GKE/AKS) | Auto-scaling, self-healing containers, rolling updates |
| **CI/CD** | GitHub Actions / Jenkins | Automated build, test, deploy pipeline |
| **Cloud Provider** | AWS / GCP / Azure | Global infrastructure, compliance certifications, managed services |
| **Monitoring** | Prometheus + Grafana | Real-time metrics collection and beautiful visualization |
| **Logging** | ELK Stack (Elasticsearch, Logstash, Kibana) | Centralized log management across all microservices |
| **Security** | HashiCorp Vault, OAuth 2.0, JWT | Secrets management, industry-standard secure authentication |
| **IaC** | Terraform | Cloud-agnostic, version-controlled infrastructure, reproducible |

#### Tips for high marks:
- **Justify EVERY choice** — don't just list technologies
- Show how the stack supports **microservices**
- Show how it supports **security** and **disaster recovery**
- Make sure your stack is **consistent** (don't mix conflicting technologies)
- Explain WHY each technology is the best fit for a **banking platform**

---

## 📤 Submission Details

```mermaid
graph LR
    WORK["📝 Your Work<br/><i>7 Deliverables</i>"] --> FORMAT["📄 Format as<br/><b>.docx ONLY</b>"]
    FORMAT --> WIRE["🎨 Embed Wireframe<br/>Screenshots +<br/>Include Figma Link"]
    WIRE --> CHECK["✅ Verify Order<br/><i>D1 → D2 → ... → D7</i>"]
    CHECK --> SUBMIT["📤 Submit at<br/><b>duothan.ieeensbm.org<br/>/submission</b>"]
    SUBMIT --> DEADLINE["⏰ Before<br/><b>22 Jul 2026<br/>11:59 PM</b>"]
    
    style SUBMIT fill:#3498db,stroke:#2980b9,color:#fff,stroke-width:2px
    style DEADLINE fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:3px
    style FORMAT fill:#f39c12,stroke:#e67e22,color:#fff
```

| Item | Requirement |
|------|------------|
| **Format** | Single **Microsoft Word document (.docx)** |
| **Content** | All 7 deliverables in order |
| **Wireframes** | Embed screenshots + include link to design file (Figma/Canva/XD) |
| **Deadline** | **22 July 2026, 11:59 PM** |
| **Submission Link** | **duothan.ieeensbm.org/submission** |

> [!CAUTION]
> ❌ **PDFs, Google Docs links, or other formats will NOT be accepted** — Only .docx!

---

## 📊 Mark Allocation Summary

```mermaid
pie title Where Your Marks Come From (Total: 100)
    "Proposed Solution (20%)" : 20
    "System Architecture (20%)" : 20
    "Wireframes Design (15%)" : 15
    "Functional Requirements (15%)" : 15
    "Non-Functional Requirements (15%)" : 15
    "Problem Identification (10%)" : 10
    "Technology Stack (5%)" : 5
```

| # | Criteria | Weight | Marks |
|---|----------|--------|-------|
| 01 | Problem Identification | 10% | /10 |
| 02 | Proposed Solution | **20%** | /20 |
| 03 | System Architecture | **20%** | /20 |
| 04 | Wireframes Design | 15% | /15 |
| 05 | Functional Requirements | 15% | /15 |
| 06 | Non-Functional Requirements | 15% | /15 |
| 07 | Technology Stack Selection | 5% | /05 |
| **Total** | | **100%** | **/100** |

> **Focus your energy on:** Proposed Solution (20%) + System Architecture (20%) + Non-Functional Requirements (15%) — these carry the most weight.

---

## ⏰ Timeline & Priority

Given the deadline is **22 July 2026 at 11:59 PM**, here's a suggested work schedule:

```mermaid
gantt
    title Phase 1 Work Schedule
    dateFormat  YYYY-MM-DD
    
    section Day 1 - 18 Jul
    Read documents & brainstorm           :d1a, 2026-07-18, 1d
    Start D1 Problem Identification       :d1b, 2026-07-18, 1d
    
    section Day 2 - 19 Jul
    Complete D1 + Start D2 Solution       :d2a, 2026-07-19, 1d
    Learn microservices concepts          :d2b, 2026-07-19, 1d
    
    section Day 3 - 20 Jul
    Complete D2 + D3 Architecture Diagram :d3a, 2026-07-20, 1d
    Start D4 Wireframes in Figma          :d3b, 2026-07-20, 1d
    
    section Day 4 - 21 Jul
    Complete D4 + Write D5 FR & D6 NFR    :d4a, 2026-07-21, 1d
    D7 Technology Stack                   :d4b, 2026-07-21, 1d
    
    section Day 5 - 22 Jul
    Final review & polish                 :d5a, 2026-07-22, 1d
    Format .docx & SUBMIT                 :crit, d5b, 2026-07-22, 1d
```

| Day | Date | Focus |
|-----|------|-------|
| **Day 1** | 18 Jul (Today!) | Read documents, brainstorm, start Problem Identification & Proposed Solution |
| **Day 2** | 19 Jul | Complete Proposed Solution, start System Architecture |
| **Day 3** | 20 Jul | Complete Architecture Diagram, start Wireframes |
| **Day 4** | 21 Jul | Complete Wireframes, Functional & Non-Functional Requirements |
| **Day 5** | 22 Jul | Technology Stack, final review, polish, **SUBMIT before 11:59 PM** |
