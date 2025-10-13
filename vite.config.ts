import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt'],
      manifest: {
        name: 'Forma Factory',
        short_name: 'FormaFactory',
        description: 'Soluzioni innovative per la stampa 3D con sistema di automazione, software di gestione avanzato e piattaforma didattica integrata',
        theme_color: '#FF6B35',
        background_color: '#0A0A0A',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'https://storage.googleapis.com/gpt-engineer-file-uploads/CAPI2Im7zJd8xICuPNyJJXNu0rE2/uploads/1759997764028-logo_icon_20percent_bigger.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'https://storage.googleapis.com/gpt-engineer-file-uploads/CAPI2Im7zJd8xICuPNyJJXNu0rE2/uploads/1759997764028-logo_icon_20percent_bigger.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
