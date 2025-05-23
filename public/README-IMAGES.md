# OpSprocket Image Assets

## Favicon Setup
- `favicon.svg` - Modern SVG favicon (preferred by modern browsers)
- `opsprocket-logo.svg` - Main OpSprocket logo used as fallback icon
- `src/app/icon.svg` - Next.js 13+ automatic favicon handling

## Social Media Preview Image
To create the `og-image.png` for social media previews:

1. Open `og-image.html` in a browser
2. Set browser window to exactly 1200x630 pixels
3. Take a screenshot or use a tool like:
   - **macOS**: `cmd + shift + 4` for precise screenshot
   - **Puppeteer**: For automated generation
   - **Online tools**: Any HTML to image converter

### Automated generation with Puppeteer (optional):
```bash
npm install puppeteer
node generate-og-image.js
```

## Current Assets:
- ✅ `opsprocket-logo.svg` - Main company logo (1091x1091)
- ✅ `favicon.svg` - SVG favicon
- ✅ `site.webmanifest` - PWA manifest
- ✅ `og-image.html` - Template for social preview
- ⏳ `og-image.png` - Needs to be generated from HTML template (1200x630)

## Usage:
The favicon will automatically use the OpSprocket logo SVG, and social media platforms will use the og-image.png for link previews when it's generated. 