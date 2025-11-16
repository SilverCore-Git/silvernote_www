/// <reference types="node" />
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MY_ENV_VAR?: string;
    }
  }
}

export {};
