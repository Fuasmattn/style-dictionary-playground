# StyleDictionary Playground

This Repository contains examples of how to use StyleDictionary to generate design tokens for different platforms.

## Usage

Run `npm run build` to generate the design tokens based on `input/figma.json`.

This will generate the following files in the next-demo project:

- tokens/tailwind
  - `cssVarsPlugin.js`
  - `preset.js`
  - `themeColors.js`
- tokens/web
  - `tokens.css`

The `preset.js` file can be included in the tailwind.config presets array to use the generated design tokens.
