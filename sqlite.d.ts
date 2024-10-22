declare module 'sqlite' {
    export function open(config: any): Promise<any>;
  }