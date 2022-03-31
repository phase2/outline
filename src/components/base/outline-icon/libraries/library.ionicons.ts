import { IconLibrary } from '../library';

const library: IconLibrary = {
  name: 'ionicons',
  resolver: name =>
    `https://cdn.jsdelivr.net/npm/ionicons@5.1.2/dist/ionicons/svg/${name}.svg`,
  mutator: svg => {
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('stroke', 'currentColor');
    [...svg.querySelectorAll('.ionicon-fill-none')].map(el =>
      el.setAttribute('fill', 'none')
    );
    [...svg.querySelectorAll('.ionicon-stroke-width')].map(el =>
      el.setAttribute('stroke-width', '32px')
    );
  },
};

export default library;
