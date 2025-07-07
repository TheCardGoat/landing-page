/// <reference types="vite/client" />

declare module '*.json' {
  const content: {
    [key: string]: string | number | boolean | null | undefined | 
    {
      [key: string]: string | number | boolean | null | undefined |
      {
        [key: string]: string | number | boolean | null | undefined;
      }
    }
  };
  export default content;
}
