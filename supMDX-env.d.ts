declare module '#config' {
  import type {NavEntry} from '@/Nav';
  type Config = {
    startYear: number
    siteAuthor?: string
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
