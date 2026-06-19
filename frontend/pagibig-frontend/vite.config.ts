import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // 🛠️ Import Tailwind v4 compiler directly

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 🛠️ Activate the Tailwind engine here
  ],
});
