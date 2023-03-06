const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  flexsearch: {
    codeblocks: true,
  },
});

module.exports = withNextra();
