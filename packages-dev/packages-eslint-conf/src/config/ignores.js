/**
 * 忽略文件
 * 
 * 不够的时候，请提 PR
 */
export default {
  ignores: [
    "**/node_modules",
    "**/dist",
    "**/lib",
    "**/dist-*",
    "**/*-dist",
    "**/.husky",
    "**/.nitro",
    "**/.output",
    "**/Dockerfile",
    "**/package-lock.json",
    "**/yarn.lock",
    "**/pnpm-lock.yaml",
    "**/bun.lockb",
    "**/output",
    "**/coverage",
    "**/temp",
    "**/.temp",
    "**/tmp",
    "**/.tmp",
    "**/.history",
    "**/.turbo",
    "**/.nuxt",
    "**/.next",
    "**/.vercel",
    "**/.changeset",
    "**/.idea",
    "**/.cache",
    "**/.output",
    "**/.vite-inspect",

    "**/CHANGELOG*.md",
    "**/*.min.*",
    "**/LICENSE*",
    "**/__snapshots__",
    "**/*.snap",
    "**/fixtures/**",
    "**/.vitepress/cache/**",
    "**/auto-import?(s).d.ts",
    "**/components.d.ts",
    "**/vite.config.mts.*",
    "**/*.sh",
    "**/*.ttf",
    "**/*.woff",
    ".npmpackagejsonlintrc.js",
    "**.mjs"
  ]
};