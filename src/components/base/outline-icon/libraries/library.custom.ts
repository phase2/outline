import { IconLibrary } from '../library';

const library: IconLibrary = {
  name: 'custom',
  resolver: name => `/dist/assets/svg/custom/${name}.svg`,
  //mutator: svg => svg.setAttribute('fill', 'currentColor'),
};

export default library;
