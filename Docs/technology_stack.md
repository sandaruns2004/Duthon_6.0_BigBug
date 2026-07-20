# 07. Technology Stack Selection

---

## Overview

The technology stack has been carefully selected to support three non-negotiable architectural requirements mandated by the competition:

1. **Independent services architecture** (microservices)
2. **Security-first design** (defense-in-depth)
3. **Disaster recovery** (multi-region failover and self-healing)

---

## 7.1 Technology Stack Diagram

<br>

[Image 3]

<br>

---

## 7.2 Detailed Justification Table

### Frontend Layer

| Technology | Purpose | Justification |
|-----------|---------|---------------|
| **React.js / Next.js** | Web Application | SSR for faster page loads; component-based architecture for reusable modules. |
| **React Native** | Mobile Application | Cross-platform (iOS/Android) code sharing; native biometric authentication support. |

### Backend Layer

| Technology | Purpose | Justification |
|-----------|---------|---------------|
| **Node.js + Express** | Microservices Runtime | Async I/O for high concurrency; lightweight processes for individual services. |
| **Kong API Gateway** | API Management | Built-in rate limiting, routing, and zero-trust authentication enforcement. |

### Database & Storage Layer

| Technology | Purpose | Justification |
|-----------|---------|---------------|
| **PostgreSQL** | Relational Database | Mandatory ACID compliance for financial transactions; WAL for continuous replication. |
| **MongoDB** | NoSQL Database | Flexible schema for logs and scalable high-volume write operations. |
| **Redis** | In-Memory Cache | Sub-millisecond reads for sessions; reduces database load by 60-80%. |
| **AWS S3** | Object Storage | Scalable, encrypted storage for KYC documents and PDF receipts. |

### Messaging Layer

| Technology | Purpose | Justification |
|-----------|---------|---------------|
| **Apache Kafka** | Event Streaming | Guaranteed asynchronous delivery; decouples microservices to prevent cascading failures. |

### DevOps & Cloud Layer

| Technology | Purpose | Justification |
|-----------|---------|---------------|
| **Docker** | Containerization | Strict service isolation; compromised containers cannot access others. |
| **Kubernetes (EKS)**| Orchestration | Auto-scaling, self-healing, and zero-downtime rolling updates. |
| **GitHub Actions** | CI/CD Pipeline | Automated testing, security scanning, and deployment pipelines. |
| **Terraform** | IaC (Infrastructure as Code) | Reproducible infrastructure for immediate disaster recovery (RTO < 30 min). |
| **AWS** | Cloud Provider | Multi-region support; PCI DSS certified managed services. |

### Observability Layer

| Technology | Purpose | Justification |
|-----------|---------|---------------|
| **Prometheus & Grafana** | Metrics & Dashboards | Real-time monitoring and alerting for all Kubernetes clusters. |
| **ELK Stack** | Centralized Logging | Aggregated, searchable logs for security auditing and post-incident forensics. |
| **Jaeger (OpenTelemetry)**| Distributed Tracing | Tracks financial transactions end-to-end across all 15 microservices. |

### Security Layer

| Technology | Purpose | Justification |
|-----------|---------|---------------|
| **HashiCorp Vault** | Secrets Management | Securely stores and automatically rotates API keys and database passwords. |
| **OAuth 2.0 + JWT** | Authentication | Stateless tokens for horizontal scaling; fine-grained role-based access control. |
| **Istio Service Mesh** | Service-to-Service Security | Enforces mandatory mTLS encryption between all microservices (Zero-Trust). |

---

## 7.3 How the Stack Supports Key Requirements

<br>

[Image 4]

<br>
