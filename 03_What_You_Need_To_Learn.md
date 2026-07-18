# 📚 What You Need To Learn for Duothan 6.0

This document outlines **every skill and concept** you need to learn to compete effectively across all 3 phases of Duothan 6.0.

---

## 🎯 Learning Roadmap Overview

```mermaid
graph TD
    START["🎯 YOUR LEARNING<br/>JOURNEY"] --> P1["🔍 Phase 01 — RECON<br/><b>Learn NOW</b><br/><i>Planning & Design Skills</i>"]
    START --> P2["🔨 Phase 02 — REBUILD<br/><b>Learn Next</b><br/><i>Development Skills</i>"]
    START --> P3["🛡️ Phase 03 — FORTIFY<br/><b>Learn Later</b><br/><i>DevOps & Cloud Skills</i>"]
    
    P1 --> S1["Microservices Architecture"]
    P1 --> S2["System Design Fundamentals"]
    P1 --> S3["UX/UI & Wireframing"]
    P1 --> S4["Requirements Engineering"]
    P1 --> S5["Technical Documentation"]
    
    P2 --> S6["Backend Development"]
    P2 --> S7["Frontend Development"]
    P2 --> S8["Database Management"]
    P2 --> S9["Security Practices"]
    
    P3 --> S10["Docker & Containers"]
    P3 --> S11["Kubernetes"]
    P3 --> S12["Cloud Platforms"]
    P3 --> S13["CI/CD Pipelines"]
    P3 --> S14["IaC (Terraform)"]
    P3 --> S15["Monitoring & Logging"]
    P3 --> S16["Disaster Recovery"]
    
    style START fill:#2c3e50,stroke:#1a252f,color:#fff,stroke-width:3px
    style P1 fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:3px
    style P2 fill:#f39c12,stroke:#e67e22,color:#fff,stroke-width:2px
    style P3 fill:#2ecc71,stroke:#27ae60,color:#fff,stroke-width:2px
```

---

## 🔍 Phase 01 — RECON (Planning & Design) — What to Learn NOW

### 1. Software Architecture & System Design

#### Microservices Architecture (CRITICAL ⭐)

```mermaid
graph TD
    MICRO["⚙️ MICROSERVICES<br/>ARCHITECTURE"] --> WHAT["🤔 WHAT is it?<br/><i>Breaking a large app<br/>into small, independent<br/>services</i>"]
    MICRO --> WHY["💡 WHY use it?<br/><i>Competition REQUIRES<br/>independent services</i>"]
    MICRO --> PATTERNS["🧩 KEY PATTERNS<br/>to Learn"]
    
    PATTERNS --> P1["API Gateway<br/><i>Single entry point<br/>for all requests</i>"]
    PATTERNS --> P2["Database-Per-Service<br/><i>Each service owns<br/>its own data</i>"]
    PATTERNS --> P3["Service Communication<br/><i>REST, gRPC,<br/>Message Queues</i>"]
    PATTERNS --> P4["Service Discovery<br/><i>Services finding<br/>each other</i>"]
    PATTERNS --> P5["Circuit Breaker<br/><i>Preventing cascading<br/>failures</i>"]
    PATTERNS --> P6["Event Sourcing<br/><i>Tracking all changes<br/>as events</i>"]
    
    style MICRO fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:3px
    style WHY fill:#f39c12,stroke:#e67e22,color:#fff
    style PATTERNS fill:#3498db,stroke:#2980b9,color:#fff
```

- **What:** Breaking a large application into small, independent services
- **Why:** The competition REQUIRES "independent services" architecture
- **Learn:**
  - What are microservices and why use them
  - Microservices vs Monolithic architecture
  - Database-per-service pattern
  - Inter-service communication (REST, gRPC, message queues)
  - API Gateway pattern
  - Service discovery
  - Circuit breaker pattern

#### Monolithic vs Microservices Comparison

```mermaid
graph LR
    subgraph MONO["❌ MONOLITHIC"]
        direction TB
        MA["All Code<br/>Together"]
        MB["Single Database"]
        MC["Single Deployment"]
        MA --- MB --- MC
    end
    
    subgraph MICRO2["✅ MICROSERVICES"]
        direction TB
        S1A["Service A"] ~~~ S2A["Service B"]
        S2A ~~~ S3A["Service C"]
        DB1A["DB A"] ~~~ DB2A["DB B"] ~~~ DB3A["DB C"]
        S1A --- DB1A
        S2A --- DB2A
        S3A --- DB3A
    end
    
    MONO -->|"One failure =<br/>Everything crashes"| FAIL["💀"]
    MICRO2 -->|"One failure =<br/>Others survive"| OK["✅"]
    
    style MONO fill:#ffcccc,stroke:#e74c3c
    style MICRO2 fill:#ccffcc,stroke:#27ae60
    style FAIL fill:#e74c3c,stroke:#c0392b,color:#fff
    style OK fill:#2ecc71,stroke:#27ae60,color:#fff
```

#### Resources to study:
- 🎥 YouTube: "Microservices Explained" by TechWorld with Nana
- 🎥 YouTube: "Microservices Architecture" by freeCodeCamp
- 📖 Martin Fowler's Microservices guide (martinfowler.com)
- 📖 Microservices.io (patterns and best practices)

---

### 2. System Design Fundamentals

#### Key Concepts Explained

```mermaid
mindmap
  root["🏗️ SYSTEM DESIGN<br/>FUNDAMENTALS"]
    Load Balancing
      Distributes traffic across servers
      Prevents overload on single server
      Types: Round-robin, Weighted, Least-connections
    Caching
      Redis for in-memory speed
      CDN for static content delivery
      Reduces database load dramatically
    Message Queues
      Kafka for high-throughput streaming
      RabbitMQ for task queuing
      Enables async processing
    Database Design
      SQL for ACID compliance (banking data)
      NoSQL for flexible schemas (logs)
      When to use which
    CAP Theorem
      Consistency vs Availability vs Partition Tolerance
      For banking: Choose CP (Consistency + Partition)
      Cannot have all three in distributed systems
    ACID Properties
      Atomicity: All or nothing
      Consistency: Valid state to valid state
      Isolation: Concurrent safety
      Durability: Data survives crashes
    API Design
      RESTful principles
      API versioning
      Rate limiting and throttling
```

#### How Data Flows Through a System

```mermaid
graph LR
    USER["👤 User"] --> CDN["📡 CDN<br/><i>Cached static<br/>content</i>"]
    CDN --> LB["⚖️ Load<br/>Balancer"]
    LB --> API["🚪 API<br/>Gateway"]
    API --> SVC["⚙️ Service"]
    SVC --> CACHE["⚡ Cache<br/><i>Redis</i>"]
    CACHE -->|"Cache hit"| SVC
    SVC -->|"Cache miss"| DB["🗄️ Database"]
    SVC --> MQ["📬 Message<br/>Queue"]
    MQ --> SVC2["⚙️ Other<br/>Service"]
    
    style USER fill:#3498db,stroke:#2980b9,color:#fff
    style CACHE fill:#e74c3c,stroke:#c0392b,color:#fff
    style DB fill:#9b59b6,stroke:#8e44ad,color:#fff
    style MQ fill:#f39c12,stroke:#e67e22,color:#fff
```

#### Resources:
- 🎥 YouTube: "System Design for Beginners" by Gaurav Sen
- 🎥 YouTube: "System Design Interview" by ByteByteGo
- 📖 system-design-primer on GitHub

---

### 3. UX/UI Design for Banking Applications

#### What to learn:

```mermaid
graph TD
    UXUI["🎨 UX/UI DESIGN<br/>FOR BANKING"] --> WIRE["📐 Wireframing<br/><i>Low → Mid → High<br/>Fidelity levels</i>"]
    UXUI --> FLOW["🔄 User Flow Design<br/><i>Login → Dashboard<br/>→ Transfer → Confirm</i>"]
    UXUI --> BEST["✨ Banking UX<br/>Best Practices<br/><i>Trust, clarity,<br/>simplicity</i>"]
    UXUI --> TOOL["🛠️ Figma<br/><i>Free tool for<br/>wireframing</i>"]
    UXUI --> COLOR["🎨 Color Psychology<br/><i>Blues = trust<br/>Greens = money</i>"]
    UXUI --> A11Y["♿ Accessibility<br/><i>WCAG 2.1 standards</i>"]
    
    style UXUI fill:#9b59b6,stroke:#8e44ad,color:#fff,stroke-width:3px
    style WIRE fill:#a29bfe,stroke:#6c5ce7,color:#333
    style FLOW fill:#a29bfe,stroke:#6c5ce7,color:#333
    style BEST fill:#a29bfe,stroke:#6c5ce7,color:#333
    style TOOL fill:#a29bfe,stroke:#6c5ce7,color:#333
    style COLOR fill:#a29bfe,stroke:#6c5ce7,color:#333
    style A11Y fill:#a29bfe,stroke:#6c5ce7,color:#333
```

#### Banking App Color Guide

```mermaid
graph LR
    COLORS["🎨 BANKING COLORS"] --> BLUE["🔵 Blues<br/><i>Trust, Security,<br/>Professionalism</i>"]
    COLORS --> GREEN["🟢 Greens<br/><i>Money, Growth,<br/>Success</i>"]
    COLORS --> WHITE["⚪ Whites<br/><i>Cleanliness,<br/>Simplicity</i>"]
    COLORS --> DARK["⚫ Dark Tones<br/><i>Premium feel,<br/>Sophistication</i>"]
    
    BLUE --> EX1["Primary buttons,<br/>Navigation, Headers"]
    GREEN --> EX2["Success states,<br/>Positive amounts"]
    WHITE --> EX3["Backgrounds,<br/>Card surfaces"]
    DARK --> EX4["Text, Contrast,<br/>Dark mode option"]
    
    style BLUE fill:#3498db,stroke:#2980b9,color:#fff
    style GREEN fill:#2ecc71,stroke:#27ae60,color:#fff
    style WHITE fill:#ecf0f1,stroke:#bdc3c7,color:#333
    style DARK fill:#2c3e50,stroke:#1a252f,color:#fff
```

#### Resources:
- 🎥 YouTube: "Figma Tutorial for Beginners" by DesignCourse
- 📖 Figma.com free tutorials
- 📖 Study existing banking apps: Revolut, Wise, Monzo for inspiration

---

### 4. Requirements Engineering

#### Functional vs Non-Functional Requirements

```mermaid
graph TD
    REQ["📋 REQUIREMENTS"] --> FR["📝 FUNCTIONAL<br/><i>WHAT the system DOES</i>"]
    REQ --> NFR["⚙️ NON-FUNCTIONAL<br/><i>HOW the system PERFORMS</i>"]
    
    FR --> FR1["'The system SHALL<br/>allow users to login'"]
    FR --> FR2["'Users CAN transfer<br/>money to other accounts'"]
    FR --> FR3["'The system MUST<br/>send notifications'"]
    
    NFR --> NFR1["'Response time<br/>< 200ms'"]
    NFR --> NFR2["'99.99% uptime<br/>availability'"]
    NFR --> NFR3["'AES-256 encryption<br/>for data at rest'"]
    
    style REQ fill:#2c3e50,stroke:#1a252f,color:#fff,stroke-width:3px
    style FR fill:#3498db,stroke:#2980b9,color:#fff,stroke-width:2px
    style NFR fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:2px
```

#### What to learn:
- How to write Functional Requirements (what the system DOES)
- How to write Non-Functional Requirements (how the system PERFORMS)
- User stories format ("As a ___, I want to ___, so that ___")
- Acceptance criteria
- Requirements prioritization (MoSCoW method: Must, Should, Could, Won't)

#### MoSCoW Prioritization

```mermaid
graph TD
    MOSCOW["📊 MoSCoW METHOD"] --> MUST["🔴 MUST Have<br/><i>Core features without which<br/>the system doesn't work</i><br/><b>User Auth, Transactions,<br/>Account Management</b>"]
    MOSCOW --> SHOULD["🟡 SHOULD Have<br/><i>Important but not critical<br/>for first release</i><br/><b>Transaction History Filters,<br/>Multi-language</b>"]
    MOSCOW --> COULD["🟢 COULD Have<br/><i>Nice to have if<br/>time permits</i><br/><b>QR Payments, Card<br/>Management</b>"]
    MOSCOW --> WONT["⚪ WON'T Have<br/><i>Out of scope<br/>for now</i><br/><b>Cryptocurrency,<br/>Stock Trading</b>"]
    
    style MOSCOW fill:#2c3e50,stroke:#1a252f,color:#fff,stroke-width:3px
    style MUST fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:2px
    style SHOULD fill:#f39c12,stroke:#e67e22,color:#fff
    style COULD fill:#2ecc71,stroke:#27ae60,color:#fff
    style WONT fill:#95a5a6,stroke:#7f8c8d,color:#fff
```

---

### 5. Documentation & Technical Writing

#### What to learn:
- How to write clear technical documentation
- How to create professional system architecture diagrams
- Tools: Draw.io, Lucidchart, Mermaid diagrams
- How to format a professional Word document

```mermaid
graph LR
    DOCS["📄 DOCUMENTATION<br/>SKILLS"] --> CLEAR["✍️ Clear Writing<br/><i>Concise, specific,<br/>no ambiguity</i>"]
    DOCS --> VISUAL["📊 Visual Diagrams<br/><i>Architecture, flow,<br/>sequence diagrams</i>"]
    DOCS --> FORMAT["📐 Professional<br/>Formatting<br/><i>Consistent headings,<br/>numbered sections</i>"]
    DOCS --> TOOLS["🛠️ Tools<br/><i>Draw.io, Figma,<br/>Mermaid, Word</i>"]
    
    style DOCS fill:#9b59b6,stroke:#8e44ad,color:#fff,stroke-width:3px
```

---

## 🔨 Phase 02 — REBUILD (Development) — What to Learn Next

### 6. Backend Development

#### Pick ONE of these stacks:

```mermaid
graph TD
    BACKEND["⚙️ CHOOSE YOUR<br/>BACKEND STACK"] --> OPT_A["🟢 Option A<br/><b>Node.js + Express</b><br/><i>JavaScript/TypeScript</i><br/>Fast dev, large ecosystem"]
    BACKEND --> OPT_B["🔵 Option B<br/><b>Spring Boot</b><br/><i>Java</i><br/>Enterprise-grade, banking standard"]
    BACKEND --> OPT_C["🟡 Option C<br/><b>Django / FastAPI</b><br/><i>Python</i><br/>Rapid prototyping, AI integration"]
    
    style BACKEND fill:#2c3e50,stroke:#1a252f,color:#fff,stroke-width:3px
    style OPT_A fill:#68a063,stroke:#3c6e35,color:#fff,stroke-width:2px
    style OPT_B fill:#3498db,stroke:#2980b9,color:#fff
    style OPT_C fill:#f39c12,stroke:#e67e22,color:#fff
```

| Option | Language | Framework | Best For |
|--------|----------|-----------|----------|
| **A** | JavaScript/TypeScript | Node.js + Express | Fast development, large ecosystem |
| **B** | Java | Spring Boot | Enterprise-grade, banking standard |
| **C** | Python | Django / FastAPI | Rapid prototyping, AI integration |

#### Key backend skills:

```mermaid
mindmap
  root["⚙️ BACKEND SKILLS"]
    API Development
      RESTful API design
      API versioning
      Request/Response patterns
      Status codes
    Authentication
      JWT tokens
      OAuth 2.0 flow
      Session management
      Role-based access
    Data Handling
      Input validation
      Sanitization
      ORM (Prisma/Hibernate)
      Database migrations
    Security
      Rate limiting
      CORS configuration
      SQL injection prevention
      XSS/CSRF protection
    Error Handling
      Structured error responses
      Logging frameworks
      Exception management
      Graceful degradation
```

---

### 7. Frontend Development

#### Pick ONE:

```mermaid
graph TD
    FRONTEND["🎨 CHOOSE YOUR<br/>FRONTEND FRAMEWORK"] --> FE_A["⚛️ Option A<br/><b>React.js / Next.js</b><br/><i>Most popular, component-based</i>"]
    FRONTEND --> FE_B["💚 Option B<br/><b>Vue.js / Nuxt.js</b><br/><i>Easier learning curve</i>"]
    FRONTEND --> FE_C["🔴 Option C<br/><b>Angular</b><br/><i>Enterprise-grade, TypeScript-first</i>"]
    
    style FRONTEND fill:#2c3e50,stroke:#1a252f,color:#fff,stroke-width:3px
    style FE_A fill:#61dafb,stroke:#21a1c4,color:#333,stroke-width:2px
    style FE_B fill:#42b883,stroke:#2e8b57,color:#fff
    style FE_C fill:#dd0031,stroke:#c3002f,color:#fff
```

| Option | Framework | Best For |
|--------|-----------|----------|
| **A** | React.js / Next.js | Most popular, component-based |
| **B** | Vue.js / Nuxt.js | Easier learning curve |
| **C** | Angular | Enterprise-grade, TypeScript-first |

#### Key frontend skills:
- Component-based architecture
- State management (Redux, Zustand, Pinia)
- Responsive design (CSS Grid, Flexbox)
- Form handling and validation
- API integration (Axios, Fetch)
- Authentication flow (login, logout, session management)

---

### 8. Database Management

#### Database Selection Guide

```mermaid
graph TD
    DBCHOICE["🗄️ WHICH DATABASE<br/>FOR WHAT?"] --> SQL["🔵 PostgreSQL (SQL)<br/><b>For Financial Data</b>"]
    DBCHOICE --> NOSQL["🟢 MongoDB (NoSQL)<br/><b>For Flexible Data</b>"]
    DBCHOICE --> CACHE["🔴 Redis (Cache)<br/><b>For Speed</b>"]
    
    SQL --> SQL1["💰 Transactions & balances"]
    SQL --> SQL2["👤 User profiles & KYC"]
    SQL --> SQL3["🔐 Authentication records"]
    SQL --> SQL4["📄 Loan data"]
    
    NOSQL --> NS1["📋 Activity logs"]
    NOSQL --> NS2["🔔 Notifications"]
    NOSQL --> NS3["🤖 Fraud patterns"]
    NOSQL --> NS4["📊 Analytics data"]
    
    CACHE --> C1["⚡ Session data"]
    CACHE --> C2["⚡ Hot/frequent queries"]
    CACHE --> C3["⚡ Rate limiting counters"]
    CACHE --> C4["⚡ Real-time leaderboards"]
    
    style DBCHOICE fill:#2c3e50,stroke:#1a252f,color:#fff,stroke-width:3px
    style SQL fill:#336791,stroke:#1a3d5c,color:#fff,stroke-width:2px
    style NOSQL fill:#4db33d,stroke:#3c8c2e,color:#fff
    style CACHE fill:#d63031,stroke:#c0392b,color:#fff
```

#### Key concepts:
- Database schema design
- Indexing for performance
- Transactions and ACID compliance
- Database migrations
- Connection pooling

---

### 9. Security Practices (CRITICAL ⭐)

```mermaid
graph TD
    SECURITY["🔒 SECURITY<br/>PRACTICES"] --> AUTH2["🔐 Authentication<br/><i>JWT, OAuth 2.0,<br/>MFA implementation</i>"]
    SECURITY --> ENCRYPT["🔑 Encryption<br/><i>TLS/SSL, AES-256,<br/>bcrypt for passwords</i>"]
    SECURITY --> INPUT["🛡️ Input Security<br/><i>SQL injection, XSS,<br/>CSRF protection</i>"]
    SECURITY --> API2["🚪 API Security<br/><i>Rate limiting, API keys,<br/>CORS policies</i>"]
    SECURITY --> OWASP["📋 OWASP Top 10<br/><i>Most common web<br/>vulnerabilities</i>"]
    SECURITY --> PCI["🏦 PCI DSS<br/><i>Payment Card Industry<br/>security standards</i>"]
    
    style SECURITY fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:3px
    style AUTH2 fill:#fab1a0,stroke:#e17055,color:#333
    style ENCRYPT fill:#fab1a0,stroke:#e17055,color:#333
    style INPUT fill:#fab1a0,stroke:#e17055,color:#333
    style API2 fill:#fab1a0,stroke:#e17055,color:#333
    style OWASP fill:#fab1a0,stroke:#e17055,color:#333
    style PCI fill:#fab1a0,stroke:#e17055,color:#333
```

#### OWASP Top 10 (Know These!)

```mermaid
graph TD
    OW["🛡️ OWASP TOP 10<br/><i>Most Critical Web<br/>Security Risks</i>"] --> O1["1. Broken Access Control"]
    OW --> O2["2. Cryptographic Failures"]
    OW --> O3["3. Injection (SQL, XSS)"]
    OW --> O4["4. Insecure Design"]
    OW --> O5["5. Security Misconfiguration"]
    OW --> O6["6. Vulnerable Components"]
    OW --> O7["7. Auth Failures"]
    OW --> O8["8. Software Integrity Failures"]
    OW --> O9["9. Logging & Monitoring Gaps"]
    OW --> O10["10. Server-Side Request Forgery"]
    
    style OW fill:#2c3e50,stroke:#1a252f,color:#fff,stroke-width:3px
    style O1 fill:#e74c3c,stroke:#c0392b,color:#fff
    style O2 fill:#e74c3c,stroke:#c0392b,color:#fff
    style O3 fill:#e74c3c,stroke:#c0392b,color:#fff
```

#### Resources:
- 📖 OWASP.org — Top 10 Web Security Risks
- 🎥 YouTube: "Web Security" by Computerphile
- 📖 PCI DSS Quick Reference Guide

---

## 🛡️ Phase 03 — FORTIFY (Deployment & Defense) — What to Learn

### 10. Docker & Containerization (CRITICAL ⭐)

```mermaid
graph TD
    DOCKER["🐳 DOCKER<br/>CONTAINERIZATION"] --> WHAT2["🤔 What?<br/><i>Package your app with<br/>all dependencies into<br/>a portable container</i>"]
    DOCKER --> WHY2["💡 Why?<br/><i>Consistent environments<br/>across dev, test, prod<br/>'Works on my machine' solved</i>"]
    DOCKER --> LEARN["📚 Learn"]
    
    LEARN --> L1["📄 Dockerfiles<br/><i>Define how to build<br/>your container image</i>"]
    LEARN --> L2["🔧 Docker Compose<br/><i>Run multi-container<br/>apps together</i>"]
    LEARN --> L3["🌐 Networking<br/><i>Containers talking<br/>to each other</i>"]
    LEARN --> L4["🔑 Secrets<br/><i>Environment variables<br/>and sensitive data</i>"]
    
    style DOCKER fill:#2496ed,stroke:#1a6fb5,color:#fff,stroke-width:3px
    style WHAT2 fill:#74b9ff,stroke:#0984e3,color:#333
    style WHY2 fill:#74b9ff,stroke:#0984e3,color:#333
```

#### Container vs Virtual Machine

```mermaid
graph LR
    subgraph VM["🖥️ Virtual Machines"]
        direction TB
        VM_APP1["App 1"] --> VM_OS1["Guest OS 1"]
        VM_APP2["App 2"] --> VM_OS2["Guest OS 2"]
        VM_OS1 --> VM_HV["Hypervisor"]
        VM_OS2 --> VM_HV
        VM_HV --> VM_HOST["Host OS"]
    end
    
    subgraph CONT["🐳 Containers"]
        direction TB
        C_APP1["App 1"] --> C_RT["Container Runtime"]
        C_APP2["App 2"] --> C_RT
        C_APP3["App 3"] --> C_RT
        C_RT --> C_HOST["Host OS"]
    end
    
    style VM fill:#ffcccc,stroke:#e74c3c
    style CONT fill:#ccffcc,stroke:#27ae60
```

#### Resources:
- 🎥 YouTube: "Docker Tutorial for Beginners" by TechWorld with Nana
- 🎥 YouTube: "Docker Crash Course" by Traversy Media
- 📖 Docker official documentation (docs.docker.com)

---

### 11. Kubernetes Basics

```mermaid
graph TD
    K8S2["☸️ KUBERNETES"] --> PODS["📦 Pods<br/><i>Smallest deployable<br/>unit, runs containers</i>"]
    K8S2 --> SVC2["🔌 Services<br/><i>Networking, load<br/>balancing to pods</i>"]
    K8S2 --> DEPLOY2["🚀 Deployments<br/><i>Manage replicas,<br/>rolling updates</i>"]
    K8S2 --> INGRESS["🚪 Ingress<br/><i>External access,<br/>URL routing</i>"]
    K8S2 --> CONFIG["⚙️ ConfigMaps<br/>& Secrets<br/><i>Configuration &<br/>sensitive data</i>"]
    K8S2 --> SCALE["📈 Auto-Scaling<br/><i>Scale pods based<br/>on CPU/memory</i>"]
    
    style K8S2 fill:#326ce5,stroke:#2457b2,color:#fff,stroke-width:3px
```

#### What to learn:
- Pods, Services, Deployments, Ingress
- Scaling applications (HPA - Horizontal Pod Autoscaler)
- ConfigMaps and Secrets
- Managed Kubernetes: EKS (AWS), GKE (GCP), AKS (Azure)
- Helm charts basics

#### Resources:
- 🎥 YouTube: "Kubernetes Tutorial for Beginners" by TechWorld with Nana
- 📖 Kubernetes.io interactive tutorials

---

### 12. Cloud Platforms (CRITICAL ⭐)

#### Pick ONE and learn it well:

```mermaid
graph TD
    CLOUD3["☁️ CHOOSE YOUR<br/>CLOUD PLATFORM"] --> AWS2["🟠 AWS<br/><i>Largest ecosystem<br/>Most services</i>"]
    CLOUD3 --> GCP2["🔵 GCP<br/><i>Great for AI/ML<br/>Simple pricing</i>"]
    CLOUD3 --> AZURE2["🟣 Azure<br/><i>Enterprise-friendly<br/>Microsoft integration</i>"]
    
    AWS2 --> A_SERVICES["EKS · RDS · S3<br/>Lambda · CloudFront · SQS"]
    GCP2 --> G_SERVICES["GKE · Cloud SQL · Cloud Storage<br/>Cloud Functions · Cloud Run"]
    AZURE2 --> AZ_SERVICES["AKS · Azure SQL · Blob Storage<br/>Azure Functions · Cosmos DB"]
    
    style CLOUD3 fill:#2c3e50,stroke:#1a252f,color:#fff,stroke-width:3px
    style AWS2 fill:#ff9900,stroke:#cc7a00,color:#333,stroke-width:2px
    style GCP2 fill:#4285f4,stroke:#3367d6,color:#fff
    style AZURE2 fill:#0078d4,stroke:#005a9e,color:#fff
```

| Cloud | Managed K8s | Database | Storage | Other |
|-------|-------------|----------|---------|-------|
| **AWS** | EKS | RDS, DynamoDB | S3 | Lambda, CloudFront, SQS |
| **GCP** | GKE | Cloud SQL, Firestore | Cloud Storage | Cloud Functions, Cloud Run |
| **Azure** | AKS | Azure SQL, Cosmos DB | Blob Storage | Azure Functions |

#### Key cloud skills:
- Setting up cloud accounts and billing alerts
- Virtual networks (VPC/VNet)
- Managed databases
- Container registries (ECR, GCR, ACR)
- Load balancers
- IAM (Identity and Access Management)
- Cloud monitoring services

#### Resources:
- 📖 AWS Free Tier tutorials (aws.amazon.com/free)
- 📖 GCP free tier (cloud.google.com/free)
- 🎥 YouTube: "AWS Tutorial for Beginners" by freeCodeCamp

---

### 13. CI/CD Pipelines

```mermaid
graph LR
    CODE["💻 Code Push"] --> BUILD["🔨 Build<br/><i>Compile &<br/>package</i>"]
    BUILD --> TEST["🧪 Test<br/><i>Unit & Integration<br/>tests</i>"]
    TEST --> SCAN["🔍 Security<br/>Scan<br/><i>Vulnerability<br/>check</i>"]
    SCAN --> STAGE["🎭 Deploy to<br/>Staging<br/><i>Test environment</i>"]
    STAGE --> APPROVE["✅ Approval<br/><i>Manual or<br/>automated</i>"]
    APPROVE --> PROD["🚀 Deploy to<br/>Production<br/><i>Live environment</i>"]
    
    style CODE fill:#3498db,stroke:#2980b9,color:#fff
    style TEST fill:#f39c12,stroke:#e67e22,color:#fff
    style SCAN fill:#e74c3c,stroke:#c0392b,color:#fff
    style PROD fill:#2ecc71,stroke:#27ae60,color:#fff,stroke-width:2px
```

#### What to learn:
- GitHub Actions (recommended — free and simple)
- Building automated pipelines: Build → Test → Deploy
- Automated testing integration
- Deployment strategies (blue-green, canary, rolling)

#### Deployment Strategies

```mermaid
graph TD
    STRAT["🚀 DEPLOYMENT<br/>STRATEGIES"] --> BG["🔵🟢 Blue-Green<br/><i>Two identical environments<br/>Switch traffic instantly<br/>Easy rollback</i>"]
    STRAT --> CAN["🐤 Canary<br/><i>Route small % of traffic<br/>to new version first<br/>Gradually increase</i>"]
    STRAT --> ROLL["🔄 Rolling<br/><i>Update instances one<br/>by one, no downtime<br/>Gradual replacement</i>"]
    
    style STRAT fill:#2c3e50,stroke:#1a252f,color:#fff,stroke-width:3px
    style BG fill:#3498db,stroke:#2980b9,color:#fff
    style CAN fill:#f39c12,stroke:#e67e22,color:#fff
    style ROLL fill:#2ecc71,stroke:#27ae60,color:#fff
```

#### Resources:
- 📖 GitHub Actions documentation
- 🎥 YouTube: "GitHub Actions Tutorial" by TechWorld with Nana

---

### 14. Infrastructure as Code (IaC)

```mermaid
graph LR
    IAC["📐 INFRASTRUCTURE<br/>AS CODE"] --> TF3["🟣 Terraform<br/><i>Cloud-agnostic<br/>Most popular</i>"]
    IAC --> CF["🟠 CloudFormation<br/><i>AWS-specific<br/>Native integration</i>"]
    IAC --> DM["🔵 Deployment Manager<br/><i>GCP-specific</i>"]
    
    TF3 --> TF_WHY["✅ Version-controlled infra<br/>✅ Reproducible environments<br/>✅ Works with ANY cloud<br/>✅ State management"]
    
    style IAC fill:#2c3e50,stroke:#1a252f,color:#fff,stroke-width:3px
    style TF3 fill:#7b42bc,stroke:#5a2d91,color:#fff,stroke-width:2px
```

#### What to learn:
- **Terraform** (cloud-agnostic, most popular)
- OR **AWS CloudFormation** / **GCP Deployment Manager**
- Defining infrastructure in code files
- Managing state
- Version controlling infrastructure

---

### 15. Monitoring, Logging & Observability

```mermaid
graph TD
    OBSERVE2["📊 OBSERVABILITY<br/>STACK"] --> METRICS["📈 METRICS<br/><b>Prometheus</b><br/><i>CPU, Memory, Request<br/>rates, Error rates</i>"]
    OBSERVE2 --> DASH2["📊 DASHBOARDS<br/><b>Grafana</b><br/><i>Visual representation<br/>of metrics</i>"]
    OBSERVE2 --> LOGS2["📋 LOGGING<br/><b>ELK Stack</b><br/><i>Centralized logs from<br/>all microservices</i>"]
    OBSERVE2 --> TRACE["🔍 TRACING<br/><b>Jaeger / Zipkin</b><br/><i>Track requests across<br/>multiple services</i>"]
    OBSERVE2 --> ALERT["🔔 ALERTING<br/><i>PagerDuty, Slack<br/>notifications</i>"]
    
    METRICS --> GRAF2["📊 Grafana<br/>Dashboards"]
    LOGS2 --> KIBANA["📊 Kibana<br/>Log Visualization"]
    
    style OBSERVE2 fill:#00cec9,stroke:#00b894,color:#fff,stroke-width:3px
    style METRICS fill:#fdcb6e,stroke:#f39c12,color:#333
    style DASH2 fill:#fdcb6e,stroke:#f39c12,color:#333
    style LOGS2 fill:#74b9ff,stroke:#0984e3,color:#333
    style TRACE fill:#a29bfe,stroke:#6c5ce7,color:#333
    style ALERT fill:#ff7675,stroke:#d63031,color:#fff
```

---

### 16. Disaster Recovery

```mermaid
graph TD
    DR2["🔄 DISASTER<br/>RECOVERY"] --> BACKUP2["💾 Backup Strategies<br/><i>Full, incremental,<br/>differential</i>"]
    DR2 --> RPO["⏱️ RPO<br/><i>Recovery Point Objective<br/>How much data can<br/>you afford to lose?</i>"]
    DR2 --> RTO["⏰ RTO<br/><i>Recovery Time Objective<br/>How fast must you<br/>recover?</i>"]
    DR2 --> MULTI["🌍 Multi-Region<br/><i>Run in multiple<br/>geographic locations</i>"]
    DR2 --> FAILOVER2["🔄 Failover Mechanisms<br/><i>Active-Passive<br/>Active-Active</i>"]
    DR2 --> REPL["📡 Database Replication<br/><i>Synchronous or<br/>asynchronous</i>"]
    
    RPO --> RPOEX["Example: RPO = 1 hour<br/>= max 1 hour of data lost"]
    RTO --> RTOEX["Example: RTO = 30 min<br/>= system back in 30 min"]
    
    style DR2 fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:3px
    style RPO fill:#fab1a0,stroke:#e17055,color:#333
    style RTO fill:#fab1a0,stroke:#e17055,color:#333
    style MULTI fill:#fab1a0,stroke:#e17055,color:#333
```

#### Failover Types

```mermaid
graph LR
    subgraph AP["🔄 Active-Passive"]
        direction TB
        AP_A["🟢 Primary<br/><i>Handles ALL traffic</i>"]
        AP_B["🟡 Standby<br/><i>Idle, ready to<br/>take over</i>"]
        AP_A -->|"Fails"| AP_B
    end
    
    subgraph AA["🔄 Active-Active"]
        direction TB
        AA_A["🟢 Region A<br/><i>Handles 50% traffic</i>"]
        AA_B["🟢 Region B<br/><i>Handles 50% traffic</i>"]
        AA_A -->|"Fails"| AA_B2["🟢 Region B<br/><i>Handles 100% traffic</i>"]
    end
    
    style AP fill:#fff3cd,stroke:#f39c12
    style AA fill:#d4edda,stroke:#27ae60
```

---

## 📊 Priority Learning Matrix

Here's what to prioritize based on the competition phases:

### 🔴 MUST LEARN (Phase 01 — NOW):

```mermaid
graph TD
    NOW["🔴 LEARN NOW<br/><i>Phase 01 Skills</i>"] --> T1["⚙️ Microservices Architecture<br/><i>Required by competition</i>"]
    NOW --> T2["🏗️ System Design Basics<br/><i>For architecture diagram (20%)</i>"]
    NOW --> T3["🎨 Figma / Wireframing<br/><i>For wireframes (15%)</i>"]
    NOW --> T4["📋 Requirements Engineering<br/><i>For FR & NFR (30% combined)</i>"]
    NOW --> T5["🔒 Security Concepts (theory)<br/><i>For NFR section</i>"]
    NOW --> T6["🔄 Disaster Recovery (theory)<br/><i>For NFR section</i>"]
    
    style NOW fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:3px
    style T1 fill:#ff7675,stroke:#d63031,color:#fff
    style T2 fill:#ff7675,stroke:#d63031,color:#fff
    style T3 fill:#ff7675,stroke:#d63031,color:#fff
    style T4 fill:#ff7675,stroke:#d63031,color:#fff
    style T5 fill:#ff7675,stroke:#d63031,color:#fff
    style T6 fill:#ff7675,stroke:#d63031,color:#fff
```

| Topic | Why |
|-------|-----|
| Microservices Architecture | Required by competition |
| System Design Basics | For architecture diagram (20% marks) |
| Figma / Wireframing | For wireframes (15% marks) |
| Requirements Engineering | For FR & NFR (30% combined marks) |
| Security Concepts (theory) | For NFR section |
| Disaster Recovery (theory) | For NFR section |

### 🟡 SHOULD LEARN (Before Phase 02):

| Topic | Why |
|-------|-----|
| Backend Framework (Node.js/Spring Boot) | To build the app |
| Frontend Framework (React/Next.js) | To build the UI |
| PostgreSQL + MongoDB | For data management |
| JWT / OAuth 2.0 | For authentication |
| Git & GitHub | For version control |
| REST API design | For backend services |

### 🟢 LEARN NEXT (Before Phase 03):

| Topic | Why |
|-------|-----|
| Docker | To containerize services |
| Kubernetes basics | To orchestrate containers |
| Cloud platform (AWS/GCP/Azure) | To deploy the application |
| CI/CD (GitHub Actions) | To automate deployment |
| Monitoring (Prometheus/Grafana) | To monitor the system |
| Terraform (IaC) | To manage infrastructure |

---

## 🛠️ Recommended Free Learning Resources

### Learning Path Visualization

```mermaid
graph LR
    WATCH["🎥 WATCH<br/>YouTube"] --> READ["📖 READ<br/>Documentation"]
    READ --> PRACTICE["🛠️ PRACTICE<br/>Hands-on Tools"]
    PRACTICE --> BUILD["🏗️ BUILD<br/>Your Submission"]
    
    WATCH --> YT1["TechWorld with Nana"]
    WATCH --> YT2["freeCodeCamp"]
    WATCH --> YT3["Fireship"]
    WATCH --> YT4["ByteByteGo"]
    WATCH --> YT5["Traversy Media"]
    
    READ --> D1X["Microservices.io"]
    READ --> D2X["Docker Docs"]
    READ --> D3X["Kubernetes.io"]
    READ --> D4X["OWASP.org"]
    READ --> D5X["12factor.net"]
    
    PRACTICE --> P1X["Draw.io - Diagrams"]
    PRACTICE --> P2X["Figma - Wireframes"]
    PRACTICE --> P3X["GitHub - Version Control"]
    PRACTICE --> P4X["Cloud Free Tier"]
    
    style WATCH fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:2px
    style READ fill:#f39c12,stroke:#e67e22,color:#fff,stroke-width:2px
    style PRACTICE fill:#2ecc71,stroke:#27ae60,color:#fff,stroke-width:2px
    style BUILD fill:#3498db,stroke:#2980b9,color:#fff,stroke-width:2px
```

### Video Courses:
1. **TechWorld with Nana** (YouTube) — Docker, Kubernetes, DevOps
2. **freeCodeCamp** (YouTube) — Full stack development, AWS
3. **Fireship** (YouTube) — Quick concept explanations
4. **ByteByteGo** (YouTube) — System design
5. **Traversy Media** (YouTube) — Web development

### Documentation:
1. **Microservices.io** — Microservices patterns
2. **Docker Docs** — Container documentation
3. **Kubernetes.io** — K8s tutorials
4. **OWASP.org** — Security best practices
5. **12factor.net** — Cloud-native app methodology

### Practice:
1. **Draw.io** — Practice architecture diagrams
2. **Figma** — Practice wireframing
3. **GitHub** — Set up repositories, practice Git
4. **AWS/GCP Free Tier** — Practice cloud deployment

---

## 💡 Pro Tips for Success

```mermaid
mindmap
  root["💡 PRO TIPS"]
    Focus
      Don't try to learn everything
      Focus on current phase skills
      Depth over breadth
    Teamwork
      Divide work among members
      Each person specializes
      Regular sync-ups
    Architecture First
      It's the foundation for everything
      20% of marks
      Get this right early
    Security is King
      Theme is about a cyber attack
      Emphasized throughout all phases
      Make it your differentiator
    Be Realistic
      Judges value practical solutions
      Over fantasy features
      What can you actually build?
    Document Everything
      Clear documentation = higher marks
      Be specific and measurable
      Professional formatting
    Practice Tools Early
      Set up Docker, cloud accounts
      Before Phase 2 & 3
      Don't waste competition time
    Time Management
      Phase 01 deadline: 22 July
      Plan your days wisely
      Buffer time for review
```

1. **Don't try to learn everything** — Focus on what's needed for the CURRENT phase
2. **Divide work among team members** — Each person can specialize
3. **Start with architecture** — It's the foundation for everything
4. **Security is king** — The scenario is about a cyber attack, so security is emphasized throughout
5. **Keep it realistic** — Judges value practical, implementable solutions over fantasy features
6. **Document everything** — Clear documentation = higher marks
7. **Practice with real tools** — Set up Docker, cloud accounts, etc. BEFORE Phase 2 & 3
8. **Time management** — Phase 01 deadline is 22 July. Plan your days wisely!
