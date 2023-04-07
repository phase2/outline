export type MenuLink = {
  text: string;
  url: string;
  id: string;
};

export type MenuNavItem = {
  text: string;
  id: string;
  sub?: Array<MenuLink | MenuNavItem> | undefined;
  url?: string;
};
export type MainNavData = MenuNavItem[];

export type JsonAPIResult = {
  jsonapi: Object;
  data: Array<JsonAPIResultData>;
  links: Object;
};

export type JsonAPIResultData = {
  type: string;
  id: string;
  attributes: {
    description: null | string;
    enabled: boolean;
    expanded: boolean;
    menu_name: string;
    meta: { [key: string]: string };
    options: Array<unknown>;
    parent: string;
    provider: string;
    route: { name: string; parameters: Array<unknown> };
    title: string;
    url: string;
    weight: number;
  };
};
