# Screen 6: Profile & Settings — Google Stitch Prompt

## Prompt:

Design a high-fidelity mobile profile and settings screen for "NexusVault" banking app. Dark theme. This screen manages user identity, KYC status, security preferences, and app settings.

### Screen Layout (Top to Bottom):

**Top Header:**
- Screen title: "Profile" in 22px Bold white, left-aligned
- Right side: ✏️ Edit icon in #3B82F6

**Profile Card (24px padding, 16px below header):**
- **Card:** Background #1E293B, rounded 16px, padding 20px
- **Layout:**
  - Left: Profile avatar — 64x64px circle, gradient border ring (#3B82F6 → #6366F1, 2px), containing user initials "SR" on gradient background OR a placeholder profile photo
  - Right of avatar (12px gap):
    - "Sandaru Ramanayake" in 18px Bold white
    - "sandaru@email.com" in 13px #94A3B8
    - "+94 771 234 567" in 13px #94A3B8
  - **KYC Badge:** Below the name, a small inline badge/pill:
    - Background: #10B981 at 15% opacity
    - Content: ✅ checkmark icon + "KYC Verified" in 12px Semibold #10B981
    - Rounded full pill, padding 4px 12px

**Account Overview Section (24px below):**
- Section label: "My Accounts" in 14px Semibold #64748B
- **Small horizontal scrollable account cards (2 visible):**
  
  Card 1:
  - Background: linear gradient (#3B82F6 → #2563EB), rounded 12px, padding 16px
  - "Savings Account" in 12px rgba(255,255,255,0.7)
  - "Rs. 1,250,000" in 20px Bold white
  - "**** 4532" in 12px rgba(255,255,255,0.5)
  - Width: ~65% of screen width

  Card 2:
  - Background: linear gradient (#6366F1 → #4F46E5), rounded 12px, padding 16px
  - "Current Account" in 12px rgba(255,255,255,0.7)
  - "Rs. 340,000" in 20px Bold white
  - "**** 8891" in 12px rgba(255,255,255,0.5)

**Settings Menu List (24px below):**
- Each menu item is a row:
  - Left: Icon in colored circle (36x36px, color at 15% opacity)
  - Center: Setting name in 15px Medium white
  - Right: Chevron (›) in #64748B, OR a status indicator
  - Bottom border: thin line #1E293B
  - Padding: 16px vertical, 24px horizontal
  - Full width tappable area

**Menu Items:**

1. **👤 Personal Information**
   - Icon: Person icon on #3B82F6 at 15% opacity circle
   - Label: "Personal Information"
   - Right: › chevron

2. **🔒 Security Settings**
   - Icon: Lock icon on #EF4444 at 15% opacity circle
   - Label: "Security Settings"
   - Right: Small pill badge "MFA: ON" in #10B981 on #10B981/15% bg + › chevron

3. **🔔 Notification Preferences**
   - Icon: Bell icon on #F59E0B at 15% opacity circle
   - Label: "Notifications"
   - Right: › chevron

4. **🌐 Language**
   - Icon: Globe icon on #8B5CF6 at 15% opacity circle
   - Label: "Language"
   - Right: "English" in 13px #94A3B8 + › chevron

5. **📄 Account Statements**
   - Icon: Document icon on #06B6D4 at 15% opacity circle
   - Label: "Account Statements"
   - Right: › chevron

6. **🛡️ Privacy & Data**
   - Icon: Shield icon on #10B981 at 15% opacity circle
   - Label: "Privacy & Data"
   - Right: › chevron

7. **❓ Help & Support**
   - Icon: Question mark icon on #64748B at 15% opacity circle
   - Label: "Help & Support"
   - Right: › chevron

**Logout Button (24px below menu):**
- Full width button (with 24px horizontal padding)
- Height: 48px
- Background: Transparent, border 1px #EF4444
- Text: "Log Out" in 15px Medium #EF4444, center-aligned
- Left icon: Logout/exit icon in #EF4444
- Rounded corners: 12px

**App Version (12px below, centered):**
- "NexusVault v1.0.0" in 12px #64748B

**Bottom Navigation Bar:** Same as dashboard. "Profile" tab is ACTIVE (icon filled #3B82F6, label #3B82F6).

### Design Keywords:
Profile settings, user account, KYC verified, security preferences, dark mode, banking settings, menu list, clean, organized, premium
