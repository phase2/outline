import { IconLibrary } from '../library';

const library: IconLibrary = {
  name: 'boxicons',
  resolver: name => {
    let folder = 'regular';
    if (name.substring(0, 4) === 'bxs-') folder = 'solid';
    if (name.substring(0, 4) === 'bxl-') folder = 'logos';
    return `https://cdn.jsdelivr.net/npm/boxicons@2.0.5/svg/${folder}/${name}.svg`;
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor'),
};

export default library;
