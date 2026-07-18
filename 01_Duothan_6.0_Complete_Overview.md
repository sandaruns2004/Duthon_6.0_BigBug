# 🏆 Duothan 6.0 — Complete Competition Overview

> **The National Inter-University DevOps Combat Hackathon**
> *Organized by IEEE Student Branch of NSBM Green University*

---

## 📌 What is Duothan 6.0?

**Duothan 6.0** is a **National Inter-University DevOps Combat Hackathon** organized by the **IEEE Student Branch of NSBM Green University**, in collaboration with:

- 🖥️ IEEE Computer Society Chapter (NSBM)
- 👩‍💻 IEEE Women in Engineering (WIE) Affinity Group (NSBM)
- 🌍 IEEE SIGHT Affinity Group (NSBM)

This is the **6th edition** of the competition. Unlike traditional hackathons that focus only on coding, Duothan 6.0 pushes participants into **real-world DevOps** — covering the **full software lifecycle**: planning → developing → deploying.

```mermaid
graph LR
    PLAN["📋 PLANNING<br/><i>Phase 1: RECON</i>"] --> DEV["💻 DEVELOPING<br/><i>Phase 2: REBUILD</i>"]
    DEV --> DEPLOY["🚀 DEPLOYING<br/><i>Phase 3: FORTIFY</i>"]
    DEPLOY --> WIN["🏆 VICTORY"]
    
    style PLAN fill:#ff6b6b,stroke:#c0392b,color:#fff,stroke-width:2px
    style DEV fill:#ffd93d,stroke:#f39c12,color:#333,stroke-width:2px
    style DEPLOY fill:#6bcb77,stroke:#27ae60,color:#fff,stroke-width:2px
    style WIN fill:#9b59b6,stroke:#8e44ad,color:#fff,stroke-width:2px
```

> **Tagline:** `RECON > REBUILD > FORTIFY`

---

## 🎯 Competition Theme & Story

### The Scenario (Year 2065)

A **massive global cyber disaster** caused by a **"Super Malware Agent"** has destroyed digital systems across all sectors worldwide — governments, healthcare, transportation, businesses, and **most critically, the financial sector**.

```mermaid
graph TD
    MALWARE["🦠 SUPER MALWARE AGENT<br/><i>Year 2065</i>"] --> GOV["🏛️ Governments<br/><b>COMPROMISED</b>"]
    MALWARE --> HEALTH["🏥 Healthcare<br/><b>DISRUPTED</b>"]
    MALWARE --> TRANSPORT["🚗 Transportation<br/><b>HALTED</b>"]
    MALWARE --> BIZ["🏢 Businesses<br/><b>PARALYZED</b>"]
    MALWARE --> FINANCE["🏦 FINANCIAL SECTOR<br/><b>💀 DESTROYED</b>"]
    
    FINANCE --> BANK["💔 Core Banking<br/>Systems DOWN"]
    FINANCE --> ATM["💔 ATMs<br/>OFFLINE"]
    FINANCE --> PAY["💔 Digital Payments<br/>DESTROYED"]
    FINANCE --> LOAN["💔 Loan Systems<br/>NON-FUNCTIONAL"]
    
    BANK --> IMPACT1["😰 Millions lost access<br/>to financial services"]
    ATM --> IMPACT2["😰 Cash-only society"]
    PAY --> IMPACT3["😰 Small businesses<br/>can't transact"]
    LOAN --> IMPACT4["😰 Economic recovery<br/>slowed dramatically"]
    
    style MALWARE fill:#c0392b,stroke:#922b21,color:#fff,stroke-width:3px
    style FINANCE fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:3px
    style BANK fill:#ff7675,stroke:#d63031,color:#fff
    style ATM fill:#ff7675,stroke:#d63031,color:#fff
    style PAY fill:#ff7675,stroke:#d63031,color:#fff
    style LOAN fill:#ff7675,stroke:#d63031,color:#fff
```

#### What survived:

```mermaid
graph LR
    SAFE["✅ WHAT SURVIVED"] --> DATA["🗄️ Customer Databases<br/><i>SAFE — Secure backups</i>"]
    SAFE --> INFO["👤 User Information<br/><i>NO data was lost</i>"]
    
    CATCH["⚠️ THE CATCH"] --> KEY["🔐 The Master Key to unlock<br/>the banking network is hidden<br/>behind STRONG security layers"]
    
    style SAFE fill:#2ecc71,stroke:#27ae60,color:#fff,stroke-width:2px
    style CATCH fill:#f39c12,stroke:#e67e22,color:#fff,stroke-width:2px
    style KEY fill:#e74c3c,stroke:#c0392b,color:#fff
```

### Your Mission

> **Save the digital banking system** — Design, build, and deploy a **secure, reliable, and inclusive financial platform** from the ground up.

```mermaid
graph TD
    MISSION["🎯 YOUR MISSION:<br/>Rebuild Digital Banking"] --> R1["🔒 Modern Cybersecurity<br/><i>Zero-trust, encryption,<br/>multi-factor auth</i>"]
    MISSION --> R2["☁️ Cloud Technology<br/><i>Scalable, reliable,<br/>globally distributed</i>"]
    MISSION --> R3["🤖 Intelligent Automation<br/><i>AI fraud detection,<br/>auto-scaling</i>"]
    MISSION --> R4["⚙️ Microservices Architecture<br/><i>Independent services,<br/>no single point of failure</i>"]
    MISSION --> R5["🔄 Disaster Recovery Plan<br/><i>Multi-region backup,<br/>failover mechanisms</i>"]
    MISSION --> R6["🛡️ Attack Prevention<br/><i>Ensure this NEVER<br/>happens again</i>"]
    
    style MISSION fill:#3498db,stroke:#2980b9,color:#fff,stroke-width:3px
    style R1 fill:#e74c3c,stroke:#c0392b,color:#fff
    style R4 fill:#e74c3c,stroke:#c0392b,color:#fff
    style R5 fill:#e74c3c,stroke:#c0392b,color:#fff
```

---

## 🗺️ Competition Structure — 3 Phases

```mermaid
gantt
    title Duothan 6.0 — Full Competition Timeline
    dateFormat  YYYY-MM-DD
    
    section Phase 01 - RECON
    Online - Planning and Design       :active, p1, 2026-07-18, 2026-07-22
    Winners Announced (5 PM)           :milestone, m1, 2026-07-24, 0d
    
    section Phase 02 - REBUILD
    Online - Development               :p2, 2026-07-25, 2026-07-31
    Winners Announced (5 PM)           :milestone, m2, 2026-08-02, 0d
    
    section Phase 03 - FORTIFY
    On-site at NSBM - Deploy and Defend :crit, p3, 2026-08-06, 1d
    Winners Announced (5 PM)            :milestone, m3, 2026-08-06, 0d
```

| Phase  | Name        | Type              | Date                 | Time                | Description                                                          |
| ------ | ----------- | ----------------- | -------------------- | ------------------- | -------------------------------------------------------------------- |
| **01** | **RECON**   | 🌐 Online         | 18 Jul – 22 Jul 2026 | 6:00 AM – 11:59 PM  | Assess the damage. Design the recovery. Create the blueprint.        |
| **02** | **REBUILD** | 🌐 Online         | 25 Jul – 31 Jul 2026 | 12:00 AM – 11:59 PM | Develop secure solutions. Restore systems. Apply security practices. |
| **03** | **FORTIFY** | 🏛️ On-site (NSBM) | 06 Aug 2026          | 8:30 AM – 3:30 PM   | Deploy, integrate, and defend infrastructure. Live judging.          |

```mermaid
graph LR
    P1["🔍 RECON<br/><i>18-22 Jul</i><br/>Blueprint & Design"] -->|"Must Pass ✅"| P2["🔨 REBUILD<br/><i>25-31 Jul</i><br/>Development"]
    P2 -->|"Must Pass ✅"| P3["🛡️ FORTIFY<br/><i>06 Aug</i><br/>Deploy & Defend"]
    P3 --> WINNER["🏆 CHAMPION"]
    
    P1 -.->|"❌ Fail"| ELIM1["💀 Eliminated"]
    P2 -.->|"❌ Fail"| ELIM2["💀 Eliminated"]
    
    style P1 fill:#ff6b6b,stroke:#c0392b,color:#fff,stroke-width:2px
    style P2 fill:#ffd93d,stroke:#f39c12,color:#333,stroke-width:2px
    style P3 fill:#6bcb77,stroke:#27ae60,color:#fff,stroke-width:2px
    style WINNER fill:#9b59b6,stroke:#8e44ad,color:#fff,stroke-width:3px
    style ELIM1 fill:#95a5a6,stroke:#7f8c8d,color:#fff
    style ELIM2 fill:#95a5a6,stroke:#7f8c8d,color:#fff
```

> ⚠️ **Teams must pass each phase to qualify for the next!**

---

## 👥 Team Rules

```mermaid
graph TD
    TEAM["👥 TEAM REQUIREMENTS"] --> SIZE["📏 Team Size<br/><b>2–4 members</b>"]
    TEAM --> UNI["🏫 Same University<br/><b>No cross-university teams</b>"]
    TEAM --> ELIG["🇱🇰 Sri Lankan<br/><b>Undergraduates only</b>"]
    TEAM --> CHANGE["🔄 Changes<br/><b>Need organizer approval<br/>before registration closes</b>"]
    
    style TEAM fill:#3498db,stroke:#2980b9,color:#fff,stroke-width:3px
    style SIZE fill:#74b9ff,stroke:#0984e3,color:#333
    style UNI fill:#74b9ff,stroke:#0984e3,color:#333
    style ELIG fill:#74b9ff,stroke:#0984e3,color:#333
    style CHANGE fill:#74b9ff,stroke:#0984e3,color:#333
```

| Rule            | Details                                                                              |
| --------------- | ------------------------------------------------------------------------------------ |
| **Team Size**   | 2–4 members                                                                          |
| **University**  | All members must be from the **same university** (no cross-university teams)         |
| **Eligibility** | Open to all **Sri Lankan undergraduates**                                            |
| **Changes**     | Team changes require organizer approval before registration closes; no changes after |

---

## 🏅 Prizes

```mermaid
graph TD
    subgraph PRIZES["🏅 PRIZE POOL"]
        FIRST["🥇 CHAMPION<br/><b>Rs. 50,000</b>"]
        SECOND["🥈 1st Runner Up<br/><b>Rs. 30,000</b>"]
        THIRD["🥉 2nd Runner Up<br/><b>Rs. 20,000</b>"]
    end
    
    style PRIZES fill:#ffeaa7,stroke:#fdcb6e
    style FIRST fill:#f1c40f,stroke:#f39c12,color:#333,stroke-width:3px
    style SECOND fill:#bdc3c7,stroke:#95a5a6,color:#333,stroke-width:2px
    style THIRD fill:#e67e22,stroke:#d35400,color:#fff,stroke-width:2px
```

| Position             | Prize (LKR)    |
| -------------------- | -------------- |
| 🥇 **Champion**      | **Rs. 50,000** |
| 🥈 **1st Runner Up** | **Rs. 30,000** |
| 🥉 **2nd Runner Up** | **Rs. 20,000** |

---

## ⚖️ Survival Rules (Important!)

```mermaid
graph TD
    RULES["⚖️ SURVIVAL RULES"] --> R1["1️⃣ Original Work Only<br/><i>All work must be original<br/>and developed during competition</i>"]
    RULES --> R2["2️⃣ No Pre-built Solutions<br/><i>Cannot use code not developed<br/>during the competition</i>"]
    RULES --> R3["3️⃣ Strict Deadlines<br/><i>Late submissions are<br/>NOT accepted</i>"]
    RULES --> R4["4️⃣ Zero Plagiarism Tolerance<br/><i>Copying = Immediate<br/>disqualification</i>"]
    RULES --> R5["5️⃣ Don't Share<br/><i>Never share materials or<br/>solutions with other teams</i>"]
    RULES --> R6["6️⃣ Data Backup<br/><i>YOU are responsible for<br/>backing up your files</i>"]
    RULES --> R7["7️⃣ Follow Guidelines<br/><i>Solutions must align with<br/>context docs & criteria</i>"]
    RULES --> R8["8️⃣ Code of Conduct<br/><i>Respect judges, mentors,<br/>organizers & participants</i>"]
    
    style RULES fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:3px
    style R1 fill:#fab1a0,stroke:#e17055,color:#333
    style R2 fill:#fab1a0,stroke:#e17055,color:#333
    style R3 fill:#fab1a0,stroke:#e17055,color:#333
    style R4 fill:#ff7675,stroke:#d63031,color:#fff
    style R5 fill:#fab1a0,stroke:#e17055,color:#333
    style R6 fill:#fab1a0,stroke:#e17055,color:#333
    style R7 fill:#fab1a0,stroke:#e17055,color:#333
    style R8 fill:#fab1a0,stroke:#e17055,color:#333
```

---

## 📋 Delegate Checklist (What to Bring)

### Must-Have Items:

```mermaid
graph LR
    subgraph MUST["✅ MUST-HAVE ITEMS"]
        direction TB
        I1["🪪 NIC<br/><i>National Identity Card</i>"]
        I2["📧 Registration Confirmation<br/><i>Digital copy</i>"]
        I3["💻 Laptop + Charger<br/><i>+ Required peripherals</i>"]
        I4["🔋 Portable Power Bank"]
        I5["🌐 Phase 2 Web Application<br/><i>Your development app</i>"]
        I6["☁️ Cloud Account<br/><i>AWS, GCP, or Azure</i><br/><b>⚠️ VERY IMPORTANT!</b>"]
    end
    
    style MUST fill:#dfe6e9,stroke:#636e72
    style I6 fill:#e74c3c,stroke:#c0392b,color:#fff,stroke-width:2px
```

### For On-site Phase (Phase 3):

- [ ] Arrive at NSBM Green University with time to spare for check-in
- [ ] Digital copy of team roster
- [ ] Organizing committee's contact details on hand

---

## 📞 Contact & Support

| Role                           | Name                 | Email                        |
| ------------------------------ | -------------------- | ---------------------------- |
| **Chairperson - Duothan 6.0**  | Janith Wathsala      | wathsala@ieeensbm.org        |
| **Chairwomen - Duothan 6.0**   | Dinithi Dias         | dinithi@ieeensbm.org         |
| **Chairperson - IEEE SB NSBM** | Dasun Sri Nethmal    | nethmalds@ieee.org           |
| **Chairperson - IEEE CS NSBM** | Kumuditha Ranasinghe | kumuditharanasinghe@ieee.org |
| **General Queries**            | —                    | duothan@ieeensbm.org         |

---

## 🔑 Key Takeaways

```mermaid
mindmap
  root["🔑 KEY TAKEAWAYS"]
    Not just coding
      Full DevOps lifecycle challenge
      Planning → Development → Deployment
    Skills needed
      Planning & Architecture
      Development & Security
      Deployment & Cloud
    Theme
      Rebuilding a banking system
      After a catastrophic cyber attack
    Architecture
      Microservices is MANDATORY
      Independent services required
    Cloud
      AWS / GCP / Azure account needed
      Set up BEFORE Phase 3
    Phase 1
      Design & Planning ONLY
      No coding required yet
    Eliminatory
      Must pass each phase
      To proceed to the next
```
