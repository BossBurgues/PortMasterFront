/**
 * Declaração de módulo para imports de CSS em componentes TypeScript.
 * Necessário para que o TypeScript aceite `import "./theme.css"` sem erros.
 */
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
