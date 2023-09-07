import type { IconLibrary } from '../library';

const library: IconLibrary = {
  name: 'iconoir',
  resolver: name =>
    `https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@latest/icons/${name}.svg`,
};

export default library;
