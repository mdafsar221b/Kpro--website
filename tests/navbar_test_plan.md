# Kpro Website - Navigation Bar Test Plan

This document outlines the test cases and programmatic scripts to verify that the renovated navigation header renders correctly without overlaps or vertical misalignment across all viewport widths.

---

## 1. Test Scenarios

### TC-001: Desktop Horizontal Alignment (Viewport width >= 1101px)
- **Objective**: Verify that the logo, navigation links, and support portal actions align in a single, clean horizontal row.
- **Steps**:
  1. Open a browser window at width 1200px or greater.
  2. Navigate to `http://localhost:8080/index.html`.
  3. Inspect the header container.
- **Expected Outcome**: 
  - Logo lies flush left.
  - Navigation menu links align in the center.
  - Support portal and Community links align flush right.
  - No elements wrap onto a second line.
  - Vertical alignment is centered (flex aligns vertical center).

### TC-002: Bounding Box Intersection Test (Viewport width >= 1101px)
- **Objective**: Programmatically verify that the navigation links do not overlap or collide with the logo or the portal button.
- **Steps**:
  1. Open the browser DevTools Console.
  2. Execute the programmatic script in [navbar_check.js](file:///Users/apple/Desktop/college_demo/kpro-website/js/navbar_check.js).
- **Expected Outcome**:
  - `logo.getBoundingClientRect().right` < `navMenu.getBoundingClientRect().left`
  - `navMenu.getBoundingClientRect().right` < `navActions.getBoundingClientRect().left`
  - Console outputs `[PASS] Layout verified: No header overlap detected.`

### TC-003: Tablet & Mobile Hamburger Collapse (Viewport width <= 1100px)
- **Objective**: Verify that the header menu collapses gracefully into a mobile hamburger menu on medium/small viewports (avoiding squishing 7 text links).
- **Steps**:
  1. Shrink the browser window width to 1024px.
  2. Inspect the header.
- **Expected Outcome**:
  - The standard horizontal text links hide (`display: none` or off-screen drawer position).
  - The mobile hamburger toggle (3 horizontal lines) displays on the right side.
  - Clicking the hamburger opens a clean side drawer displaying the navigation list.

### TC-004: Portal Dropdown Positioning
- **Objective**: Verify that hovering over the "Portal" button reveals the dropdown menu absolutely positioned, without pushing the header elements or increasing the header height.
- **Steps**:
  1. Hover cursor over the "Portal" button.
  2. Observe the dropdown options ("Email Login", "HRM Portal", "Support Login").
- **Expected Outcome**:
  - Dropdown options display vertically in a dark glass block absolutely layered on top of the page.
  - Adjacent elements (e.g. "Community" or "Contact" links) do not shift or wrap.

---

## 2. Automated Console Test Script

Save the following check to `js/navbar_check.js`. It can be run programmatically or pasted in the browser console:

```javascript
(function() {
  const logo = document.querySelector('.logo');
  const navMenu = document.querySelector('.nav-menu');
  const navActions = document.querySelector('.nav-actions');

  if (!logo || !navMenu || !navActions) {
    console.error("[FAIL] Bounding check failed: Elements not found in DOM.");
    return;
  }

  // Only run overlap check when menu is displayed horizontally on desktop
  const isMenuVisible = window.getComputedStyle(navMenu).position !== 'fixed';

  if (isMenuVisible) {
    const logoRect = logo.getBoundingClientRect();
    const menuRect = navMenu.getBoundingClientRect();
    const actionsRect = navActions.getBoundingClientRect();

    const overlapLogo = (menuRect.left < logoRect.right);
    const overlapActions = (menuRect.right > actionsRect.left);

    if (overlapLogo) {
      console.error(`[FAIL] Overlap detected: Menu collided with Logo! (Logo Right: ${logoRect.right}px, Menu Left: ${menuRect.left}px)`);
    }
    if (overlapActions) {
      console.error(`[FAIL] Overlap detected: Menu collided with Portal Actions! (Menu Right: ${menuRect.right}px, Actions Left: ${actionsRect.left}px)`);
    }

    if (!overlapLogo && !overlapActions) {
      console.log(`[PASS] Layout verified: No header overlap detected. (Gap to Logo: ${menuRect.left - logoRect.right}px, Gap to Actions: ${actionsRect.left - menuRect.right}px)`);
    }
  } else {
    console.log("[INFO] Viewport is in mobile/collapsed view. Horizontal overlap check skipped.");
  }
})();
```
