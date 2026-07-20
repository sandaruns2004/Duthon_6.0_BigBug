# Screen 2: MFA Verification — Google Stitch Prompt (FIXED)

## Prompt:

Design a high-fidelity mobile MFA verification screen for "NexusVault" banking app. Dark navy background (#0F172A). The content must be vertically distributed across the FULL screen height — no empty space at the bottom.

### Full Screen Layout (top to bottom, filling the entire screen):

**Top area:**
- Back arrow (←) in white, top-left
- Small pill badge at top center: "SECURE LOGIN" in 11px uppercase #64748B on #1E293B background

**Upper section (centered, 25% down from top):**
- Large shield icon (80px) with a checkmark inside, blue-to-purple gradient (#3B82F6 → #6366F1), with a subtle glow ring around it
- Below shield: "Verify Your Identity" in 24px Bold white
- Below title: "We've sent a 6-digit verification code to" in 14px #94A3B8
- Phone number: "+94 7XX XXX X34" in 15px Semibold white

**Middle section:**
- 6 individual OTP digit boxes in a row (each 48x56px, dark card background #1E293B, rounded 12px)
- First 3 filled with "4", "2", "9" — 4th box has blinking cursor (active state with blue border #3B82F6) — last 2 empty
- Below boxes: "Didn't receive the code? Resend in 00:42" in 14px #94A3B8 (timer part in #3B82F6 bold)

**Lower section (this MUST be visible, not cut off):**
- "Verify" button: Full width, 52px height, gradient background (#3B82F6 → #6366F1), "Verify" in 16px Semibold white, rounded 12px, subtle blue glow shadow

- 16px gap below Verify button

- "Use Biometrics Instead" button: Full width, 48px height, transparent background with 1px border #334155, fingerprint icon in #3B82F6 on the left + text "Use Biometrics Instead" in 14px white, rounded 12px

- 16px gap

- Horizontal divider line (#1E293B) with small lock icon centered on it

- 16px gap

- Security info card at the bottom: Small card with background #1E293B, rounded 12px, padding 16px, full width. Inside:
  - Row 1: Shield icon + "Protected by Multi-Factor Authentication" in 13px Semibold white
  - Row 2: "Your account requires two-step verification for every login to prevent unauthorized access." in 12px #64748B
  
- 12px gap

- Footer text: "🔒 Secured by TLS 1.3 · AES-256 Encrypted" in 11px #64748B, center-aligned

**No bottom navigation bar** (user is not logged in yet).

**IMPORTANT: The entire screen must be filled. Distribute the content vertically so there is NO large empty space anywhere. The biometrics button, security card, and encryption footer must all be visible at the bottom half of the screen.**

### Design Keywords:
Security verification, OTP input, dark mode, banking, trust, shield, fingerprint biometrics, full screen layout, no empty space, premium fintech, clean
