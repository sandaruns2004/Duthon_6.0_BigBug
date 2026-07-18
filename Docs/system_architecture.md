# 03. System Architecture Diagram

---

## 3.1 Architecture Overview

AegisVault is built on a **microservices-first architecture** organized into 9 distinct layers. Each layer serves a specific purpose, and every microservice operates independently with its own database, ensuring that the cascading failure that destroyed the legacy monolithic system in 2065 is architecturally impossible.

```mermaid
graph TB
    subgraph CLIENTS["👥 CLIENT LAYER"]
        WEB["🌐 Web Application<br/><i>React / Next.js</i><br/>SSR + SPA"]
        MOB["📱 Mobile Application<br/><i>React Native</i><br/>iOS + Android"]
    end

    subgraph EDGE["🛡️ EDGE SECURITY LAYER"]
        CDN["📡 CDN<br/><i>AWS CloudFront</i><br/>Static content + SSL"]
        WAF["🛡️ WAF<br/><i>AWS WAF</i><br/>Web Application Firewall"]
        DDOS["🚫 DDoS Protection<br/><i>AWS Shield Advanced</i>"]
    end

    subgraph GATEWAY["🚪 API GATEWAY LAYER"]
        LB["⚖️ Application<br/>Load Balancer<br/><i>Auto-scaling groups</i>"]
        APIGW["🚪 API Gateway<br/><i>Kong / AWS API GW</i><br/>Rate Limiting · Auth<br/>Routing · Logging"]
    end

    subgraph SERVICES["⚙️ MICROSERVICES LAYER — Independent Services"]
        AUTH["🔐 Authentication<br/>Service<br/><i>OAuth 2.0 + JWT</i>"]
        USERSVC["👤 User Management<br/>Service<br/><i>Profiles + KYC</i>"]
        ACCSVC["🏦 Account<br/>Service<br/><i>Balances + Types</i>"]
        TXNSVC["💰 Transaction<br/>Service<br/><i>Transfers + History</i>"]
        PAYSVC["💳 Payment<br/>Service<br/><i>P2P + Bills + QR</i>"]
        LOANSVC["📄 Loan<br/>Service<br/><i>Applications + Tracking</i>"]
        FRAUDSVC["🤖 Fraud Detection<br/>Service<br/><i>AI/ML Engine</i>"]
        NOTIFSVC["🔔 Notification<br/>Service<br/><i>Push + SMS + Email</i>"]
        AUDITSVC["📝 Audit & Logging<br/>Service<br/><i>Immutable Logs</i>"]
        ADMINSVC["📊 Admin<br/>Service<br/><i>Dashboard + Reports</i>"]
    end

    subgraph DATA["🗄️ DATA LAYER — Database-Per-Service Pattern"]
        PG_AUTH["🗄️ PostgreSQL<br/><i>Auth DB</i><br/>Credentials · Tokens"]
        PG_USER["🗄️ PostgreSQL<br/><i>Users DB</i><br/>Profiles · KYC"]
        PG_ACC["🗄️ PostgreSQL<br/><i>Accounts DB</i><br/>Balances · Types"]
        PG_TXN["🗄️ PostgreSQL<br/><i>Transactions DB</i><br/>Transfers · History"]
        PG_PAY["🗄️ PostgreSQL<br/><i>Payments DB</i><br/>Bills · Schedules"]
        PG_LOAN["🗄️ PostgreSQL<br/><i>Loans DB</i><br/>Applications · Repayments"]
        MONGO["🗄️ MongoDB<br/><i>Notifications DB</i><br/>Alerts · Templates"]
        MONGO_AUDIT["🗄️ MongoDB<br/><i>Audit DB</i><br/>Logs · Events"]
        MONGO_FRAUD["🗄️ MongoDB<br/><i>Fraud DB</i><br/>Patterns · ML Models"]
        REDIS["⚡ Redis<br/><i>Cache Layer</i><br/>Sessions · Hot Data<br/>Rate Limiting"]
    end

    subgraph MESSAGING["📨 EVENT-DRIVEN MESSAGING LAYER"]
        KAFKA["📬 Apache Kafka<br/><i>Event Streaming Platform</i><br/>Async Communication<br/>Guaranteed Delivery"]
    end

    subgraph INFRA["🏗️ INFRASTRUCTURE LAYER"]
        DOCKER["🐳 Docker<br/><i>Containerization</i><br/>Service Isolation"]
        K8S["☸️ Kubernetes<br/><i>EKS / GKE</i><br/>Orchestration<br/>Auto-scaling<br/>Self-healing"]
        CICD["🔄 CI/CD Pipeline<br/><i>GitHub Actions</i><br/>Build · Test · Deploy"]
        TF["📐 Terraform<br/><i>Infrastructure as Code</i><br/>Reproducible · Versioned"]
    end

    subgraph OBSERVE["📊 OBSERVABILITY LAYER"]
        PROM["📈 Prometheus<br/><i>Metrics Collection</i><br/>CPU · Memory · Requests"]
        GRAF["📊 Grafana<br/><i>Dashboards</i><br/>Real-time Visualization"]
        ELK["📋 ELK Stack<br/><i>Centralized Logging</i><br/>Elasticsearch · Logstash<br/>Kibana"]
    end

    subgraph SECURITY["🔒 SECURITY INFRASTRUCTURE LAYER"]
        VAULT["🔑 HashiCorp Vault<br/><i>Secrets Management</i><br/>API Keys · DB Passwords<br/>Certificates"]
        IAM["🛂 IAM<br/><i>Role-Based Access</i><br/>Least Privilege<br/>Policy Management"]
        TLS["🔐 TLS 1.3 + mTLS<br/><i>Encryption Everywhere</i><br/>In Transit · At Rest"]
    end

    %% Client to Edge flow
    WEB --> CDN
    MOB --> CDN
    CDN --> WAF
    WAF --> DDOS
    DDOS --> LB

    %% Gateway to Services
    LB --> APIGW
    APIGW --> AUTH
    APIGW --> USERSVC
    APIGW --> ACCSVC
    APIGW --> TXNSVC
    APIGW --> PAYSVC
    APIGW --> LOANSVC
    APIGW --> ADMINSVC

    %% Services to Databases (Database-Per-Service)
    AUTH --> PG_AUTH
    USERSVC --> PG_USER
    ACCSVC --> PG_ACC
    TXNSVC --> PG_TXN
    PAYSVC --> PG_PAY
    LOANSVC --> PG_LOAN
    NOTIFSVC --> MONGO
    AUDITSVC --> MONGO_AUDIT
    FRAUDSVC --> MONGO_FRAUD

    %% Redis Cache connections
    AUTH --> REDIS
    TXNSVC --> REDIS
    ACCSVC --> REDIS
    APIGW --> REDIS

    %% Kafka Event Streaming
    TXNSVC --> KAFKA
    PAYSVC --> KAFKA
    ACCSVC --> KAFKA
    KAFKA --> FRAUDSVC
    KAFKA --> NOTIFSVC
    KAFKA --> AUDITSVC

    %% Layer Styling
    style CLIENTS fill:#3498db,stroke:#2980b9,color:#fff
    style EDGE fill:#e74c3c,stroke:#c0392b,color:#fff
    style GATEWAY fill:#f39c12,stroke:#e67e22,color:#fff
    style SERVICES fill:#2ecc71,stroke:#27ae60,color:#fff
    style DATA fill:#9b59b6,stroke:#8e44ad,color:#fff
    style MESSAGING fill:#1abc9c,stroke:#16a085,color:#fff
    style INFRA fill:#2496ed,stroke:#1a6fb5,color:#fff
    style OBSERVE fill:#00cec9,stroke:#00b894,color:#fff
    style SECURITY fill:#d63031,stroke:#c0392b,color:#fff
```

---

## 3.2 Layer-by-Layer Breakdown

| Layer | Purpose | Components | Why It's Essential |
|-------|---------|------------|--------------------|
| **👥 Client** | User interfaces for web and mobile | React/Next.js (Web), React Native (Mobile) | Users interact with the platform through responsive, accessible interfaces |
| **🛡️ Edge Security** | First line of defense — blocks threats before they reach the system | CloudFront CDN, AWS WAF, AWS Shield Advanced | DDoS attacks, bot traffic, and malicious requests are stopped at the perimeter |
| **🚪 API Gateway** | Single entry point — routes, authenticates, and rate-limits all traffic | Application Load Balancer, Kong/AWS API Gateway | Centralized security enforcement, request routing, and traffic management |
| **⚙️ Microservices** | Independent business logic — each service handles one domain | 10 isolated services (Auth, User, Account, Transaction, Payment, Loan, Fraud, Notification, Audit, Admin) | Fault isolation: if one service fails, the rest continue operating |
| **🗄️ Data** | Persistent storage — each service owns its database | PostgreSQL (6 DBs for financial data), MongoDB (3 DBs for logs/notifications/fraud), Redis (cache) | Database-per-service prevents a single DB compromise from affecting the entire system |
| **📨 Messaging** | Asynchronous inter-service communication | Apache Kafka (event streaming) | Services communicate without blocking; guaranteed delivery and event replay |
| **🏗️ Infrastructure** | Deployment, scaling, and orchestration | Docker, Kubernetes (EKS/GKE), GitHub Actions CI/CD, Terraform IaC | Consistent, automated, self-healing deployments |
| **📊 Observability** | Monitoring, alerting, and log management | Prometheus (metrics), Grafana (dashboards), ELK Stack (centralized logging) | Know when things go wrong and diagnose issues quickly |
| **🔒 Security Infra** | Secrets, access control, and encryption | HashiCorp Vault, IAM (RBAC), TLS 1.3 + mTLS | End-to-end protection at every layer |

---

## 3.3 Microservices Communication Patterns

Services communicate using two patterns, chosen based on whether immediate response is needed:

### Synchronous Communication (REST / gRPC)

```mermaid
graph LR
    subgraph SYNC["⚡ SYNCHRONOUS — Used when immediate response is required"]
        direction LR
        CLIENT2["📱 Client"] -->|"HTTPS Request"| GW2["🚪 API Gateway"]
        GW2 -->|"GET /api/v1/accounts/balance"| ACCSVC2["🏦 Account Service"]
        ACCSVC2 -->|"JSON Response<br/>{balance: 150000}"| GW2
        GW2 -->|"Response"| CLIENT2
    end
    
    style SYNC fill:#e8f4fd,stroke:#3498db
    style GW2 fill:#f39c12,stroke:#e67e22,color:#fff
    style ACCSVC2 fill:#2ecc71,stroke:#27ae60,color:#fff
```

**Used for:** Login authentication, balance inquiries, transaction initiation — operations where the user needs an immediate response.

### Asynchronous Communication (Event-Driven via Kafka)

```mermaid
graph LR
    subgraph ASYNC["📨 ASYNCHRONOUS — Used when response is not immediately needed"]
        direction LR
        TXNSVC2["💰 Transaction<br/>Service"] -->|"Publishes Event:<br/>TransactionCompleted"| KAFKA2["📬 Apache Kafka<br/><i>Event Bus</i>"]
        KAFKA2 -->|"Consumes"| FRAUD2["🤖 Fraud Detection<br/><i>Analyzes for anomalies</i>"]
        KAFKA2 -->|"Consumes"| NOTIF2["🔔 Notification<br/><i>Sends alert to user</i>"]
        KAFKA2 -->|"Consumes"| AUDIT2["📝 Audit Service<br/><i>Logs for compliance</i>"]
    end
    
    style ASYNC fill:#eafaf1,stroke:#2ecc71
    style KAFKA2 fill:#f39c12,stroke:#e67e22,color:#fff,stroke-width:2px
    style FRAUD2 fill:#9b59b6,stroke:#8e44ad,color:#fff
```

**Used for:** Post-transaction processing, fraud analysis, notification dispatch, audit logging — operations where the primary action is complete and downstream services can process independently.

### Communication Pattern Summary

| Pattern | Protocol | When to Use | Example | Latency |
|---------|----------|-------------|---------|---------|
| **Synchronous** | REST (HTTPS) / gRPC | Immediate response needed | User login → Auth verifies credentials | < 200ms |
| **Asynchronous** | Kafka events | Response not immediately needed | Transaction done → Notify user + Check fraud + Log audit | Eventually consistent |

---

## 3.4 Data Flow: Complete Transaction Lifecycle

This diagram shows how a single fund transfer flows through the entire AegisVault system, demonstrating the security and isolation at every step:

```mermaid
sequenceDiagram
    participant U as 👤 User
    participant GW as 🚪 API Gateway
    participant AUTH2 as 🔐 Auth Service
    participant TXN as 💰 Transaction Service
    participant ACC as 🏦 Account Service
    participant KF as 📬 Kafka
    participant FR as 🤖 Fraud Detection
    participant NT as 🔔 Notification
    participant AL as 📝 Audit Log

    U->>GW: 1. Initiate Transfer (HTTPS + JWT)
    GW->>AUTH2: 2. Validate JWT Token
    AUTH2-->>GW: 3. Token Valid ✅
    GW->>TXN: 4. Forward Transfer Request
    TXN->>ACC: 5. Check Balance (gRPC)
    ACC-->>TXN: 6. Balance Sufficient ✅
    TXN->>TXN: 7. Process Transfer (ACID)
    TXN->>ACC: 8. Debit Sender + Credit Receiver
    ACC-->>TXN: 9. Accounts Updated ✅
    TXN-->>GW: 10. Transfer Success Response
    GW-->>U: 11. Display Confirmation
    
    TXN->>KF: 12. Publish: TransactionCompleted
    KF->>FR: 13. Fraud Check (async)
    KF->>NT: 14. Send Notification (async)
    KF->>AL: 15. Log to Audit Trail (async)
    NT-->>U: 16. Push Notification 🔔
```

### Key Security Points in the Data Flow:

| Step | Security Measure |
|------|-----------------|
| Step 1 | All communication over HTTPS with TLS 1.3 |
| Step 2-3 | JWT token validation — no anonymous requests allowed |
| Step 4 | API Gateway rate-limits requests (prevents abuse) |
| Step 5-6 | Service-to-service call via gRPC with mTLS (mutual authentication) |
| Step 7 | ACID-compliant transaction in PostgreSQL (atomicity guaranteed) |
| Step 12 | Event published to Kafka with encryption at rest |
| Step 15 | Audit log entry is immutable — tamper-proof compliance |

---

## 3.5 Database-Per-Service Architecture

Each microservice owns its database — no shared databases. This is the **critical architectural pattern** that prevents the cascading failure that destroyed the monolithic legacy system:

```mermaid
graph TD
    subgraph DPS["🗄️ DATABASE-PER-SERVICE PATTERN"]
        AUTH3["🔐 Auth Service"] --> DB_AUTH["🗄️ PostgreSQL<br/><b>Auth DB</b><br/><i>Credentials, tokens,<br/>login history, MFA seeds</i>"]
        USER3["👤 User Service"] --> DB_USER["🗄️ PostgreSQL<br/><b>Users DB</b><br/><i>Profiles, KYC documents,<br/>preferences, addresses</i>"]
        ACC3["🏦 Account Service"] --> DB_ACC["🗄️ PostgreSQL<br/><b>Accounts DB</b><br/><i>Balances, account types,<br/>ownership records</i>"]
        TXN3["💰 Transaction Service"] --> DB_TXN["🗄️ PostgreSQL<br/><b>Transactions DB</b><br/><i>Transfer records, history,<br/>receipts, scheduled jobs</i>"]
        PAY3["💳 Payment Service"] --> DB_PAY["🗄️ PostgreSQL<br/><b>Payments DB</b><br/><i>Bill records, merchant data,<br/>recurring schedules</i>"]
        LOAN3["📄 Loan Service"] --> DB_LOAN["🗄️ PostgreSQL<br/><b>Loans DB</b><br/><i>Applications, repayments,<br/>interest calculations</i>"]
        NOTIF3["🔔 Notification Service"] --> DB_NOTIF["🗄️ MongoDB<br/><b>Notifications DB</b><br/><i>Alert templates, delivery<br/>records, user preferences</i>"]
        AUDIT3["📝 Audit Service"] --> DB_AUDIT["🗄️ MongoDB<br/><b>Audit DB</b><br/><i>Immutable event logs,<br/>compliance records</i>"]
        FRAUD3["🤖 Fraud Service"] --> DB_FRAUD["🗄️ MongoDB<br/><b>Fraud DB</b><br/><i>ML models, behavioral<br/>patterns, flagged activities</i>"]
    end
    
    style DPS fill:#f5f5f5,stroke:#95a5a6
    style DB_AUTH fill:#336791,stroke:#1a3d5c,color:#fff
    style DB_USER fill:#336791,stroke:#1a3d5c,color:#fff
    style DB_ACC fill:#336791,stroke:#1a3d5c,color:#fff
    style DB_TXN fill:#336791,stroke:#1a3d5c,color:#fff
    style DB_PAY fill:#336791,stroke:#1a3d5c,color:#fff
    style DB_LOAN fill:#336791,stroke:#1a3d5c,color:#fff
    style DB_NOTIF fill:#4db33d,stroke:#3c8c2e,color:#fff
    style DB_AUDIT fill:#4db33d,stroke:#3c8c2e,color:#fff
    style DB_FRAUD fill:#4db33d,stroke:#3c8c2e,color:#fff
```

### Why Two Database Types?

| Database | Type | Used For | Why |
|----------|------|----------|-----|
| **PostgreSQL** | SQL (Relational) | Financial data — accounts, transactions, loans, payments, auth | **ACID compliance is mandatory** for banking. Every financial operation must be atomic, consistent, isolated, and durable. A transfer must either fully complete or not happen at all. |
| **MongoDB** | NoSQL (Document) | Non-financial data — logs, notifications, fraud patterns, ML models | Flexible schema handles varied log structures and rapidly evolving ML model data. Horizontal scaling for high-volume write operations (every action generates logs). |
| **Redis** | In-Memory Cache | Sessions, frequently accessed data, rate limiting counters | Sub-millisecond read times for session validation and hot data. Reduces database load by 60-80% for read-heavy operations. |

---

## 3.6 Disaster Recovery Architecture

```mermaid
graph TB
    subgraph PRIMARY["🟢 PRIMARY REGION — AWS ap-south-1"]
        P_K8S["☸️ Kubernetes Cluster<br/><i>10 Microservices Running</i>"]
        P_DB["🗄️ PostgreSQL Cluster<br/><i>Primary Databases</i>"]
        P_KAFKA["📬 Kafka Cluster<br/><i>Event Streaming</i>"]
        P_REDIS["⚡ Redis Cluster<br/><i>Cache + Sessions</i>"]
    end
    
    subgraph DR["🔵 DR REGION — AWS ap-southeast-1"]
        DR_K8S["☸️ Kubernetes Cluster<br/><i>Hot Standby</i>"]
        DR_DB["🗄️ PostgreSQL Cluster<br/><i>Read Replicas</i>"]
        DR_KAFKA["📬 Kafka Cluster<br/><i>Mirror Maker</i>"]
        DR_REDIS["⚡ Redis Cluster<br/><i>Replicated</i>"]
    end
    
    subgraph BACKUP["💾 BACKUP — Cross-Region S3"]
        S3["💾 S3 Buckets<br/><i>Encrypted Snapshots</i><br/>Every 6 hours<br/>90-day retention"]
        WAL_ARCH["📋 WAL Archives<br/><i>Continuous streaming</i><br/>Point-in-time recovery"]
    end
    
    R53["🌐 Route 53<br/><i>DNS Failover</i><br/>Health Checks"]
    
    R53 -->|"Normal traffic"| PRIMARY
    R53 -..->|"Failover trigger<br/>RTO < 30 min"| DR
    
    P_DB -->|"Synchronous<br/>replication"| DR_DB
    P_KAFKA -->|"Mirror Maker<br/>replication"| DR_KAFKA
    P_DB -->|"Every 6 hours"| S3
    P_DB -->|"Continuous"| WAL_ARCH
    
    style PRIMARY fill:#2ecc71,stroke:#27ae60,color:#fff
    style DR fill:#3498db,stroke:#2980b9,color:#fff
    style BACKUP fill:#f39c12,stroke:#e67e22,color:#fff
    style R53 fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:2px
```

| Metric | Target | Implementation |
|--------|--------|---------------|
| **RPO** | < 1 hour | Continuous WAL streaming + 6-hourly snapshots |
| **RTO** | < 30 minutes | Hot standby region + Route 53 DNS failover |
| **Uptime SLA** | 99.99% | Multi-region with automated health checks |
| **Backup Retention** | 90 days | Encrypted S3 snapshots with lifecycle policies |

---

## 3.7 CI/CD Pipeline

All code changes flow through an automated pipeline that ensures security and quality at every stage:

```mermaid
graph LR
    DEV["💻 Developer<br/>Pushes Code"] --> BUILD["🔨 BUILD<br/><i>Compile &<br/>Package</i>"]
    BUILD --> TEST["🧪 TEST<br/><i>Unit Tests<br/>Integration Tests<br/>Coverage > 80%</i>"]
    TEST --> SCAN["🔍 SECURITY<br/>SCAN<br/><i>SAST (SonarQube)<br/>Dependency Check<br/>Container Scan</i>"]
    SCAN --> STAGE["🎭 DEPLOY TO<br/>STAGING<br/><i>Full system test<br/>in staging env</i>"]
    STAGE --> APPROVE["✅ APPROVAL<br/><i>Manual review<br/>for production</i>"]
    APPROVE --> PROD["🚀 DEPLOY TO<br/>PRODUCTION<br/><i>Rolling update<br/>via Kubernetes</i>"]
    PROD --> MONITOR["📊 MONITOR<br/><i>Prometheus<br/>Grafana<br/>Auto-rollback</i>"]
    
    style DEV fill:#3498db,stroke:#2980b9,color:#fff
    style TEST fill:#f39c12,stroke:#e67e22,color:#fff
    style SCAN fill:#e74c3c,stroke:#c0392b,color:#fff
    style PROD fill:#2ecc71,stroke:#27ae60,color:#fff,stroke-width:2px
    style MONITOR fill:#9b59b6,stroke:#8e44ad,color:#fff
```

---

## 3.8 How This Architecture Prevents Future Cascading Failures

```mermaid
graph LR
    subgraph OLD["❌ OLD MONOLITHIC SYSTEM"]
        direction TB
        OM["🦠 Malware enters"] --> OC["💔 Core compromised"]
        OC --> OA["💔 ALL services down"]
        OA --> OF["💀 Total system failure"]
    end
    
    subgraph NEW["✅ AEGISVAULT MICROSERVICES"]
        direction TB
        NM["🦠 Malware targets<br/>one service"] --> NC["⚠️ One container<br/>compromised"]
        NC --> NI["🛡️ Breach CONTAINED<br/>to that service only"]
        NI --> NR["🔄 Container destroyed<br/>& replaced automatically"]
        NR --> NO["✅ All other services<br/>continue operating"]
    end
    
    style OLD fill:#ffcccc,stroke:#e74c3c
    style NEW fill:#ccffcc,stroke:#27ae60
    style OF fill:#c0392b,stroke:#922b21,color:#fff,stroke-width:2px
    style NO fill:#27ae60,stroke:#1e8449,color:#fff,stroke-width:2px
```

| Failure Scenario | Old Monolithic System | AegisVault (Microservices) |
|-----------------|----------------------|---------------------------|
| **Auth service breached** | Entire system compromised (shared database) | Only auth service affected; other services continue with cached sessions |
| **Database corrupted** | ALL data lost (single shared DB) | Only the affected service's data impacted; 8 other databases unaffected |
| **Network partition** | Complete system outage | Affected services degrade gracefully; circuit breakers prevent cascade |
| **DDoS attack** | All services overwhelmed | WAF + CDN absorb at edge; auto-scaling handles legitimate traffic spikes |
| **Region outage** | Total downtime until manual recovery | Automatic failover to DR region in < 30 minutes |
