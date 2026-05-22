# Tabliss Glass Documentation

This is the source code for the Tabliss Glass documentation and landing page, built using [Docusaurus v3](https://docusaurus.io/).
It is kept as a local docs site for the personal fork.

## Shared Assets

To avoid duplication, several assets are synced from the root of the project during the build process:

- `CHANGELOG.md`
- `CONTRIBUTING.md`
- `TRANSLATING.md`
- `BUILDING.md`
- Project screenshots and icons

This is handled by the `sync-assets.js` script, which runs automatically before starting or building the site.

## Local Development

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Start the development server**:
   ```bash
   pnpm start
   ```
   This will run the asset sync and start the Docusaurus development server at [http://localhost:3000/](http://localhost:3000/).

## Build

To generate the static site:

```bash
pnpm run build
```

The output will be located in the `build/` directory.

You can view all available scripts by running:

```bash
pnpm run
```

## Deployment

Build the site locally when you want to preview or validate changes:

```bash
pnpm run build
```

The docs output will be placed in the `build/` directory.
