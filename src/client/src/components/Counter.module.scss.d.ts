declare namespace CounterModuleScssModule {
  export interface ICounterModuleScss {
    buttons: string;
    container: string;
    controls: string;
  }
}

declare const CounterModuleScssModule: CounterModuleScssModule.ICounterModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CounterModuleScssModule.ICounterModuleScss;
};

export = CounterModuleScssModule;
