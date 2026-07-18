# 📚 What You Need To Learn for Duothan 6.0

This document outlines **every skill and concept** you need to learn to compete effectively across all 3 phases of Duothan 6.0.

---

## 🔍 Phase 01 — RECON (Planning & Design) — What to Learn NOW

### 1. Software Architecture & System Design

#### Microservices Architecture (CRITICAL ⭐)
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

#### Resources to study:
- 🎥 YouTube: "Microservices Explained" by TechWorld with Nana
- 🎥 YouTube: "Microservices Architecture" by freeCodeCamp
- 📖 Martin Fowler's Microservices guide (martinfowler.com)
- 📖 Microservices.io (patterns and best practices)

---

### 2. System Design Fundamentals

#### Key Concepts:
- **Load Balancing** — Distributing traffic across servers
- **Caching** — Redis, CDN for faster responses
- **Message Queues** — Kafka, RabbitMQ for async processing
- **Database Design** — SQL vs NoSQL, when to use which
- **CAP Theorem** — Consistency, Availability, Partition tolerance trade-offs
- **ACID Properties** — Critical for financial transactions
- **API Design** — RESTful APIs, API versioning

#### Resources:
- 🎥 YouTube: "System Design for Beginners" by Gaurav Sen
- 🎥 YouTube: "System Design Interview" by ByteByteGo
- 📖 system-design-primer on GitHub

---

### 3. UX/UI Design for Banking Applications

#### What to learn:
- Wireframing basics (low, mid, high fidelity)
- User flow design
- Banking UX best practices (trust, clarity, simplicity)
- Figma basics (free tool for wireframing)
- Color psychology for finance (blues = trust, greens = money)
- Accessibility standards (WCAG 2.1)

#### Resources:
- 🎥 YouTube: "Figma Tutorial for Beginners" by DesignCourse
- 📖 Figma.com free tutorials
- 📖 Study existing banking apps: Revolut, Wise, Monzo for inspiration

---

### 4. Requirements Engineering

#### What to learn:
- How to write Functional Requirements (what the system DOES)
- How to write Non-Functional Requirements (how the system PERFORMS)
- User stories format ("As a ___, I want to ___, so that ___")
- Acceptance criteria
- Requirements prioritization (MoSCoW method)

---

### 5. Documentation & Technical Writing

#### What to learn:
- How to write clear technical documentation
- How to create professional system architecture diagrams
- Tools: Draw.io, Lucidchart, Mermaid diagrams
- How to format a professional Word document

---

## 🔨 Phase 02 — REBUILD (Development) — What to Learn Next

### 6. Backend Development

#### Pick ONE of these stacks:
| Option | Language | Framework | Best For |
|--------|----------|-----------|----------|
| **A** | JavaScript/TypeScript | Node.js + Express | Fast development, large ecosystem |
| **B** | Java | Spring Boot | Enterprise-grade, banking standard |
| **C** | Python | Django / FastAPI | Rapid prototyping, AI integration |

#### Key backend skills:
- RESTful API development
- Authentication & Authorization (JWT, OAuth 2.0)
- Input validation & sanitization
- Error handling & logging
- Database integration (ORM: Prisma, Hibernate, SQLAlchemy)
- API rate limiting
- CORS configuration

---

### 7. Frontend Development

#### Pick ONE:
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

#### Must learn:
- **PostgreSQL** (recommended for financial data — ACID compliant)
- **MongoDB** (for flexible data like logs, notifications)
- **Redis** (caching, session management)

#### Key concepts:
- Database schema design
- Indexing for performance
- Transactions and ACID compliance
- Database migrations
- Connection pooling

---

### 9. Security Practices (CRITICAL ⭐)

#### Must learn:
- **Authentication:** JWT tokens, OAuth 2.0, MFA implementation
- **Encryption:** TLS/SSL, AES-256 for data at rest, bcrypt for passwords
- **Input Security:** SQL injection prevention, XSS prevention, CSRF protection
- **API Security:** Rate limiting, API keys, CORS
- **OWASP Top 10:** Most common web vulnerabilities
- **PCI DSS basics:** Payment Card Industry standards

#### Resources:
- 📖 OWASP.org — Top 10 Web Security Risks
- 🎥 YouTube: "Web Security" by Computerphile
- 📖 PCI DSS Quick Reference Guide

---

## 🛡️ Phase 03 — FORTIFY (Deployment & Defense) — What to Learn

### 10. Docker & Containerization (CRITICAL ⭐)

#### What to learn:
- What are containers and why use them
- Writing Dockerfiles
- Docker Compose for multi-container apps
- Building and pushing Docker images
- Container networking
- Environment variables and secrets in containers

#### Resources:
- 🎥 YouTube: "Docker Tutorial for Beginners" by TechWorld with Nana
- 🎥 YouTube: "Docker Crash Course" by Traversy Media
- 📖 Docker official documentation (docs.docker.com)

---

### 11. Kubernetes Basics

#### What to learn:
- Pods, Services, Deployments, Ingress
- Scaling applications
- ConfigMaps and Secrets
- Managed Kubernetes: EKS (AWS), GKE (GCP), AKS (Azure)
- Helm charts basics

#### Resources:
- 🎥 YouTube: "Kubernetes Tutorial for Beginners" by TechWorld with Nana
- 📖 Kubernetes.io interactive tutorials

---

### 12. Cloud Platforms (CRITICAL ⭐)

#### Pick ONE and learn it well:

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

#### What to learn:
- GitHub Actions (recommended — free and simple)
- Building automated pipelines: Build → Test → Deploy
- Automated testing integration
- Deployment strategies (blue-green, canary, rolling)

#### Resources:
- 📖 GitHub Actions documentation
- 🎥 YouTube: "GitHub Actions Tutorial" by TechWorld with Nana

---

### 14. Infrastructure as Code (IaC)

#### What to learn:
- **Terraform** (cloud-agnostic, most popular)
- OR **AWS CloudFormation** / **GCP Deployment Manager**
- Defining infrastructure in code files
- Managing state
- Version controlling infrastructure

---

### 15. Monitoring, Logging & Observability

#### What to learn:
- **Prometheus** — Metrics collection
- **Grafana** — Dashboard and visualization
- **ELK Stack** (Elasticsearch, Logstash, Kibana) — Centralized logging
- Health check endpoints
- Alert configuration
- Distributed tracing (Jaeger, Zipkin)

---

### 16. Disaster Recovery

#### What to learn:
- Backup strategies (automated, incremental)
- Recovery Point Objective (RPO) — How much data can you lose?
- Recovery Time Objective (RTO) — How fast can you recover?
- Multi-region deployment
- Failover mechanisms (active-passive, active-active)
- Database replication
- Infrastructure redundancy

---

## 📊 Priority Learning Matrix

Here's what to prioritize based on the competition phases:

### 🔴 MUST LEARN (Phase 01 — NOW):
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

1. **Don't try to learn everything** — Focus on what's needed for the CURRENT phase
2. **Divide work among team members** — Each person can specialize
3. **Start with architecture** — It's the foundation for everything
4. **Security is king** — The scenario is about a cyber attack, so security is emphasized throughout
5. **Keep it realistic** — Judges value practical, implementable solutions over fantasy features
6. **Document everything** — Clear documentation = higher marks
7. **Practice with real tools** — Set up Docker, cloud accounts, etc. BEFORE Phase 2 & 3
8. **Time management** — Phase 01 deadline is 22 July. Plan your days wisely!
