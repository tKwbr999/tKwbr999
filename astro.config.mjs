import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import path from "path";

// https://astro.build/config
export default defineConfig({
  // GitHub Pages用の設定
  site: process.env.GITHUB_PAGES
    ? "https://tkwbr999.github.io"
    : "http://localhost:8080",
  base: process.env.GITHUB_PAGES ? "/tkwbr999/" : "/",

  // 環境変数の定義
  vite: {
    define: {
      "import.meta.env.GITHUB_PAGES": JSON.stringify(
        !!process.env.GITHUB_PAGES
      ),
    },
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },

  // サーバー設定
  server: {
    host: "::",
    port: 8080,
  },

  // 統合機能
  integrations: [tailwind()],

  // 画像の最適化
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
