import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy' //浏览器兼容插件
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11'] //浏览器兼容
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), //设置@指向src目录
      comps: resolve(__dirname, './src/components') //设置comps指向components目录
    }
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true //true则生产环境移除console
      }
    },
    target: 'es2015'
  },
  server: {
    port: 80, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    host: '0.0.0.0'
    // proxy: {
    //   '/dev': {
    //     target: 'http://******.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/dev/, '')
    //   }
    // }
  },
  css: {
    postcss: {
      plugins: [require('autoprefixer')]
    }
  }
})
