import reactSWC from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  let base = '/'; // デフォルトは '/'
  if (command === 'build') {
    // ビルド時のみ base を設定
    const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
    base = isGithubActions ? '/tKwbr999.github.io/' : '/'; // リポジトリ名を修正
  }

  return {
    base: base,
    plugins: [reactSWC()],
  };
});
