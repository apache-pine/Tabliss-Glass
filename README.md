<p align="left">
  <img src="src/views/shared/tabliss.svg" alt="Tabliss Glass logo" width="400" />
</p>

> A glass-style New Tab page for Microsoft Edge and Chromium-based browsers.

<img src="screenshots/screenshot_1.png" width="49%"/> <img src="screenshots/screenshot_2.png" width="50%"/>
<img src="screenshots/screenshot_3.png" width="49%"/> <img src="screenshots/screenshot_4.png" width="50%"/>
<img src="screenshots/screenshot_5.png" width="24%"/>
<img src="screenshots/screenshot_6.png" width="24%"/>
<img src="screenshots/screenshot_7.png" width="24%"/>
<img src="screenshots/screenshot_8.png" width="24%"/>

<div align="center">
    <a href="https://www.gnu.org/licenses/gpl-3.0">
        <img src="https://img.shields.io/badge/License-GNU%20GPL%20v3-blue"></a>
</div>

## Tabliss Glass

This repository is my personal glass-style build of Tabliss, tuned to ship the glass look as the default instead of an optional custom CSS setup. It keeps the extension familiar, but the visual language and wording are now centered around this custom version.

### What's Next?

- Continued updates and bug fixes
- Adding new features from community contributions
- Keeping dependencies up to date

If you have ideas for improvements, feel free to open an issue or submit a pull request. This fork is intended to evolve as a personal build.

### Looking for contribution ideas?

Check out the [github project](https://github.com/users/BookCatKid/projects/3?query=sort%3Aupdated-desc+is%3Aopen) for a list of features that are wanted, but not yet implemented. Anything not in `in progress` is most likely free for you to work on!

---

## A Few Defaults That Differ From Tabliss

This list is by no means exhaustive. Tabliss Glass includes many other tweaks, quality-of-life improvements, and visual changes not detailed here.

- Customization
  - Support for custom search engines and browser defaults
  - Many more style options in display/font settings (eg. scale, underline, text outline, custom css class)

- Widgets
  - Time Tracker, Bitcoin Mempool, Top Sites, Binary Clock, Bookmarks, Custom HTML.
  - Enhancements: Daily Routine for Todos, Bible verses in Quotes, Markdown in Notes
  - "Free Move" mode for dragging widgets

- Backgrounds & Visuals
  - Wikimedia Image of the Day, NASA APOD, Giphy Image of the Day
  - Support for Videos, GIFs, and online image URLs
  - Automatic night dimming and random gradients

- Interface & Accessibility
  - Full dark mode
  - Complete translation support for all settings

## Installation

If you want to install the extension locally, start with [INSTALL.md](INSTALL.md).

For the Edge build, the manual install flow is:

1. Run `pnpm run build:chromium`.
2. Open `edge://extensions/`.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the generated `dist/chromium` folder.

If you want to work on the project locally, see the setup notes below.

## Running Locally

For local development, you'll need Node.js and pnpm installed. Latest versions should work.

First, clone the repo:

```sh
git clone <your-repo-url>
cd Tabliss-Glass
```

Then install the dependencies:

```sh
pnpm install
```

### Available Commands

- `pnpm run dev` — Start a local development server
- `pnpm run build` — Build the project
- `pnpm run test` — Run tests
- `pnpm run translations` — Extract and sync translation files (see [TRANSLATING.md](TRANSLATING.md) for details)
- `pnpm run translations status` — Show translation status (pass language, e.g. `pnpm run translations status fr`)
- `pnpm run translations create` — Create a new locale file (pass language, e.g. `pnpm run translations create de-AT`)
- `pnpm run translations migrate` — Migrate renamed translation keys (e.g. `pnpm run translations migrate --map old.id=new.id`)
- `pnpm run lint:fix` — Run ESLint with --fix (or just `pnpm run lint` for checking)
- `pnpm run prettier` — Run Prettier with --write (or `pnpm run prettier:check` for checking)
- `pnpm run deps:update` — Run interactive dependency update tool (or `pnpm run deps:check` to just check for updates and unused dependencies)

By default, build and dev will target the web version. To specify a platform (Chromium or Firefox), append `:chromium` or `:firefox` to the command. For example:

```sh
pnpm run dev:chromium
pnpm run build:firefox
```

<details>
  <summary>To test extension locally</summary>
  <br>
  <p>Find the extension in <code>dist</code> folder.</p>

  <p>For Chrome, go to <code>chrome://extensions</code>, turn on devoloper mode and click on "Load unpacked".</p>

  <p>For Firefox, go to <code>about:debugging#/runtime/this-firefox</code> and click on "Load Temporary Add-on".</p>
</details>

### Environment variables

To develop with external services, you'll need to sign up for API keys and enter them into your `.env` file. Start by copying the example:

```sh
cp .env.example .env
```

Then, fill in your API keys:

```ini
GIPHY_API_KEY=your_key_here
UNSPLASH_API_KEY=your_key_here
NASA_API_KEY=your_key_here
TRELLO_API_KEY=your_key_here # this requires the correct redirect URI to be set up in your Trello app settings: https://53dad6be72180770ccc08f0a6e2fc8a64dcf7b42.extensions.allizom.org and https://dlaogejjiafeobgofajdlkkhjlignalk.chromiumapp.org should work for firefox and chromium respectively.
```

## Credits

Special thanks to **joelshepherd** for originally creating and maintaining this project.
Also, huge appreciation to everyone who contributed, especially those whose pull requests I merged!

## Contributing

Take a look at the guide to [contributing](CONTRIBUTING.md) before starting.

## Translations

Check out the guide to [adding translations](TRANSLATING.md).
