/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { IconLibrary } from '../library';

const library: IconLibrary = {
  name: 'remix',
  resolver: name => {
    const match = name.match(/^(.*?)\/(.*?)?$/);
    // prettier-ignore
    // @ts-expect-error ts-mismatch
    match[1] = match[1].charAt(0).toUpperCase() + match[1].slice(1);
    // prettier-ignore
    // @ts-expect-error ts-mismatch
    return `https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/${match[1]}/${match[2]}.svg`;
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor'),
};

export default library;
