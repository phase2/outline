import type { IconLibrary } from '../library';

const library: IconLibrary = {
  name: 'fa',
  resolver: name => {
    const filename = name.replace(/^fa[rbs]-/, '');
    let folder = 'regular';
    if (name.substring(0, 4) === 'fas-') folder = 'solid';
    if (name.substring(0, 4) === 'fab-') folder = 'brands';
    return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${folder}/${filename}.svg`;
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor'),
};

export default library;
