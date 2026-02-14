

# Real Estate Money Blueprint – Landing Page

A high-converting, ultra-simple landing page designed to drive WhatsApp group signups. Clean, professional, no images, pure conversion-focused design.

---

## Page Structure

### 1. Header
- Logo on the left (`logo.png` from public folder)
- **"Sign Up Now"** CTA button on the top right → links to WhatsApp group
- Clean white background, sticky on scroll

### 2. Hero Section
- Bold headline: *"If You've Ever Dreamed of Building Wealth..."*
- Subheadline about the secret strategy realtors use
- Supporting paragraph + 3 pain-point bullet points
- Standout closing line: *"Then this training is for you"*
- **"Sign Up Now"** CTA button with pulse animation + animated bouncing arrow
- **Countdown timer** (DD:HH:MM:SS) counting down from 3 days, positioned right near the CTA

### 3. Benefits Section
- Headline: *"WHAT DO YOU GET FROM REAL ESTATE MONEY BLUEPRINT"*
- Intro line + 6 clean bullet points covering training, networking, commissions, certification, and rewards
- **"Sign Up Now"** CTA button after the benefits

### 4. Final CTA Section
- Urgency copy: *"Only 100 seats are reserved, so join now"*
- Final **"Sign Up Now"** CTA button

---

## Design & Style
- **No images or stock photos** – text-only, clean and direct
- Off-white / milk-white background with generous whitespace
- System font stack (Poppins-like feel without CDN)
- Deep green CTA buttons with white text, rounded corners, subtle pulse animation
- Professional real estate color palette
- Fully mobile-responsive, centered content with max-width container

## Technical Details
- All 4 CTA buttons link **only** to the WhatsApp group
- **No other clickable links** on the page
- Countdown timer uses vanilla JS logic (via React `useEffect`), counts down 3 days from first visit
- Single-page, lightweight, fast-loading

