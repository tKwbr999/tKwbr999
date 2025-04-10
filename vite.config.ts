import react from '@vitejs/plugin-react';
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
    plugins: [react()],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  };
});
