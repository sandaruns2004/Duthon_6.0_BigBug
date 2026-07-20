# NexusVault — Master Design System Prompt

> Paste this FIRST into Google Stitch to establish the overall design language before generating individual screens.

---

## Prompt:

Design a premium, high-fidelity mobile banking app UI called **"NexusVault"** — a next-generation secure digital banking platform rebuilt after a massive global cyberattack in the year 2065. The design must communicate trust, security, and modern fintech excellence.

### Brand Identity
- **App Name:** NexusVault
- **Tagline:** "Your Finances. Fortified."
- **Logo Concept:** A stylized "N" integrated with a shield/vault lock icon
- **Brand Personality:** Secure, modern, trustworthy, premium, futuristic

### Color Palette (STRICT)
- **Primary Background:** #0F172A (deep dark navy)
- **Secondary Background:** #1E293B (dark slate for cards)
- **Card Surface:** #1E3A5F with slight transparency/glassmorphism
- **Primary Accent:** #3B82F6 (electric blue — buttons, active states)
- **Secondary Accent:** #6366F1 (indigo — gradients, highlights)
- **Success/Credits:** #10B981 (emerald green)
- **Error/Debits:** #EF4444 (red)
- **Warning/Pending:** #F59E0B (amber)
- **Primary Text:** #FFFFFF (white)
- **Secondary Text:** #94A3B8 (cool gray)
- **Muted Text:** #64748B (slate)
- **Gradient Hero:** Linear gradient from #3B82F6 to #6366F1 (for balance card, primary buttons)

### Typography
- **Font Family:** Inter or SF Pro Display (clean, modern sans-serif)
- **Balance Display:** 36px, Extra Bold, White
- **Screen Titles:** 24px, Bold, White
- **Section Headers:** 18px, Semibold, White
- **Body Text:** 15px, Regular, #94A3B8
- **Button Text:** 16px, Semibold, White
- **Captions/Labels:** 12px, Medium, #64748B
- **Numbers/Amounts:** Use tabular (monospaced) number figures

### Design Style
- **Theme:** Dark mode throughout (critical for trust in banking)
- **Cards:** Rounded corners (16px radius), subtle elevation shadow, slight glassmorphism (background blur + semi-transparency)
- **Buttons:** Rounded (12px radius), gradient fill for primary (#3B82F6 → #6366F1), subtle glow/shadow
- **Icons:** Outlined style, 24px, consistent 1.5px stroke weight, white or accent colored
- **Spacing:** 16px base grid, 24px section spacing, 12px element spacing
- **Touch Targets:** Minimum 44x44px for all interactive elements (accessibility requirement)
- **Animations:** Subtle micro-interactions — button press scales, card hover lifts, smooth page transitions

### Security Visual Elements (MUST INCLUDE)
- 🔒 Small lock icon next to sensitive data fields
- 🛡️ Shield icon on security-related screens
- ✅ Green "Verified" badge for KYC status
- Encryption badge: a small pill/tag reading "🔒 Secured by TLS 1.3" at bottom of auth screens
- "End-to-end encrypted" label during financial transactions
- Subtle shield watermark in background of login/MFA screens

### Mobile Frame
- **Device:** iPhone 15 Pro frame (or frameless modern smartphone)
- **Screen Size:** 393 x 852px (standard)
- **Status Bar:** Show time, signal, battery (standard iOS/Android)
- **Safe Areas:** Respect top notch and bottom home indicator

### Bottom Navigation Bar (consistent across all customer screens)
5 tabs with icons + labels:
1. 🏠 Home (filled when active)
2. 💰 Transactions
3. 📷 QR Scan (center, larger, circular accent button)
4. 💳 Cards
5. 👤 Profile

Active tab: Electric blue icon + label. Inactive: Gray (#64748B) icon + label.
