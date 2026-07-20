# Screen 4: Send Money / Transfer — Google Stitch Prompt

## Prompt:

Design a high-fidelity mobile send money / fund transfer screen for "NexusVault" banking app. Dark theme. This is the core transaction screen — it must feel fast, secure, and require minimal steps.

### Screen Layout (Top to Bottom):

**Top Header:**
- Back arrow (←) in white, top-left
- Screen title: "Send Money" in 20px Bold white, center-aligned
- Right side: Small 🔒 lock icon in #3B82F6 (indicates encrypted transfer)

**From Account Section (24px padding):**
- Label: "From" in 13px Medium #64748B, left-aligned
- **Account Selector Card:**
  - Background: #1E293B, rounded 12px, padding 16px
  - Left: Small bank/wallet icon in #3B82F6
  - Middle:
    - "Savings Account" in 15px Medium white
    - "Balance: Rs. 1,250,000.00" in 13px #94A3B8
  - Right: Chevron down (▼) icon in #64748B (indicating dropdown to select different account)

**Recent Recipients Section (16px below):**
- Label: "Recent Recipients" in 14px Medium #94A3B8, left-aligned
- **Horizontal scrollable row of 4-5 recipient avatars:**
  - Each: 56px circle with person's initials or avatar photo
  - Gradient backgrounds (different colors for each: blue, green, purple, amber)
  - Name below each: 11px Medium #94A3B8 (e.g., "Kavindi", "John", "Nimasha", "Ashan", "+ Add")
  - Last circle: Dashed border (#334155), "+" icon inside, label "Add New"

**Recipient Input (16px below):**
- Label: "To" in 13px Medium #64748B
- **Input field:**
  - Background: #1E293B, border 1px #334155, rounded 12px, height 52px
  - Left icon: 👤 person icon in #64748B
  - Placeholder: "Account number, phone, or name" in #64748B
  - Right icon: 📋 paste icon or 📷 QR scan icon in #3B82F6

**Amount Input (24px below — this is the focal point):**
- Label: "Amount" in 13px Medium #64748B
- **Large amount display area:**
  - Background: #1E293B, rounded 16px, padding 24px, center-aligned
  - Currency prefix: "Rs." in 20px Regular #64748B
  - Amount: "15,000" in 40px Extra Bold white (large, prominent)
  - Thin underline or border-bottom (#334155) below the number
  - Below: Small text "≈ $45.00 USD" in 12px #64748B (optional currency conversion)

**Note Field (16px below):**
- **Input field:**
  - Background: #1E293B, border 1px #334155, rounded 12px, height 48px
  - Left icon: 📝 note icon in #64748B
  - Placeholder: "Add a note (optional)" in #64748B

**Transfer Summary (16px below):**
- Small card/section with transparent background:
  - Row 1: "Transfer Fee" (left, 14px #94A3B8) — "Rs. 0.00" (right, 14px #10B981 green, with "FREE" tag)
  - Thin divider line (#1E293B)
  - Row 2: "Total Amount" (left, 14px Semibold white) — "Rs. 15,000.00" (right, 16px Bold white)

**Send Button (24px below):**
- **Full width button:**
  - Height: 56px
  - Background: Linear gradient (#3B82F6 → #6366F1)
  - Text: "Send Rs. 15,000.00" in 16px Semibold white
  - Right icon: ➤ send arrow in white
  - Rounded corners: 14px
  - Subtle blue glow shadow (0 4px 20px rgba(59,130,246,0.4))

**Security Footer (12px below button):**
- Center-aligned: 🔒 icon + "End-to-end encrypted transfer" in 12px #64748B
- Small shield badge

**Bottom Navigation Bar:** Same as dashboard screen (Transactions tab not active, no specific tab highlighted or Home still active).

### Design Keywords:
Fund transfer, payment, dark mode banking, minimal steps, secure transaction, encryption indicators, premium fintech, clean form UI
