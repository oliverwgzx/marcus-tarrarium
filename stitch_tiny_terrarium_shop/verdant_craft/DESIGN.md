---
name: Verdant Craft
colors:
  surface: '#f8faf8'
  surface-dim: '#d8dad9'
  surface-bright: '#f8faf8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f2'
  surface-container: '#eceeec'
  surface-container-high: '#e6e9e7'
  surface-container-highest: '#e1e3e1'
  on-surface: '#191c1b'
  on-surface-variant: '#424843'
  inverse-surface: '#2e3130'
  inverse-on-surface: '#eff1ef'
  outline: '#737973'
  outline-variant: '#c2c8c2'
  surface-tint: '#4d6355'
  primary: '#051a0f'
  on-primary: '#ffffff'
  primary-container: '#1a2f23'
  on-primary-container: '#809787'
  inverse-primary: '#b4ccbb'
  secondary: '#556257'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3d5'
  on-secondary-container: '#59665b'
  tertiary: '#0f1902'
  on-tertiary: '#ffffff'
  tertiary-container: '#232e12'
  on-tertiary-container: '#899771'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e9d6'
  primary-fixed-dim: '#b4ccbb'
  on-primary-fixed: '#0a2014'
  on-primary-fixed-variant: '#364c3e'
  secondary-fixed: '#d8e6d8'
  secondary-fixed-dim: '#bccabd'
  on-secondary-fixed: '#131e16'
  on-secondary-fixed-variant: '#3d4a40'
  tertiary-fixed: '#dae8be'
  tertiary-fixed-dim: '#becca3'
  on-tertiary-fixed: '#141f05'
  on-tertiary-fixed-variant: '#3f4b2c'
  background: '#f8faf8'
  on-background: '#191c1b'
  surface-variant: '#e1e3e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 80px
  container-padding: 24px
  gutter: 24px
---

## Brand & Style

The design system is rooted in the intersection of botanical artistry and premium craftsmanship. It evokes the feeling of a quiet conservatory—intentional, breathable, and deeply connected to nature. The visual language balances the raw, organic textures of moss and earth with the refined precision of glass and high-end editorial typography.

The style is **Premium Minimalism with Tactile influence**. It leverages generous negative space to represent the "atmosphere" within a terrarium, while using subtle depth and soft transitions to mirror the layered ecosystems of the product. The goal is to create a serene user experience that honors the slow, deliberate pace of plant care.

## Colors

The palette is derived directly from forest floor biology.
- **Primary (Deep Forest):** Used for typography, primary branding, and high-impact containers. It provides the "soil" and grounding for the UI.
- **Secondary (Pale Moss):** A soft, desaturated green used for subtle backgrounds and grouping elements.
- **Tertiary (Sage Leaf):** Used for accents, success states, and decorative line work.
- **Neutral (Parchment White):** An off-white base that prevents the clinical feel of pure white, maintaining a warm, organic presence.

Apply color with high contrast in mind: dark primary text on light neutral backgrounds ensures readability and a classic editorial feel.

## Typography

This design system utilizes a high-contrast typographic pairing to signal luxury and clarity.
- **Headlines:** Use a high-contrast serif to reflect the "Skötselråd" editorial style. It should be used for all major section titles and product names.
- **Body:** Use a clean, contemporary sans-serif for high legibility. The generous line height (1.5x - 1.6x) is critical to maintaining the "calm" atmosphere.
- **Labels:** Small caps with increased letter spacing should be used for metadata (e.g., dimensions, species list) to provide a structured, scientific touch without feeling heavy.

## Layout & Spacing

The layout philosophy is a **Fixed Grid** with an emphasis on "White Space as a Feature." 
- **Desktop:** A 12-column grid with wide 80px margins to frame the content like a gallery piece.
- **Mobile:** A 4-column grid with 16px margins.
- **Rhythm:** Use an 8px base unit. Section spacing should be intentionally large (80px+) to allow the photography of the terrariums to "breathe" and serve as the primary visual interest. Content blocks should be centered or staggered to avoid a standard "corporate" symmetrical feel.

## Elevation & Depth

To mimic the clarity of glass and the softness of moss, depth is conveyed through:
- **Tonal Layering:** Surfaces should primarily use color shifts (e.g., a Pale Moss card on a Parchment White background) rather than heavy shadows.
- **Glassmorphism:** Use subtle backdrop blurs (10-16px) for navigation bars and overlays to reference the glass containers of the terrariums.
- **Ambient Shadows:** When depth is required (e.g., for elevated cards), use extremely diffused shadows: `0px 10px 30px rgba(26, 47, 35, 0.04)`. The shadow color should be a tinted version of the primary dark green, never pure black.

## Shapes

The shape language is organic and soft. Standard UI elements like buttons and input fields use a `0.5rem` radius to feel approachable. Large containers and featured product cards should use `rounded-xl` (1.5rem) to mimic the curved silhouettes of glass apothecary jars and bowls. Avoid sharp 90-degree angles to maintain the "natural" narrative.

## Components

- **Buttons:** Primary buttons use the Forest Green background with Parchment White text. The style is minimalist with no borders, relying on color and ample padding (16px 32px).
- **Cards:** Cards should have no borders. Use a subtle fill (Secondary color) or an ambient shadow to define the boundary. Images within cards should always have the same corner radius as the container.
- **Input Fields:** Use "ghost" inputs—a bottom border only (1px Forest Green at 20% opacity) that becomes solid on focus. This mimics a clean, minimalist botanical shop.
- **Chips/Tags:** Small, pill-shaped tags used for plant requirements (e.g., "Low Light", "High Humidity"). Use Tertiary color backgrounds with Forest Green text.
- **Iconography:** Use fine-line icons (1px weight) that match the logo's hand-drawn, botanical illustration style. Icons should be encased in circular containers to echo the brand mark.