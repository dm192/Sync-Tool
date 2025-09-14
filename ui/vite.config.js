import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    // 将构建输出目录设置为Flask的静态文件目录
    outDir: resolve(__dirname, '../dist'),
    
    // 静态资源目录
    assetsDir: 'assets',
    
    // 启用/禁用文件名hash
    rollupOptions: {
      output: {
        // 设置JavaScript文件的输出路径和命名
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        
        // 设置CSS文件的输出路径和命名
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name]-[hash].[ext]';
          }
          if (/\.(png|jpe?g|gif|svg|webp|avif)$/.test(assetInfo.name)) {
            return 'images/[name]-[hash].[ext]';
          }
          if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
            return 'fonts/[name]-[hash].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        }
      }
    }
  },
  
  // 开发服务器配置
  server: {
    // 可以根据需要配置代理等选项
    port: 3000
  }
});