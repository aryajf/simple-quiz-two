import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import requireTransform from 'vite-plugin-require-transform';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        requireTransform({}),
        VitePWA({
        registerType: 'autoUpdate',  
        manifest: {
            "name":"Did U Know",
            "short_name":"Did U Know",
            "theme_color":"#f4c2a1",
            "icons":[
            {"src":"./img/icons/android-chrome-192x192.png", "sizes":"192x192","type":"image/png"},
            {"src":"./img/icons/android-chrome-512x512.png", "sizes":"512x512","type":"image/png"},
            ],
            "start_url":".",
            "display":"standalone",
            "background_color":"#fff3e3"
        },
        workbox: {
            // workbox options for generateSW
        }
        })
    ],
    resolve: {
        alias: {
        "@": path.resolve(__dirname, "./src") // map '@' to './src' 
        },
    }
})