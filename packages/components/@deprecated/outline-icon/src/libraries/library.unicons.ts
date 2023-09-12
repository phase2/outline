import { IconLibrary } from '../library';

const library: IconLibrary = {
  name: 'unicons',
  resolver: name => {
    const match = name.match(/^(.*?)(-s)?$/);
    // prettier-ignore
    // @ts-expect-error ts-mismatch
    return `https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.3/svg/${match[2] === '-s' ? 'solid' : 'line'}/${match[1]}.svg`;
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor'),
};

export default library;
