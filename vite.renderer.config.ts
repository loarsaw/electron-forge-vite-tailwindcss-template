import { defineConfig } from "vite";

export default defineConfig(async () => {
  const tailwindcss = await import("@tailwindcss/vite");

  return {
    plugins: [tailwindcss.default()],
  };
});
