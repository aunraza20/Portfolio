import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname),
  plugins: [
    react({
      babel: {
        // Fix EPERM error when project path contains spaces:
        // prevent Babel from walking outside the project root
        configFile: false,
        babelrc: false,
      },
    }),
  ],
});
