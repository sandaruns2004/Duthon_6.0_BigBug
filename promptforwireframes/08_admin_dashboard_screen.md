# Screen 8: Admin Dashboard (Web/Desktop) — Google Stitch Prompt

## Prompt:

Design a high-fidelity **web/desktop** admin dashboard for "NexusVault" banking platform. Dark theme. This is a system administration panel for monitoring platform health, managing users, and reviewing fraud alerts. **This is a DESKTOP layout (1440x900px), NOT mobile.**

### Screen Layout:

**Overall Layout:**
- **Left Sidebar:** 260px wide, full height
- **Main Content Area:** Remaining width
- Background: #0F172A (deep navy) for both sidebar and content

---

**LEFT SIDEBAR:**

- **Top: Logo Section (padding 24px)**
  - NexusVault shield logo (32px) + "NexusVault" text in 18px Bold white
  - Below: "Admin Portal" in 12px #64748B

- **Admin Profile (below logo, padding 24px):**
  - Small avatar (36px circle, gradient bg) with initials "AS"
  - "Admin Sandaru" in 14px Medium white
  - "Super Admin" in 12px #3B82F6
  - Online status: small green dot (8px) next to name

- **Navigation Menu (24px below):**
  Each item: 44px height, 24px left padding, full sidebar width
  Active item: Background #3B82F6 at 15% opacity, left border 3px #3B82F6, text white
  Inactive item: No background, text #94A3B8
  Hover: Background #1E293B

  Menu items (with icons on left, 20px):
  1. 📊 **Dashboard** — ACTIVE (highlighted)
  2. 👥 **Users** — with count badge "148K" in small pill
  3. 💰 **Transactions**
  4. 🖥️ **System Health**
  5. 🚨 **Fraud Alerts** — with red badge "7" indicating pending alerts
  6. 📝 **Audit Logs**
  7. 📄 **Reports**
  8. ⚙️ **Settings**

- **Bottom of Sidebar:**
  - Thin divider (#1E293B)
  - 🚪 "Log Out" in 14px #EF4444, padding 24px

---

**MAIN CONTENT AREA:**

**Top Bar (full width of content area, height 64px, padding 24px horizontal):**
- Left: "Dashboard Overview" in 24px Bold white
- Center: Date display "20 July 2065, 7:38 PM" in 14px #94A3B8
- Right side:
  - 🔍 Search icon in #64748B
  - 🔔 Notification bell with red badge "12"
  - Small admin avatar (32px)

---

**KPI Metric Cards Row (4 cards, equal width, 16px gap):**

Each card: Background #1E293B, rounded 16px, padding 20px, height ~110px

**Card 1: Active Users**
- Top: 👥 User icon in blue circle (36px, #3B82F6 at 15% opacity)
- Label: "Active Users" in 13px #94A3B8
- Value: "148,392" in 28px Bold white
- Bottom: Small green pill → "↑ 12.5%" in 12px #10B981 + "vs last week" in 12px #64748B

**Card 2: Transaction Volume**
- Top: 💰 Money icon in green circle (36px, #10B981 at 15% opacity)
- Label: "Transactions Today" in 13px #94A3B8
- Value: "Rs. 2.4M" in 28px Bold white
- Bottom: Green pill → "↑ 8.3%" + "vs yesterday"

**Card 3: System Uptime**
- Top: 🖥️ Server icon in emerald circle (36px, #10B981 at 15% opacity)
- Label: "System Uptime" in 13px #94A3B8
- Value: "99.99%" in 28px Bold #10B981 (green to emphasize reliability)
- Bottom: ✅ "All 15 services healthy" in 12px #10B981

**Card 4: Fraud Alerts**
- Top: 🚨 Alert icon in red circle (36px, #EF4444 at 15% opacity)
- Label: "Fraud Alerts" in 13px #94A3B8
- Value: "7" in 28px Bold #F59E0B (amber — warning level)
- Bottom: Green pill → "↓ 23%" in 12px #10B981 + "vs last week"

---

**Charts Row (2 charts side by side, 16px gap, 16px below KPI cards):**

**Chart 1 (60% width): Transaction Volume — Line Chart**
- Card: Background #1E293B, rounded 16px, padding 20px
- Title: "Transaction Volume" in 16px Semibold white
- Subtitle: "Last 7 days" in 12px #64748B
- Right of title: Toggle buttons → "Daily | Weekly | Monthly" (Daily active in #3B82F6)
- Chart: Smooth line chart with gradient fill below the line
  - Line color: #3B82F6 (electric blue)
  - Fill: Gradient from #3B82F6 at 30% opacity to transparent
  - X-axis: Mon, Tue, Wed, Thu, Fri, Sat, Sun (in #64748B)
  - Y-axis: 0, 500K, 1M, 1.5M, 2M, 2.5M (in #64748B)
  - Grid lines: #1E293B (very subtle)
  - Data showing an upward trend with a peak on Friday
  - Highlighted point on "Today" with tooltip showing "Rs. 2.4M"

**Chart 2 (40% width): Service Health — Status Grid**
- Card: Background #1E293B, rounded 16px, padding 20px
- Title: "Service Health" in 16px Semibold white
- Grid of service status indicators (5 rows × 3 columns):
  Each item: Small colored dot (10px) + Service name in 13px

  All GREEN (●) #10B981:
  - Auth Service ● | OTP Service ● | User Service ●
  - Account Service ● | Transaction Service ● | Payment Service ●
  - Loan Service ● | Fraud Detection ● | Notification Service ●
  - Email Service ● | SMS Gateway ● | Audit Service ●
  - Admin Service ● | Scheduler Service ● | Document Service ●

  (Show all 15 services as healthy/green — this maps directly to the 15 microservices in the architecture)

---

**Recent Alerts Table (16px below charts, full content width):**

- Card: Background #1E293B, rounded 16px, padding 20px
- **Header row:** "Recent Alerts" in 16px Semibold white (left) + "View All →" in 13px #3B82F6 (right)

**Table:**
- Column headers: Time | Type | Description | Severity | Status | Action
- Header text: 12px Semibold #64748B, uppercase
- Row dividers: 1px #0F172A
- Row padding: 14px vertical
- Row hover: #0F172A background

Row 1:
- Time: "7:32 PM" in 13px #94A3B8
- Type: "🚨 Fraud" with red dot
- Description: "Unusual login pattern detected for user #89421 — 3 countries in 1 hour" in 13px white
- Severity: Red pill "HIGH" (#EF4444 bg at 20%, text #EF4444)
- Status: Yellow pill "PENDING" (#F59E0B bg at 20%, text #F59E0B)
- Action: "Review" button, small, outlined #3B82F6

Row 2:
- Time: "6:15 PM"
- Type: "⚠️ System"
- Description: "Transaction Service response time exceeded 200ms threshold" in 13px white
- Severity: Amber pill "MEDIUM"
- Status: Green pill "RESOLVED" (#10B981)
- Action: "Details"

Row 3:
- Time: "4:00 PM"
- Type: "🔒 Security"
- Description: "5 failed login attempts for account ending ****7821 — account locked" in 13px white
- Severity: Amber pill "MEDIUM"
- Status: Green pill "AUTO-RESOLVED"
- Action: "Details"

Row 4:
- Time: "2:30 PM"
- Type: "🚨 Fraud"
- Description: "Large transaction Rs. 500,000 flagged for review — user #34201" in 13px white
- Severity: Red pill "HIGH"
- Status: Yellow pill "PENDING"
- Action: "Review"

### Design Keywords:
Admin panel, system dashboard, dark mode, web application, desktop layout, data visualization, monitoring, real-time metrics, line chart, service health grid, alerts table, enterprise banking admin, premium dark UI
