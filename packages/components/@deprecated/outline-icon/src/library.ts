import { OutlineIcon } from '@phase2/outline-icon';

import systemLibrary from './libraries/library.system';
import bootstrapLibrary from './libraries/library.bootstrap';
import boxiconLibrary from './libraries/library.boxicons';
import lucideLibrary from './libraries/library.lucide';
import heroiconsLibrary from './libraries/library.heroicons';
import iconoirLibrary from './libraries/library.iconoir';
import ioniconsLibrary from './libraries/library.ionicons';
import jamLibrary from './libraries/library.jam';
import fontawesomeLibrary from './libraries/library.fontawesome';
import materialLibrary from './libraries/library.material';
import remixLibrary from './libraries/library.remix';
import uniconsLibrary from './libraries/library.unicons';
import customLibrary from './libraries/library.custom';

export type IconLibraryResolver = (name: string) => string;
export type IconLibraryMutator = (svg: SVGElement) => void;
export interface IconLibrary {
  name: string;
  resolver: IconLibraryResolver;
  mutator?: IconLibraryMutator;
}

let registry: IconLibrary[] = [
  systemLibrary,
  bootstrapLibrary,
  boxiconLibrary,
  lucideLibrary,
  heroiconsLibrary,
  iconoirLibrary,
  ioniconsLibrary,
  jamLibrary,
  fontawesomeLibrary,
  materialLibrary,
  remixLibrary,
  uniconsLibrary,
  customLibrary,
];
let watchedIcons: OutlineIcon[] = [];

export function watchIcon(icon: OutlineIcon) {
  watchedIcons.push(icon);
}

export function unwatchIcon(icon: OutlineIcon) {
  watchedIcons = watchedIcons.filter(el => el !== icon);
}

export function getIconLibrary(name?: string) {
  return registry.find(lib => lib.name === name);
}

export function registerIconLibrary(
  name: string,
  options: { resolver: IconLibraryResolver; mutator?: IconLibraryMutator }
) {
  unregisterIconLibrary(name);
  registry.push({
    name,
    resolver: options.resolver,
    mutator: options.mutator,
  });

  // Redraw watched icons
  watchedIcons.forEach(icon => {
    if (icon.library === name) {
      icon.redraw();
    }
  });
}

export function unregisterIconLibrary(name: string) {
  registry = registry.filter(lib => lib.name !== name);
}
