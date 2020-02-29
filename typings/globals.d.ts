declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: unknown;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: unknown;
}

declare interface NodeModule {
  hot?: { accept: (path: string, callback: () => void) => void };
}

declare interface System {
  import<T = unknown>(module: string): Promise<T>;
}

declare var System: System;

// declare const process: any;
// declare const require: any;
