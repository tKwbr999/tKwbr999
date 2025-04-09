import { defineConfig } from "vite";
import reactSWC from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
// https://vite.dev/config/
export default defineConfig(({ command }) => {
  let base = '/'; // デフォルトは '/'
  if (command === 'build') { // ビルド時のみ base を設定
    const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
    base = isGithubActions ? '/tKwbr999/' : '/'; // 環境変数で base を切り替え (リポジトリ名を修正)
  }

  return {
    base: base,
    plugins: [reactSWC()],
  };
});
