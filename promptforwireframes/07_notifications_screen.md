# Screen 7: Notifications — Google Stitch Prompt

## Prompt:

Design a high-fidelity mobile notifications screen for "NexusVault" banking app. Dark theme. This screen displays transaction alerts, security events, and system notifications across multiple channels.

### Screen Layout (Top to Bottom):

**Top Header (24px padding):**
- Screen title: "Notifications" in 22px Bold white, left-aligned
- Right side: "Mark all read" in 13px Medium #3B82F6 (tappable)

**Filter Tabs (16px below header):**
- Full width tab bar with 4 tabs, equally spaced:
  1. **"All"** — ACTIVE: text #3B82F6, bottom border 2px #3B82F6
  2. **"Transactions"** — Inactive: text #64748B, no bottom border
  3. **"Security"** — Inactive: text #64748B, small red dot badge (indicating unread security alerts)
  4. **"System"** — Inactive: text #64748B
- Tab text: 14px Medium
- Tab bar bottom border: 1px #1E293B (full width)

**Notification List (16px below tabs):**

Each notification is a card/row:
- Padding: 16px horizontal, 14px vertical
- Left: Category icon in colored circle (40x40px)
- Center: Title (bold) + Description + Timestamp
- Right (if unread): Small colored dot (8px circle)
- Background: Subtle #1E293B for unread items, transparent for read items
- Bottom divider: 1px #1E293B (thin line)

**Notification 1 (UNREAD — high priority):**
- 🔴 Unread dot on right side
- Left icon: 🚨 Warning/alert triangle icon on #EF4444 at 15% opacity circle
- **"Security Alert"** in 15px Semibold white
- "New device login detected from Colombo, Sri Lanka. If this wasn't you, secure your account immediately." in 13px #94A3B8 (2 lines max, truncated)
- "2 minutes ago" in 11px #64748B
- **"Review →"** small action link in #3B82F6, 12px

**Notification 2 (UNREAD):**
- 🟢 Green unread dot
- Left icon: 💰 Money/arrow-up icon on #10B981 at 15% opacity circle
- **"Payment Received"** in 15px Semibold white
- "Salary credited: +Rs. 85,000.00 to Savings Account ****4532" in 13px #94A3B8
- "1 hour ago" in 11px #64748B

**Notification 3 (UNREAD):**
- 🔵 Blue unread dot
- Left icon: 💸 Send/arrow icon on #3B82F6 at 15% opacity circle
- **"Transfer Complete"** in 15px Semibold white
- "Rs. 5,000.00 sent to John Perera successfully. Ref: NV20650720-4521" in 13px #94A3B8
- "3 hours ago" in 11px #64748B

**Notification 4 (READ — dimmed):**
- No unread dot
- Left icon: 🔒 Lock icon on #F59E0B at 15% opacity circle
- **"Password Changed"** in 15px Medium #94A3B8 (slightly dimmed since read)
- "Your password was changed successfully. If this wasn't you, contact support." in 13px #64748B
- "Yesterday, 4:30 PM" in 11px #64748B

**Notification 5 (READ):**
- No unread dot
- Left icon: ⚙️ Gear icon on #64748B at 15% opacity circle
- **"Scheduled Maintenance"** in 15px Medium #94A3B8
- "System maintenance planned for 23 Jul, 2:00-4:00 AM. Services may be briefly unavailable." in 13px #64748B
- "2 days ago" in 11px #64748B

**Notification 6 (READ):**
- No unread dot
- Left icon: 📄 Receipt icon on #3B82F6 at 15% opacity circle
- **"Bill Payment"** in 15px Medium #94A3B8
- "Dialog bill payment of Rs. 1,200.00 processed successfully." in 13px #64748B
- "3 days ago" in 11px #64748B

**Empty State (show if needed for reference):**
- If no notifications: Large bell icon in #1E293B (48px), "All caught up!" in 18px Semibold #94A3B8, "You have no new notifications" in 14px #64748B

**Bottom Navigation Bar:** Same as dashboard. No specific tab highlighted for notifications (could be accessed via bell icon from dashboard).

### Design Keywords:
Notification center, alerts, security warnings, transaction alerts, dark mode, banking notifications, unread indicators, categorized, multi-channel alerts
