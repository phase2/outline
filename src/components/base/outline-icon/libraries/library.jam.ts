import type { IconLibrary } from '../library';

const library: IconLibrary = {
  name: 'jam',
  resolver: name =>
    `https://cdn.jsdelivr.net/npm/jam-icons@2.0.0/svg/${name}.svg`,
  mutator: svg => svg.setAttribute('fill', 'currentColor'),
};

export default library;
