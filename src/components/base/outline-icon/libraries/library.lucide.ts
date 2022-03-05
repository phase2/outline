import { IconLibrary } from '../library';

const library: IconLibrary = {
  name: 'lucide',
  resolver: name =>
    `https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/${name}.svg`,
};

export default library;
