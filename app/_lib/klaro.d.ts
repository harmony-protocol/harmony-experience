// Klaro ships no TypeScript types, so declare the small surface we use.
declare module "klaro" {
  export function setup(config: unknown): void;
  export function render(config: unknown, show?: boolean): void;
  export function show(config?: unknown, modal?: boolean): boolean;
  export function getManager(config?: unknown): {
    getConsent(name: string): boolean;
    confirmed: boolean;
    watch(watcher: { update: (...args: unknown[]) => void }): void;
    [key: string]: unknown;
  };
  export const version: string;
}

declare module "klaro/dist/klaro.css";
