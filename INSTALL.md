# Manual installation for Edge

Tabliss Glass is meant to be installed from a local build in Microsoft Edge.

## Step 1: Build the extension

Run the Chromium build locally:

```bash
pnpm run build:chromium
```

The generated files will be placed in `dist/chromium`.

## Step 2: Load it in Edge

1. Open Edge and go to `edge://extensions/`.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select the `dist/chromium` folder.

## Notes

- Keep the generated folder in place so Edge can continue loading it.
- Rebuild and reload the unpacked folder whenever you want to test a newer version.

---

The extension should now be available in Edge.
