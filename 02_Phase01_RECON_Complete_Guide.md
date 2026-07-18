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

---

### 📋 Deliverable 01: Problem Identification (10% — 10 Marks)

#### What is it?
Analyze and clearly define **what went wrong** in the banking sector after the Super Malware Agent attack.

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

4. **Explain WHY this matters:**
   - Why restoring secure banking is essential for economic recovery
   - What happens if the problem isn't solved

#### Tips for high marks:
- Be **specific**, not vague
- Show you understand the **real-world impact**
- Connect the problem to **real banking challenges**
- Use data/statistics if possible (even hypothetical ones for the 2065 scenario)

---

### 📋 Deliverable 02: Proposed Solution (20% — 20 Marks) ⭐ HIGH WEIGHT

#### What is it?
Your technology-based solution to the problem you identified.

#### How to do it:
1. **Name your platform** — Give it a catchy, professional name

2. **Describe the solution** at a high level:
   - What does it do?
   - How does it restore financial services?
   - What makes it secure against future attacks?

3. **Key features to include:**
   - Secure user authentication (multi-factor, biometric)
   - Encrypted transactions
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
   - Think about AI-powered fraud detection
   - Blockchain for transaction transparency
   - Zero-trust security model
   - Automated failover and backup systems

#### Tips for high marks:
- Make the solution **directly address** your identified problem
- Show **practical value** — not just theoretical
- Demonstrate **modern technology** understanding
- Explain HOW it prevents future attacks (not just "it's secure")

---

### 📋 Deliverable 03: System Architecture Diagram (20% — 20 Marks) ⭐ HIGH WEIGHT

#### What is it?
A visual diagram showing how your entire system is structured using **independent services (microservices)**.

#### How to do it:

1. **Use microservices architecture** — This is MANDATORY. Key services might include:
   - 🔐 **Authentication Service** — Login, registration, MFA
   - 👤 **User Management Service** — Profile, KYC
   - 💰 **Transaction Service** — Transfers, payments
   - 🏦 **Account Service** — Balance, account management
   - 💳 **Payment Gateway Service** — External payments
   - 📊 **Fraud Detection Service** — AI-based monitoring
   - 🔔 **Notification Service** — Alerts, SMS, email
   - 📝 **Audit/Logging Service** — Activity tracking
   - 🔄 **Disaster Recovery Service** — Backup, failover
   - 📈 **Admin Dashboard Service** — Monitoring, analytics

2. **Show how services communicate:**
   - API Gateway for routing
   - REST APIs or gRPC between services
   - Message queues (RabbitMQ, Kafka) for async communication
   - Service mesh for inter-service security

3. **Show databases:**
   - Each microservice should have its own database (database-per-service pattern)
   - Show which databases are SQL vs NoSQL
   - Include caching layer (Redis)

4. **Include infrastructure components:**
   - Load Balancer
   - API Gateway
   - CDN for frontend
   - Cloud provider services (AWS/GCP/Azure)
   - Container orchestration (Kubernetes/Docker)
   - CI/CD pipeline
   - Monitoring & logging (Prometheus, Grafana, ELK)

5. **Show security layers:**
   - Firewall / WAF
   - SSL/TLS encryption
   - Identity provider
   - Secrets management (Vault)

#### Tools to create the diagram:
- **Draw.io / Diagrams.net** (free, recommended)
- **Lucidchart**
- **Figma** (for more visual diagrams)
- **Miro**
- **Excalidraw**

#### Example Architecture Flow:
```
Client Apps (Web/Mobile)
        ↓
   [CDN / CloudFront]
        ↓
   [Load Balancer]
        ↓
   [API Gateway]
    ↓    ↓    ↓    ↓
[Auth] [User] [Txn] [Payment]  ← Microservices
  ↓      ↓      ↓      ↓
[DB1]  [DB2]  [DB3]  [DB4]     ← Separate Databases
        ↓
   [Message Queue (Kafka)]
    ↓         ↓
[Notification] [Fraud Detection (AI/ML)]
        ↓
[Monitoring: Prometheus + Grafana]
[Logging: ELK Stack]
[Disaster Recovery: Multi-region backup]
```

#### Tips for high marks:
- **MUST be microservices** — monolithic = low marks
- Show **clear data flow** with arrows
- Label **every component**
- Show **security at every layer**
- Include **disaster recovery** in the architecture

---

### 📋 Deliverable 04: Wireframes Design (15% — 15 Marks)

#### What is it?
Visual interface designs showing how users will interact with the banking platform.

#### How to do it:

1. **Required screens (minimum):**
   - 🔐 Login / Registration page
   - 🏠 Dashboard / Home (balance overview, recent transactions)
   - 💸 Send Money / Transfer page
   - 📋 Transaction History page
   - 👤 Profile / Settings page
   - 🔔 Notifications page
   - 📊 Admin Dashboard (optional but impressive)

2. **Fidelity level:**
   - **Mid-fidelity** = Good enough (grayscale with structure)
   - **High-fidelity** = Even better (colors, real content, polished)
   - Low-fidelity (basic sketches) = probably too basic

3. **Tools to use:**
   - **Figma** (free, highly recommended)
   - **Adobe XD**
   - **Canva** (simpler option)
   - **Sketch** (macOS only)

4. **Important UX considerations for a banking app:**
   - Clean, trustworthy design (blues, greens, whites)
   - Clear navigation
   - Accessibility features
   - Security indicators (lock icons, encryption badges)
   - Error handling screens
   - Mobile responsive design

#### Submission format:
- **Embed clear screenshots** in the Word document
- **Include a working link** to the original design file (Figma/Canva/XD)

#### Tips for high marks:
- Go for **high-fidelity** if possible
- Show **multiple screens** that tell a story
- Include **user flows** (login → dashboard → transfer → confirmation)
- Make it look **professional and trustworthy** — it's a banking app!

---

### 📋 Deliverable 05: Functional Requirements (15% — 15 Marks)

#### What is it?
A list of what the system **should DO** from the user's perspective.

#### How to write them:

Use the format: *"The system shall..."* or *"As a [user], I can..."*

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

---

### 📋 Deliverable 06: Non-Functional Requirements (15% — 15 Marks)

#### What is it?
The **quality standards** of the system — HOW it performs, not what it does.

> [!WARNING]
> The competition document says this **heavily weighs security, disaster recovery, cloud performance, and reliability**. Focus on these!

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

#### Tips for high marks:
- **Security and Disaster Recovery** are the MOST important — spend time here
- Use **measurable values** (not "the system should be fast" but "response time < 200ms")
- Show understanding of **cloud-native** practices
- Include **compliance requirements** (PCI DSS for banking)

---

### 📋 Deliverable 07: Technology Stack Selection (5% — 5 Marks)

#### What is it?
The tools, languages, frameworks, and cloud services you plan to use — with **justification**.

#### Recommended Stack (Example):

| Layer | Technology | Justification |
|-------|-----------|---------------|
| **Frontend** | React.js / Next.js | Component-based, large ecosystem, ideal for complex UIs |
| **Mobile** | React Native / Flutter | Cross-platform, code reuse |
| **Backend** | Node.js (Express) / Spring Boot (Java) | High performance, scalability, enterprise-grade |
| **API Gateway** | Kong / AWS API Gateway | Rate limiting, authentication, routing |
| **Database (SQL)** | PostgreSQL | ACID compliance, strong for financial data |
| **Database (NoSQL)** | MongoDB | Flexible schema for logs, notifications |
| **Cache** | Redis | In-memory caching for fast access |
| **Message Queue** | Apache Kafka / RabbitMQ | Async communication between microservices |
| **Containerization** | Docker | Consistent deployment environments |
| **Orchestration** | Kubernetes (EKS/GKE/AKS) | Auto-scaling, self-healing containers |
| **CI/CD** | GitHub Actions / Jenkins | Automated build, test, deploy |
| **Cloud Provider** | AWS / GCP / Azure | Scalable, reliable cloud infrastructure |
| **Monitoring** | Prometheus + Grafana | Real-time metrics and visualization |
| **Logging** | ELK Stack (Elasticsearch, Logstash, Kibana) | Centralized log management |
| **Security** | HashiCorp Vault, OAuth 2.0, JWT | Secrets management, secure auth |
| **IaC** | Terraform | Infrastructure as Code |

#### Tips for high marks:
- **Justify EVERY choice** — don't just list technologies
- Show how the stack supports **microservices**
- Show how it supports **security** and **disaster recovery**
- Make sure your stack is **consistent** (don't mix conflicting technologies)

---

## 📤 Submission Details

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

| Day | Date | Focus |
|-----|------|-------|
| **Day 1** | 18 Jul (Today!) | Read documents, brainstorm, start Problem Identification & Proposed Solution |
| **Day 2** | 19 Jul | Complete Proposed Solution, start System Architecture |
| **Day 3** | 20 Jul | Complete Architecture Diagram, start Wireframes |
| **Day 4** | 21 Jul | Complete Wireframes, Functional & Non-Functional Requirements |
| **Day 5** | 22 Jul | Technology Stack, final review, polish, **SUBMIT before 11:59 PM** |
