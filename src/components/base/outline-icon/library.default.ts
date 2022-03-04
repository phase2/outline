import type { IconLibrary } from './library';

const library: IconLibrary = {
  name: 'default',
  resolver: name =>
    `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.0.0/icons/${name}.svg`,
};

export default library;
