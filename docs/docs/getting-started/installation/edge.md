---
title: Microsoft Edge Installation
sidebar_position: 4
---

import DataLossWarning from '../../\_data-loss-warning.mdx';

# Microsoft Edge Installation

Tabliss Glass is intended to be installed manually in Edge from a local build. This keeps the setup private and avoids store-specific release steps.

## Manual Installation

1. Build the Chromium package locally with `pnpm run build:chromium`.
2. Open Edge and go to `edge://extensions/`.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the generated `dist/chromium` folder.

:::warning[Keep Folder Location]
Do not move or rename the generated folder after installation. If you move or delete it, Edge will stop loading the extension.
:::

:::note[Updates]
Manual installs do not update automatically. Rebuild the extension and reload the unpacked folder when you want a newer version.
:::

<DataLossWarning />
