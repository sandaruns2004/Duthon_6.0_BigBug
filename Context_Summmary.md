# Duothan 6.0 Phase 01: RECON — In-Depth Walkthrough

This document provides a detailed breakdown and analysis of the **Duothan 6.0 Phase 01 - RECON** requirements. It serves as your strategic guide to understanding the scenario, the expected deliverables, and how to maximize your score.

---

## 1. The Scenario & Core Mission

### The Crisis

It is the year 2065. A "Super Malware Agent" has devastated global digital infrastructure. The financial sector is completely paralyzed—core banking, ATMs, digital payments, and loan systems are offline. People are forced back into a cash-only society, crippling small businesses and causing massive economic inequality.

```mermaid
graph TD
    subgraph BEFORE["🌍 BEFORE THE ATTACK"]
        direction LR
        B1["🏦 Core Banking ✅"]
        B2["🏧 ATMs ✅"]
        B3["💳 Digital Payments ✅"]
        B4["📄 Loans ✅"]
    end
    
    ATTACK["🦠 SUPER MALWARE AGENT<br/><b>STRIKES</b>"] 
    
    subgraph AFTER["💀 AFTER THE ATTACK"]
        direction LR
        A1["🏦 Core Banking ❌"]
        A2["🏧 ATMs ❌"]
        A3["💳 Digital Payments ❌"]
        A4["📄 Loans ❌"]
    end
    
    BEFORE --> ATTACK
    ATTACK --> AFTER
    
    AFTER --> MISSION["🎯 YOUR MISSION:<br/>Build a NEW, attack-proof<br/>financial ecosystem"]
    
    style BEFORE fill:#2ecc71,stroke:#27ae60,color:#fff
    style ATTACK fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:3px
    style AFTER fill:#c0392b,stroke:#922b21,color:#fff
    style MISSION fill:#3498db,stroke:#2980b9,color:#fff,stroke-width:3px
```

### The Silver Lining
Customer databases were safely backed up. No user data was lost, but the network is heavily guarded by the malware, rendering the data inaccessible.

### Your Mission
You are not just fixing the old system; you are building a **brand new, attack-proof financial ecosystem** from the ground up. Your goal is to design a secure, reliable, and inclusive digital banking platform that restores trust and essential financial services to millions.

---

## 2. Key Architectural Directives

To succeed in this phase, your design must explicitly address these technical constraints:

```mermaid
graph TD
    DIRECTIVES["🏗️ KEY ARCHITECTURAL<br/>DIRECTIVES"] --> D1["⚙️ Independent Services<br/>(Microservices)<br/><b>NON-NEGOTIABLE</b>"]
    DIRECTIVES --> D2["🛡️ Modern Resilience<br/><i>Cybersecurity + Cloud<br/>+ Intelligent Automation</i>"]
    DIRECTIVES --> D3["🔄 Disaster Recovery<br/><i>Baked into design<br/>from Day 1</i>"]
    
    D1 --> D1A["Each service runs independently"]
    D1 --> D1B["If one fails, others survive"]
    D1 --> D1C["Each has its own database"]
    
    D2 --> D2A["Zero-trust security model"]
    D2 --> D2B["Cloud-native deployment"]
    D2 --> D2C["AI-powered threat detection"]
    
    D3 --> D3A["Multi-region failover"]
    D3 --> D3B["Automated backups"]
    D3 --> D3C["RPO < 1hr, RTO < 30min"]
    
    style DIRECTIVES fill:#2c3e50,stroke:#1a252f,color:#fff,stroke-width:3px
    style D1 fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:2px
    style D2 fill:#f39c12,stroke:#e67e22,color:#fff
    style D3 fill:#3498db,stroke:#2980b9,color:#fff
```

*   **Independent Services Architecture:** This is mentioned multiple times and is non-negotiable. You must design a system using isolated, independent services (microservices). This ensures that if one component is compromised in the future, the rest of the system remains secure and operational.
*   **Modern Resilience:** Your solution must incorporate modern cybersecurity practices, cloud technologies, and intelligent automation.
*   **Disaster Recovery:** A robust disaster recovery plan must be baked into your design from day one.

---

## 3. The 7 Deliverables (The Blueprint)

Phase 01 requires **zero coding**. Instead, you are tasked with creating a comprehensive project blueprint. Here are the 7 required sections and how they are weighted:

### Mark Distribution

```mermaid
pie title Phase 1 Mark Allocation (100 Marks Total)
    "Problem Identification (10%)" : 10
    "Proposed Solution (20%)" : 20
    "System Architecture (20%)" : 20
    "Wireframes Design (15%)" : 15
    "Functional Requirements (15%)" : 15
    "Non-Functional Requirements (15%)" : 15
    "Technology Stack (5%)" : 5
```

### Deliverables Overview

```mermaid
graph TD
    BLUEPRINT["📋 THE BLUEPRINT<br/><i>7 Deliverables in 1 .docx</i>"] --> D1["01. Problem Identification<br/><b>10%</b> — 10 marks"]
    BLUEPRINT --> D2["02. Proposed Solution<br/><b>20%</b> — 20 marks ⭐"]
    BLUEPRINT --> D3["03. System Architecture<br/><b>20%</b> — 20 marks ⭐"]
    BLUEPRINT --> D4["04. Wireframes Design<br/><b>15%</b> — 15 marks"]
    BLUEPRINT --> D5["05. Functional Requirements<br/><b>15%</b> — 15 marks"]
    BLUEPRINT --> D6["06. Non-Functional Requirements<br/><b>15%</b> — 15 marks"]
    BLUEPRINT --> D7["07. Technology Stack<br/><b>5%</b> — 5 marks"]
    
    style BLUEPRINT fill:#2c3e50,stroke:#1a252f,color:#fff,stroke-width:3px
    style D2 fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:2px
    style D3 fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:2px
    style D1 fill:#3498db,stroke:#2980b9,color:#fff
    style D4 fill:#f39c12,stroke:#e67e22,color:#fff
    style D5 fill:#f39c12,stroke:#e67e22,color:#fff
    style D6 fill:#f39c12,stroke:#e67e22,color:#fff
    style D7 fill:#95a5a6,stroke:#7f8c8d,color:#fff
```

### **01. Problem Identification (10%)**
*   **What to do:** Analyze the fallout of the 2065 cyber disaster on banking. Define the precise problems your platform will solve.
*   **Focus on:** The real-world impact on users, the economy, and the specific banking challenges caused by the outage.

### **02. Proposed Solution (20%) ⭐**
*   **What to do:** Describe your technology-based remedy.
*   **Focus on:** How your application securely restores financial services, the specific value it brings to the affected users, and how it directly solves the problems identified in section 01.

### **03. System Architecture Diagram (20%) ⭐**
*   **What to do:** Create a visual diagram of your system.
*   **Focus on:** Showing **independent services (microservices)**, databases, secure communication pathways, and data flow. This diagram must prove that a single point of failure won't take down the whole system.

### **04. Wireframes Design (15%)**
*   **What to do:** Design the user interface (mid or high-fidelity).
*   **Focus on:** Showing the user flow and visual layout of the new banking system. You must embed clear screenshots into your final document **AND** provide a working link to your design file (Figma, Canva, etc.).

### **05. Functional Requirements (15%)**
*   **What to do:** List what the system actually does.
*   **Focus on:** User-facing features (e.g., "A user must be able to securely transfer funds to another account", "The system must authenticate users via biometrics").

### **06. Non-Functional Requirements (15%)**
*   **What to do:** Define the system's quality standards.
*   **Focus on:** Given the hackathon's theme, this section should heavily emphasize **Security, Disaster Recovery, Cloud Performance, High Availability, and Reliability**.

### **07. Technology Stack Selection (5%)**
*   **What to do:** List your programming languages, databases, and cloud tools.
*   **Focus on:** Justifying *why* these tools were chosen. Explain how they support an attack-proof, independent-services architecture (e.g., choosing Kubernetes for container orchestration to ensure high availability).

---

## 4. Submission Guidelines (Critical Rules)

Failure to follow these rules will likely result in disqualification or severe point deductions:

```mermaid
graph TD
    SUBMIT["📤 SUBMISSION RULES"] --> F1["📄 Format: Single .docx file<br/><b>Microsoft Word Document ONLY</b>"]
    SUBMIT --> F2["🚫 BANNED: PDFs, Google Docs,<br/>or any other format"]
    SUBMIT --> F3["📑 ORDER: All 7 deliverables<br/>in the exact order requested"]
    SUBMIT --> F4["🎨 WIREFRAMES: Embed screenshots<br/>IN the doc + include design file link"]
    SUBMIT --> F5["🔗 LINK: duothan.ieeensbm.org/submission"]
    
    style SUBMIT fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:3px
    style F1 fill:#ff7675,stroke:#d63031,color:#fff
    style F2 fill:#ff7675,stroke:#d63031,color:#fff
    style F3 fill:#fdcb6e,stroke:#f39c12,color:#333
    style F4 fill:#fdcb6e,stroke:#f39c12,color:#333
    style F5 fill:#74b9ff,stroke:#0984e3,color:#333
```

1.  **Format:** You must submit a single **Microsoft Word Document (.docx)**.
2.  **Banned Formats:** Do NOT submit PDFs, Google Docs links, or any other format.
3.  **Order:** Ensure all 7 deliverables are in the exact order requested.
4.  **Wireframes:** You **must** embed screenshots directly in the Word document AND provide a working link to the original design file.
5.  **Submission Link:** `duothan.ieeensbm.org/submission`

---

## 5. Strategic Advice for Winning Phase 01

```mermaid
graph TD
    WIN["🏆 WINNING STRATEGY"] --> S1["👑 Security is KING<br/><i>Every section should<br/>emphasize security & resilience.<br/>The entire premise is<br/>a cyberattack!</i>"]
    WIN --> S2["🏗️ Nail the Architecture<br/><i>20% of your grade.<br/>Must visually show<br/>independent-service architecture.<br/>AVOID monolithic designs!</i>"]
    WIN --> S3["📄 Follow Formatting<br/><i>Don't lose points on<br/>technicalities. Submit .docx<br/>with embedded images<br/>AND design file links.</i>"]
    WIN --> S4["🔗 Connect Everything<br/><i>Problem → Solution → Architecture<br/>Each section should build<br/>on the previous one<br/>in a logical flow.</i>"]
    WIN --> S5["📏 Be Measurable<br/><i>Don't say 'fast' — say<br/>'response time < 200ms'.<br/>Don't say 'secure' — say<br/>'AES-256 encryption'.</i>"]
    
    style WIN fill:#f39c12,stroke:#e67e22,color:#fff,stroke-width:3px
    style S1 fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:2px
    style S2 fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:2px
    style S3 fill:#3498db,stroke:#2980b9,color:#fff
    style S4 fill:#3498db,stroke:#2980b9,color:#fff
    style S5 fill:#2ecc71,stroke:#27ae60,color:#fff
```

*   **Security is King:** The entire premise revolves around a massive cyberattack. Every section of your document (especially Architecture, Solution, and Non-Functional Requirements) should scream "Security and Resilience."
*   **Nail the Architecture:** The architecture diagram is worth 20% of your grade. Ensure it visually represents the mandated "independent-service architecture" clearly. Avoid monolithic designs.
*   **Follow the Formatting:** Don't lose points on technicalities. Submit a `.docx` file and include both images and links for your wireframes.
*   **Connect Everything:** Each deliverable should logically flow from the previous one. Problem → Solution → Architecture → Wireframes → Requirements → Tech Stack.
*   **Be Measurable:** Use specific, quantifiable values in your NFRs. "Fast" is vague. "API response < 200ms for 95% of requests" is winning.
