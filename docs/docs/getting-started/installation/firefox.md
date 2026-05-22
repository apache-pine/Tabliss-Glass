---
title: Firefox Installation
sidebar_position: 2
---

import DataLossWarning from "../../\_data-loss-warning.mdx";

# Firefox Installation

Firefox is not the primary target for this fork, but you can still test a local build temporarily.

## Temporary Installation

1. Build the Firefox package locally with `pnpm run build:firefox`.
2. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
3. Click **This Firefox**.
4. Click **Load Temporary Add-on...**.
5. Select the generated `dist/firefox/manifest.json` file.

:::note[Temporary only]
Firefox will remove the extension when you restart the browser. That is expected for this installation method.
:::

<DataLossWarning />
