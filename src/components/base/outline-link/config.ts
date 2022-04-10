export type LinkTargetType = '_blank' | '_self' | '_parent' | '_top';
export type LinkRelType =
  | 'alternate'
  | 'author'
  | 'bookmark'
  | 'external'
  | 'help'
  | 'license'
  | 'next'
  | 'nofollow'
  | 'noopener'
  | 'noreferrer'
  | 'prev'
  | 'search'
  | 'tag';

export interface LinkType {
  linkTarget?: LinkTargetType;
  linkRel?: LinkRelType;
  linkText?: string;
  linkHref?: string;
}

export const argTypeHref = {
  name: 'Link Destination',
  description: 'https://www.w3schools.com/tags/att_a_href.asp',
  control: {
    type: 'text',
  },
  table: { defaultValue: { summary: 'false' } },
};

export const argTypeTarget = {
  name: 'Link Target',
  description: 'https://www.w3schools.com/tags/att_a_target.asp',
  options: ['_blank', '_self', '_parent', '_top'],
  control: {
    type: 'select',
  },
  table: { category: 'Properties', defaultValue: { summary: 'NULL' } },
};

export const argTypeRel = {
  name: 'Link Relationship',
  description: 'https://www.w3schools.com/tags/att_a_rel.asp',
  options: [
    'alternate',
    'author',
    'bookmark',
    'external',
    'help',
    'license',
    'next',
    'nofollow',
    'noopener',
    'noreferrer',
    'prev',
    'search',
    'tag',
  ],
  control: {
    type: 'select',
  },
  table: { defaultValue: { summary: 'null' } },
};
