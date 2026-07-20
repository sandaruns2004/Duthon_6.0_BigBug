# Screen 5: Transaction History — Google Stitch Prompt

## Prompt:

Design a high-fidelity mobile transaction history screen for "NexusVault" banking app. Dark theme. This screen shows a complete, searchable, filterable record of all financial transactions.

### Screen Layout (Top to Bottom):

**Top Header (24px padding):**
- Screen title: "Transactions" in 22px Bold white, left-aligned
- Right side: 📥 Download icon in #3B82F6 (for PDF statement export)

**Search Bar (16px below header):**
- Full width input field
- Background: #1E293B, border 1px #334155, rounded 12px, height 44px
- Left icon: 🔍 Search magnifying glass in #64748B
- Placeholder: "Search transactions..." in #64748B
- Right icon: Small filter/sliders icon in #64748B

**Filter Chips (12px below search):**
- Horizontal scrollable row of filter chips/pills:
  1. **"All"** — ACTIVE state: background #3B82F6, text white, rounded full pill
  2. **"Credits"** — Inactive: background #1E293B, border 1px #334155, text #94A3B8, rounded full pill
  3. **"Debits"** — Inactive: same styling
  4. **"Bills"** — Inactive: same styling
  5. **"P2P"** — Inactive: same styling
- Each chip: height 32px, horizontal padding 16px, 8px gap between chips

**Monthly Summary Card (16px below filters):**
- Small card: background #1E293B, rounded 12px, padding 16px
- Row layout:
  - Left column: "Income" label in 12px #64748B → "+Rs. 142,500.00" in 16px Semibold #10B981
  - Center: Thin vertical divider (#334155)
  - Right column: "Expenses" label in 12px #64748B → "-Rs. 47,800.00" in 16px Semibold #EF4444
- Bottom: Thin progress bar showing income vs. expenses ratio (green portion larger than red)

**Transaction List (16px below, grouped by date):**

**Date Header: "Today — 20 July 2065"**
- Text: 13px Semibold #64748B, left-aligned
- Thin line (#1E293B) extending to the right

  **Transaction Row 1:**
  - Background: Transparent or very subtle #1E293B on hover
  - Padding: 16px horizontal, 14px vertical
  - Left: Category icon circle (40x40px)
    - 🚗 Car icon on #8B5CF6 at 15% opacity background → purple tint
  - Center column:
    - "Uber Ride" in 15px Medium white
    - "Transportation · 3:45 PM" in 12px #64748B
  - Right column:
    - "-Rs. 450.00" in 15px Semibold #EF4444
  
  **Transaction Row 2:**
  - Left: 💼 Briefcase icon on #10B981 at 15% opacity → green tint
  - Center: "Salary Credit" / "Income · 9:00 AM" 
  - Right: "+Rs. 85,000.00" in #10B981

  **Transaction Row 3:**
  - Left: 📱 Phone icon on #3B82F6 at 15% opacity → blue tint
  - Center: "Dialog Bill Payment" / "Utilities · 11:20 AM"
  - Right: "-Rs. 1,200.00" in #EF4444

**Date Header: "Yesterday — 19 July 2065"**

  **Transaction Row 4:**
  - Left: 👤 Person icon on #F59E0B at 15% opacity → amber tint
  - Center: "Kavindi Perera" / "P2P Transfer · 6:15 PM"
  - Right: "+Rs. 3,000.00" in #10B981

  **Transaction Row 5:**
  - Left: 🛒 Shopping cart icon on #EC4899 at 15% opacity → pink tint
  - Center: "Keells Supermarket" / "Shopping · 2:30 PM"
  - Right: "-Rs. 4,500.00" in #EF4444

**Date Header: "18 July 2065"**

  **Transaction Row 6:**
  - Left: 🎬 Play icon on #EF4444 at 15% opacity → red tint
  - Center: "Netflix Subscription" / "Entertainment · 12:00 AM"
  - Right: "-Rs. 2,500.00" in #EF4444

  **Transaction Row 7:**
  - Left: ⚡ Lightning icon on #F59E0B at 15% opacity → amber tint
  - Center: "CEB Electricity" / "Utilities · 10:00 AM"
  - Right: "-Rs. 3,200.00" in #EF4444

**Bottom Navigation Bar:** Same as dashboard. "Transactions" tab is NOW ACTIVE (icon filled #3B82F6, label #3B82F6).

### Design Keywords:
Transaction list, financial history, dark mode, color-coded amounts, searchable, filterable, grouped by date, banking records, clean UI, categorized
