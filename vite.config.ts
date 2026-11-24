import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        // Fix EPERM error when project path contains spaces
        configFile: false,
        babelrc: false,
      },
    }),
  ],
});
