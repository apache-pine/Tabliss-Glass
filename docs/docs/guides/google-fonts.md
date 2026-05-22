---
title: Google Fonts
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Google Fonts

Yes, you can use Google Fonts in Tabliss Glass! Follow the steps below:

1. Find your favourite [Google Font](https://fonts.google.com/).
2. Press **Get font** and then **Get embed code**.
3. Under **Embed code**, select the **@import** tab.
4. Copy the `@import` line (the part between `<style>` and `</style>`).

   <img src={useBaseUrl("/img/screenshots/guides/google_fonts_export_page.png")} alt="Google Fonts Import Example" width="600" />

5. In Tabliss Glass, open **Settings** > **Widgets** > **Custom CSS**.
6. Paste the embed line in the text box.
7. Back in Google Fonts, copy the font name from the **CSS rules to specify families** section (e.g., `'Roboto', sans-serif`).
8. Back in Tabliss Glass, paste the font name in the **Font** field under a widget's Font Settings.

   <img src={useBaseUrl("/img/screenshots/guides/google_fonts_used.png")} alt="Google Font applied to Clock widget" width="600" />

9. Enjoy Tabliss Glass in your font!
