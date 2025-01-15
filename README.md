# Style Dictionary Playground

This Repository contains examples of how to use StyleDictionary to generate design tokens for different platforms.

## Usage

Run `npm run build` to generate the design tokens based on `input/figma.json`.
The `figma.json` represents the design tokens exported from Figma.

This will generate the following files in the next-demo project:

- tokens/tailwind
  - `cssVarsPlugin.js`
  - `preset.js`
  - `themeColors.js`
- tokens/web
  - `tokens.css`

The `preset.js` file is included in the tailwind.config presets array to use the generated design tokens.

Run `npm run dev` to start the next-demo project using the generated tailwind config.
