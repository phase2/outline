import type { IconLibrary } from '../library';

const library: IconLibrary = {
  name: 'heroicons',
  resolver: name =>
    `https://cdn.jsdelivr.net/npm/heroicons@0.4.2/outline/${name}.svg`,
  mutator: svg => {
    svg.setAttribute('width', '16px');
    svg.setAttribute('height', '16px');
  },
};

export default library;
