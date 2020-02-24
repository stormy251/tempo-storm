import AppLayout from './AppLayout';
import {Zone} from 'lib/types/Zone';

const AppZone: Zone = {
  zoneInit: async () => {
    return {};
  },
  LayoutComponent: AppLayout
};

export default AppZone;
