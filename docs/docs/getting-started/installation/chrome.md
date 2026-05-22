---
title: Chrome & Chromium Installation
sidebar_position: 3
---

import DataLossWarning from '../../\_data-loss-warning.mdx';

# Chrome & Chromium Installation

If you want to test the Chromium build outside Edge, install it from a local build the same way.

## Manual Installation

1. Build the Chromium package locally with `pnpm run build:chromium`.
2. Open Chrome or another Chromium-based browser and go to `chrome://extensions/`.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the generated `dist/chromium` folder.

:::warning[Keep Folder Location]
Do not move or rename the generated folder after installation. If you move or delete it, the browser will stop loading the extension.
:::

:::note[Updates]
Manual installs do not update automatically. Rebuild the extension and reload the unpacked folder when you want a newer version.
:::

<DataLossWarning />
