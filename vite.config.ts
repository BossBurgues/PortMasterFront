import vinext from "vinext";
import { defineConfig } from "vite";

export default defineConfig({
  // O base path garante que assets (JS, CSS, imagens) carreguem
  // com o prefixo correto quando deployado em um subpath do GitHub Pages.
  // Exemplo: /Clientes/ em vez de /
  // A trailing slash é obrigatória para o Vite resolver os assets corretamente.
  base: process.env.NEXT_PUBLIC_BASE_PATH
    ? `${process.env.NEXT_PUBLIC_BASE_PATH}/`
    : "/",
  plugins: [vinext()],
});
