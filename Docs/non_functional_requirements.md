# 06. Non-Functional Requirements

---

## Overview

The following non-functional requirements define **how AegisVault performs** — the quality standards that ensure the platform is secure, resilient, performant, and production-ready. Given that the 2065 crisis was caused by a cyberattack exploiting architectural weaknesses, this section **heavily emphasizes security, disaster recovery, cloud performance, and reliability** as mandated by the competition brief.

All NFRs use **specific, measurable values** to enable objective verification.

---

## 6.1 Security (CRITICAL)

> Given the catastrophic failure caused by the Super Malware Agent, security is the **most critical quality attribute** of AegisVault. Every layer of the system is designed with defense-in-depth.

| ID | Requirement | Metric |
|----|-------------|--------|
| **NFR-01** | All data transmitted between clients and servers must be encrypted using **TLS 1.3** or higher. | 100% of connections encrypted |
| **NFR-02** | All data stored at rest (databases, backups, logs) must be encrypted using **AES-256** encryption with customer-managed encryption keys. | 100% of stored data encrypted |
| **NFR-03** | The system must implement a **zero-trust security architecture** where every request is authenticated and authorized regardless of network origin. | All service-to-service calls use mTLS |
| **NFR-04** | All inter-service communication must use **mutual TLS (mTLS)** for bidirectional authentication between microservices. | 100% of internal calls authenticated |
| **NFR-05** | All user passwords must be hashed using **bcrypt** with a minimum cost factor of 12 and unique salt per password. | No plaintext or reversibly encrypted passwords |
| **NFR-06** | All API endpoints must be **rate-limited** to prevent abuse and brute-force attacks (max 100 requests/minute for authenticated users, 20/minute for unauthenticated). | Rate limits enforced per endpoint |
| **NFR-07** | The system must comply with **PCI DSS** (Payment Card Industry Data Security Standard) requirements for handling financial data. | Full PCI DSS compliance |
| **NFR-08** | The system must implement protection against the **OWASP Top 10** web application security risks including SQL injection, XSS, CSRF, and broken access control. | All OWASP Top 10 mitigated |
| **NFR-09** | All API tokens (JWT) must expire after **15 minutes** for access tokens and **7 days** for refresh tokens, with mandatory re-authentication for sensitive operations. | Token lifecycle enforced |
| **NFR-10** | The system must maintain an **immutable audit trail** of all security-relevant events that cannot be modified or deleted, retained for a minimum of 2 years. | 100% of security events logged |

---

## 6.2 Disaster Recovery (CRITICAL)

> The entire premise of Duothan 6.0 is recovering from a catastrophic system failure. AegisVault's disaster recovery capabilities are architected as first-class design concerns.

| ID | Requirement | Metric |
|----|-------------|--------|
| **NFR-11** | The system must perform **automated full database backups every 6 hours** to geographically separate storage with AES-256 encryption. | Backups every 6 hours, encrypted |
| **NFR-12** | The system must achieve a **Recovery Point Objective (RPO) of less than 1 hour** — maximum acceptable data loss in a disaster scenario. | RPO < 1 hour |
| **NFR-13** | The system must achieve a **Recovery Time Objective (RTO) of less than 30 minutes** — maximum time to restore full service after a regional failure. | RTO < 30 minutes |
| **NFR-14** | The system must support **multi-region failover** with a hot standby region that receives real-time data replication from the primary region. | Automatic failover to secondary region |
| **NFR-15** | The system must maintain a guaranteed **uptime SLA of 99.99%** (maximum 52.6 minutes of unplanned downtime per year). | 99.99% availability |
| **NFR-16** | Database backups must be **retained for a minimum of 90 days** with point-in-time recovery capability via continuous WAL (Write-Ahead Log) streaming. | 90-day retention + PITR |
| **NFR-17** | The system must support **automated disaster recovery testing** on a monthly schedule to validate failover procedures without affecting production traffic. | Monthly DR drill completion |

---

## 6.3 Performance

| ID | Requirement | Metric |
|----|-------------|--------|
| **NFR-18** | API response time must be **less than 200 milliseconds** for 95% of all requests (p95 latency) under normal load conditions. | p95 latency < 200ms |
| **NFR-19** | The system must support a minimum of **10,000 concurrent users** without performance degradation. | 10,000+ concurrent connections |
| **NFR-20** | All database queries must complete within **100 milliseconds** under normal operational load. | Query execution < 100ms |
| **NFR-21** | Web application pages must achieve a **page load time of less than 3 seconds** on standard broadband connections (10 Mbps+). | Page load < 3 seconds |
| **NFR-22** | The system must achieve a **Lighthouse performance score of 90+** for the web application. | Lighthouse score ≥ 90 |

---

## 6.4 Scalability & Cloud Infrastructure

| ID | Requirement | Metric |
|----|-------------|--------|
| **NFR-23** | The system must **auto-scale horizontally** based on CPU utilization (scale-up at 70%, scale-down at 30%) and request rate thresholds. | Auto-scaling policies active |
| **NFR-24** | All microservices must be **containerized using Docker** with multi-stage builds for minimal image sizes (< 200MB per service). | 100% containerized |
| **NFR-25** | Container orchestration must use **Kubernetes** (EKS/GKE) with Horizontal Pod Autoscaler (HPA) for dynamic resource allocation. | Kubernetes orchestration active |
| **NFR-26** | All infrastructure must be defined and managed as **Infrastructure as Code (IaC)** using Terraform, ensuring reproducible and version-controlled environments. | 100% IaC coverage |
| **NFR-27** | The system must support **rolling deployments** with zero-downtime updates and automatic rollback on failure detection. | Zero-downtime deployments |

---

## 6.5 Monitoring & Observability

| ID | Requirement | Metric |
|----|-------------|--------|
| **NFR-28** | All microservices must expose **health check endpoints** (/health and /ready) for Kubernetes liveness and readiness probes. | 100% of services monitored |
| **NFR-29** | The system must provide **centralized logging** from all microservices using the ELK Stack (Elasticsearch, Logstash, Kibana) with structured JSON log format. | Centralized log aggregation |
| **NFR-30** | The system must maintain **real-time monitoring dashboards** (Grafana) displaying key metrics: response times, error rates, CPU/memory usage, active users, and transaction throughput. | Real-time dashboards available |
| **NFR-31** | The system must trigger **automated alerts** when critical metrics exceed defined thresholds (e.g., error rate > 1%, CPU > 80%, response time > 500ms). | Automated alerting configured |
| **NFR-32** | All requests must be traceable end-to-end across microservices using **distributed tracing** (correlation IDs propagated through every service call). | 100% request traceability |

---

## 6.6 Accessibility & Usability

| ID | Requirement | Metric |
|----|-------------|--------|
| **NFR-33** | The web and mobile applications must comply with **WCAG 2.1 Level AA** accessibility standards. | WCAG 2.1 AA compliance |
| **NFR-34** | The system must support **multi-language interfaces** with at minimum Sinhala, Tamil, and English language options. | 3 languages supported |
| **NFR-35** | All interactive elements must have a **minimum touch target size of 44x44 pixels** on mobile devices for elderly and accessibility users. | Touch targets ≥ 44x44px |
| **NFR-36** | The application must maintain a **minimum color contrast ratio of 4.5:1** for normal text and 3:1 for large text to ensure readability. | Contrast ratios compliant |

---

## 6.7 Compliance & Regulatory

| ID | Requirement | Metric |
|----|-------------|--------|
| **NFR-37** | The system must comply with **GDPR** and local data protection regulations for handling personal and financial data. | Regulatory compliance achieved |
| **NFR-38** | The system must implement **data residency controls** ensuring customer financial data is stored within the regulatory jurisdiction of the user's registered country. | Data residency enforced |

---

## 6.8 Requirements Summary

| Category | Count | Focus Level |
|----------|-------|-------------|
| 🔒 Security | 10 | 🔴 **CRITICAL** |
| 🔄 Disaster Recovery | 7 | 🔴 **CRITICAL** |
| ⚡ Performance | 5 | 🟡 High |
| ☁️ Scalability & Cloud | 5 | 🟡 High |
| 📊 Monitoring & Observability | 5 | 🟡 High |
| ♿ Accessibility & Usability | 4 | 🟢 Important |
| ⚖️ Compliance & Regulatory | 2 | 🟢 Important |
| **Total** | **38** | — |
