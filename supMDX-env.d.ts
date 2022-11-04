declare module '#config' {
  import type {NavEntry} from '@/Nav';
  type Config = {
    site: {
      startYear: number
      author: string
      name: string
    }
    metaFields?: {label: string, prop: string}[]
    nav: NavEntry[]
  };
  const config: Config;
  export default config;
}

declare module '*.yaml' {
  const data: any;
  export default data;
}
