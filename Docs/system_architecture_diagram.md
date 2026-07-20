# Our Solution — System Architecture Diagram

> **Standalone reference file** — Contains the complete system architecture Mermaid diagram with all 10 layers, 15 microservices, and full event-driven messaging flows.

---

## Full System Architecture

<br>

[IMAGE 1]

<br>

---

## Transaction Data Flow (FR-15)

This diagram demonstrates how core financial data flows through the application securely and asynchronously, satisfying the requirement for resilient, non-blocking communication.

<br>

[IMAGE 2]

<br>

---

## Secure Communication & Data Flow

To ensure the platform cannot suffer a cascading failure like the 2065 disaster, communication and data flows are strictly controlled:

1. **Zero-Trust Network Security (mTLS):** All external traffic stops at the API Gateway. Internal communication between the 15 microservices uses **Istio Service Mesh** with mandatory **mTLS (Mutual TLS)**. Services never trust each other blindly; every internal request is cryptographically authenticated and encrypted.
2. **Event-Driven Decoupling:** Instead of synchronous API calls that can bottleneck and crash, the system uses **Apache Kafka** for asynchronous data flow. For example, when a transaction occurs, the Transaction Service commits the change to its isolated PostgreSQL database and fires an event to Kafka. Downstream services (like Notifications and Auditing) consume this event independently. If the Notification Service crashes, Kafka holds the message safely until it recovers—**ensuring zero data loss and preventing cascading failures.**
3. **Isolated Data Boundaries:** The architecture implements the strict Database-per-Service pattern. No two services share a database or connection string. If a threat actor manages to compromise the `Loans DB`, the `Transactions DB` remains completely inaccessible to them.
