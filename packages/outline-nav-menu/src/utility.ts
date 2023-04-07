import { MainNavData, MenuLink, MenuNavItem, JsonAPIResult } from './types';

export const processMenuData = (fetchedData: JsonAPIResult) => {
  const data = fetchedData.data.length > 0 ? fetchedData.data : false;
  const links: MainNavData = [];

  if (data) {
    data.forEach(entry => {
      //set blank
      const link: MenuLink | MenuNavItem = { text: '', id: '', url: undefined };

      const recursiveParentFetch = (
        subFolder: MenuLink[] | MenuNavItem[],
        parentId: string,
        child: MenuLink | MenuNavItem
      ): void => {
        return subFolder.forEach(entry => {
          if (entry.id === parentId) {
            handleSubFolder(entry, child);
          }
          // @ts-expect-error- because-ts
          if (entry.sub) {
            // @ts-expect-error- because-ts
            return recursiveParentFetch(entry.sub, parentId, child);
          }
        });
      };

      const handleSubFolder = (
        parent: MenuNavItem,
        child: MenuLink | MenuNavItem
      ) => {
        if (parent.sub) {
          parent.sub.push(child);
        } else {
          parent.sub = [];
          parent.sub.push(child);
        }
      };

      // verify link is valid
      if (entry.attributes.title && entry.id) {
        link.text = entry.attributes.title;
        link.id = entry.id;
        if (entry.attributes.url) {
          link.url = entry.attributes.url;
        }
        // if parent, push to parent.sub
        if (entry.attributes.parent) {
          const parentID = entry.attributes.parent;
          recursiveParentFetch(links, parentID, link);
        } else {
          links.push(link);
        }
      }
    });
  } else {
    return; //bail
  }
  return links;
};
