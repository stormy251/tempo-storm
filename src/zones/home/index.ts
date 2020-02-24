import HomeLayout from './HomeLayout';
import {Zone} from 'lib/types/Zone';

const HomeZone: Zone = {
  zoneInit: async () => {
    return {};
  },
  LayoutComponent: HomeLayout
};

export default HomeZone;
