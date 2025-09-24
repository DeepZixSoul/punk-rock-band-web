import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Gayola Punk Rock',
        short_name: 'Gayola',
        description: 'Página oficial de Gayola, grupo de punk-rock en España. Noticias, conciertos y música.',
        start_url: '/',
        display: 'standalone',
        background_color: '#181818',
        theme_color: '#ff99ff',
        orientation: 'portrait',
        icons: [
          {
            src: '/logos/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logos/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/logos/logo.webp',
            sizes: '192x192',
            type: 'image/webp'
          },
          {
            src: '/logos/logo.webp',
            sizes: '512x512',
            type: 'image/webp'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,webp,png,svg,ico,json}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-stylesheets',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\//,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }
            }
          },
          {
            urlPattern: /\/logos\/(.*)\.(webp|png|svg|ico)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gayola-logos',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }
            }
          },
          {
            urlPattern: /\/public\/(.*)\.(webp|png|svg|ico)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gayola-public',
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 30 }
            }
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ]
})
