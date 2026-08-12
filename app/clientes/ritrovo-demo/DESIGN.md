# Design System Document: San Marino Heritage Editorial

## 1. Overview & Creative North Star: "The Heritage Chronicler"
The creative direction for this design system is **"The Heritage Chronicler."** Unlike standard restaurant templates that rely on sterile grids and high-contrast lines, this system treats the digital interface as a tactile, living menu—an archival piece of San Marino history. 

We break the "template" look through **intentional asymmetry** and **tonal depth**. Layouts should feel like a well-composed editorial spread: overlapping high-resolution imagery of rustic textures (linen, flour, aged wood) with elegant typography. By using the spacing scale to create generous "breathing rooms," we signal a premium, unhurried dining experience that has been refined since 1977.

---

## 2. Colors & Atmospheric Depth
Our palette is rooted in the earth and the cellar. We move away from digital "pure" colors toward a "pigment-based" philosophy.

*   **Primary (#5b0309):** A deep, aged Vin Santo red used for brand moments and high-level interaction.
*   **Secondary (#705a4f):** A roasted espresso brown that grounds the interface.
*   **Tertiary (#1f2e00):** A cold-pressed olive green used sparingly for organic accents and "Freshness" indicators.
*   **Neutral (Surface Tiers):** Ranging from `surface-container-lowest` (#ffffff) to `surface-dim` (#dddad1), these represent the varying weights of handmade paper.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. We define boundaries through **Background Color Shifts**. For example, a "Chef's Specials" section in `surface-container-low` should sit directly against a `background` (#fdf9f0) canvas. The transition should be felt, not seen.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of parchment. 
- **The Base:** `background` (#fdf9f0).
- **The Content Plate:** `surface-container` (#f1eee5) for main cards.
- **The Interactive Layer:** `surface-container-highest` (#e6e2d9) for hovered states or active selection.

### The "Glass & Gradient" Rule
To add "soul," use subtle radial gradients on Hero backgrounds transitioning from `primary` (#5b0309) to `primary-container` (#7a1c1c). For mobile navigation or floating reservation bars, utilize **Glassmorphism**: `surface-container-lowest` at 85% opacity with a `20px` backdrop-blur to mimic frosted stemware.

---

## 3. Typography: The Italian Serif
The typography system balances the authoritative weight of Italian tradition with the modern legibility required for digital menus.

*   **Display & Headline (Noto Serif):** This is our "Signature." Use `display-lg` (3.5rem) for hero statements. Headlines should feel editorial—use asymmetrical alignment (e.g., left-aligned header with a right-aligned sub-header) to break the "standard" feel.
*   **Body & Labels (Be Vietnam Pro):** A soft, humanist sans-serif. We use `body-lg` (1rem) for descriptions to ensure accessibility for all generations of patrons. 
*   **The Hierarchy Goal:** Headlines command respect and tell a story; body text provides the warm, welcoming details of the family-run heritage.

---

## 4. Elevation & Depth: Tonal Layering
We reject heavy drop shadows in favor of **Ambient Light**.

*   **The Layering Principle:** Achieve lift by stacking surface tiers. A `surface-container-lowest` card placed on a `surface-container-low` section creates a natural, soft "paper-on-table" lift.
*   **Ambient Shadows:** If a floating element (like a Reservation Modal) requires a shadow, use a large blur (32px+) at 6% opacity. The shadow color must be a tint of `on-surface` (#1c1c16), never pure black.
*   **The "Ghost Border" Fallback:** For accessibility in form fields, use the `outline-variant` (#ddc0bd) at **15% opacity**. This creates a "watermark" effect rather than a hard digital edge.

---

## 5. Components
Our components are tactile and intentional, favoring generous padding and soft edges.

*   **Buttons:**
    *   **Primary:** `primary` (#5b0309) background with `on-primary` (#ffffff) text. Use `rounded-sm` (0.125rem) to maintain a classic, slightly sharp-cornered "printed card" look.
    *   **Secondary:** `surface-container-highest` background. No border.
*   **Input Fields:** Use `surface-container-low` with a bottom-only "Ghost Border." Labels should use `label-md` in `on-surface-variant` (#574240).
*   **Cards & Lists:** **Strictly forbid divider lines.** Separate menu items using `spacing-6` (2rem) of vertical white space. Use a `surface-container` background for the entire list to set it apart from the page.
*   **Chips (Dietary/Categories):** Use `tertiary-container` (#304600) with `on-tertiary-container` (#92b849). These should look like small wax seals or organic stamps.
*   **Custom Component: The "Heritage Ornament":** A small, decorative element (like a subtle olive branch icon) used to separate long-form story sections, utilizing `outline-variant` color.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts. Let an image of a wine bottle bleed off the edge of the screen while text sits comfortably in the center-left.
*   **Do** use the full range of the Spacing Scale. Premium design is defined by what you *don't* fill.
*   **Do** apply a very subtle grain texture (2-3% opacity) over the entire `background` to mimic the texture of heavy cardstock.

### Don't:
*   **Don't** use "Pure" colors. Avoid #000000 or #FFFFFF. Use our `on-surface` and `surface-container-lowest`.
*   **Don't** use standard "Material Design" rounded corners (e.g., 24px). Keep corners at `sm` (2px) or `md` (6px) to maintain a traditional, printed-press aesthetic.
*   **Don't** use icons without a clear "human" touch. Favor hand-drawn or etched-style iconography over thick, geometric "App Store" style icons.

---
**Director's Closing Note:**
This design system is not a UI kit; it is a digital extension of the "Ritrovo Dei Lavoratori" dining room. Every pixel should feel as though it was placed by hand, with the same care as a family recipe passed down since 1977. Use the "No-Line" rule to create a seamless, flowing experience that feels more like a story and less like a database.