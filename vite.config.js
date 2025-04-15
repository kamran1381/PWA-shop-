import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        manifest: {
          name: "My PWA shop",
          short_name: "PWA Shop App",
          description: "A sample PWA built with Vite and Tailwind CSS",
          theme_color: "#ffffff",
          background_color: "#ffffff",
          display: "standalone",
        
        },

      }),
    ],
  });