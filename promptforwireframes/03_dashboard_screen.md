# Screen 3: Dashboard / Home — Google Stitch Prompt

## Prompt:

Design a high-fidelity mobile dashboard/home screen for "NexusVault" banking app. Dark theme, premium fintech aesthetic. This is the PRIMARY screen users see after login — it must be visually stunning, informative, and easy to navigate.

### Screen Layout (Top to Bottom):

**Status Bar:** Standard iOS/Android status bar

**Top Header Section (Padding: 24px horizontal, 16px top):**
- **Left side:**
  - "Good Morning," in 14px Regular #94A3B8
  - "Sandaru 👋" in 22px Bold white (on next line)
- **Right side:**
  - Notification bell icon (🔔) in white, 24px
  - Small red notification badge (circle) overlapping top-right of bell, showing "3" in 10px bold white text on #EF4444 background

**Balance Card (Hero Element — 24px horizontal padding):**
- **Card dimensions:** Full width (minus padding), ~180px height
- **Card background:** Gradient from #3B82F6 (left) to #6366F1 (right), with a subtle wave or mesh pattern overlay at 10% opacity for depth
- **Card corners:** 20px rounded
- **Card shadow:** 0 8px 32px rgba(59,130,246,0.3) — blue glow effect
- **Card content:**
  - Top-left: "Savings Account" in 13px Medium rgba(255,255,255,0.7)
  - Top-right: Eye icon (👁️) in rgba(255,255,255,0.7) — toggle to hide balance + small 🔒 lock icon
  - Center: "Rs. 1,250,000.00" in 34px Extra Bold white (this is THE focal point)
  - Below balance: "**** **** **** 4532" in 13px Regular rgba(255,255,255,0.6)
  - Bottom-left: Small NexusVault mini logo (white, 16px)
  - Bottom-right: "VISA" or card network logo in white, small

- **Card Indicator Dots:** Below the card, 3 small dots (●○○) indicating multiple accounts can be swiped through. Active dot = white, inactive = #64748B

**Quick Actions Section (16px below card):**
- Section title: "Quick Actions" in 16px Semibold white, left-aligned
- **4 action buttons in a row (equal spacing):**

  1. **Send Money**
     - Circular icon container: 56x56px, background #1E293B, border 1px #334155, rounded full circle
     - Icon: ↗️ Send/arrow-up-right icon in #3B82F6, 24px
     - Label below: "Send" in 12px Medium #94A3B8
  
  2. **Receive**
     - Same circular style
     - Icon: ↙️ Receive/arrow-down-left icon in #10B981 (green), 24px
     - Label: "Receive"
  
  3. **Pay Bills**
     - Same circular style
     - Icon: 📄 Receipt/document icon in #F59E0B (amber), 24px
     - Label: "Pay Bills"
  
  4. **QR Pay**
     - Same circular style
     - Icon: QR code icon in #8B5CF6 (purple), 24px
     - Label: "QR Pay"

**Recent Transactions Section (24px below quick actions):**
- **Header row:**
  - Left: "Recent Transactions" in 16px Semibold white
  - Right: "See All →" in 13px Medium #3B82F6 (tappable link)

- **Transaction List (3 items):**
  Each transaction is a row/card:
  - Background: #1E293B, rounded 12px, padding 16px, margin-bottom 8px
  - Layout: [Icon] [Name + Category] [Amount + Time]
  
  **Transaction 1:**
  - Left: Red circle (40x40px, #EF4444 at 15% opacity) with Netflix "N" icon or play icon inside
  - Middle:
    - "Netflix Subscription" in 15px Medium white
    - "Entertainment" in 12px #64748B
  - Right:
    - "-Rs. 2,500.00" in 15px Semibold #EF4444 (red = debit)
    - "Today, 2:30 PM" in 11px #64748B

  **Transaction 2:**
  - Left: Green circle (40x40px, #10B981 at 15% opacity) with briefcase/building icon
  - Middle:
    - "Salary Credit" in 15px Medium white
    - "Income" in 12px #64748B
  - Right:
    - "+Rs. 85,000.00" in 15px Semibold #10B981 (green = credit)
    - "Yesterday" in 11px #64748B

  **Transaction 3:**
  - Left: Blue circle (40x40px, #3B82F6 at 15% opacity) with person/user icon
  - Middle:
    - "John Perera" in 15px Medium white
    - "P2P Transfer" in 12px #64748B
  - Right:
    - "-Rs. 5,000.00" in 15px Semibold #EF4444
    - "18 Jul" in 11px #64748B

**Bottom Navigation Bar:**
- Background: #0F172A with top border 1px #1E293B
- Height: 64px (plus safe area)
- 5 tabs equally spaced:
  1. 🏠 Home — Icon filled in #3B82F6, label "Home" in 11px #3B82F6 (ACTIVE state)
  2. 💰 Transactions — Outline icon in #64748B, label in #64748B
  3. 📷 QR Scan — **Center elevated circular button**: 56x56px circle, gradient background (#3B82F6 → #6366F1), QR/scan icon in white, elevated above the nav bar by 16px, with subtle glow shadow
  4. 💳 Cards — Outline icon in #64748B, label in #64748B
  5. 👤 Profile — Outline icon in #64748B, label in #64748B

### Design Keywords:
Premium fintech dashboard, dark mode, glassmorphism balance card, gradient, modern banking, clean layout, professional, trust indicators, sleek UI
