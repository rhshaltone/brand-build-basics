import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
<<<<<<< HEAD
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
=======
  base: "/brand-build-basics/", // 👈 This tells Vite where your app will be hosted
  plugins: [
    react(),
    mode === "development" && componentTagger(),
>>>>>>> 5e3c565 (Initial commit)
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
