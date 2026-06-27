# Implementation Plan — Portfolio Upgrades (Mini-Game & Font Adjustments)

This plan details the updates to simplify the hero name styling and font, and make the embedded mini-game larger and slower for better playability.

## Proposed Changes

We will modify the following components:

### 1. Simple Hero Name Styling
* **[MODIFY] [globals.css](file:///Users/ayush/project/pro-portfolio/src/app/globals.css)**:
  * Change `.hero-main-title` to use the simple monospace font (`var(--font-mono)`).
  * Use a clean crisp white color (`#FFFFFF`).
  * Remove custom wide tracking (`letter-spacing`) to make it look clean and normal.
* **[MODIFY] [layout.tsx](file:///Users/ayush/project/pro-portfolio/src/app/layout.tsx)**:
  * Remove the unused `Orbitron` font configuration to keep layouts simple.

### 2. Slow Down and Enlarge the Mini-Game
* **[MODIFY] [Contact.tsx](file:///Users/ayush/project/pro-portfolio/src/components/Contact.tsx)**:
  * Resize the game window to be much bigger: width `460px` (responsive), height `185px`.
  * Increase character font sizes: car `🚗` to `24px` and obstacle spike `▲` to `22px`.
  * Slow down the starting obstacle speed from `5` to `2.6` pixels/frame.
  * Slow down the speed increment factor.
  * Increase jump height limit to `100px` with a floatier, slower transition curve for optimal reaction window.
  * Adjust collision boxes to match the new size boundaries.

---

## Verification Plan

### Manual Verification
- Check that `Ayush Ranjan` name is rendered in standard monospace text style with no glowing shadow and flat white color.
- Run `chill` command in the terminal and verify the game container is larger.
- Play the game and ensure the obstacle speed is slow enough to react, jump over, and score points easily.
