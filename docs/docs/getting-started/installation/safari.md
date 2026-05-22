---
sidebar_position: 5
---

# Safari Installation

Safari support is still available for local testing, but it uses a temporary developer install.

:::caution
Unsigned Safari extensions can only be installed temporarily. You will need to reload the build after each browser restart.
:::

### Installation

1. Build the Safari package locally with `pnpm run build:safari`.
2. Unzip or open the generated `dist/safari` folder.
3. Open Safari and go to **Safari > Settings** (or **Preferences**) in the menu bar.
4. Open the **Advanced** tab and enable the developer menu.
5. Go to **Develop > Add Temporary Extension...**.
6. Select the generated Safari extension folder.
7. Enable the extension in the **Extensions** settings window if prompted.

_Note: Temporary Safari installs are not persistent. Rebuild and reload the extension when needed._

<DataLossWarning />
