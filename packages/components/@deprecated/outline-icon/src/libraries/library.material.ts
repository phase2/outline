import { IconLibrary } from '../library';

const library: IconLibrary = {
  name: 'material',
  resolver: name => {
    const match = name.match(/^(.*?)(_(round|sharp))?$/);
    // prettier-ignore
    // @ts-expect-error ts-mismatch
    return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${match[1]}/${match[3] || 'outline'}.svg`;
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor'),
};

export default library;
