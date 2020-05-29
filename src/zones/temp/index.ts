import TempLayout from './TempLayout';
import {Zone} from 'lib/types/Zone';

const TempZone: Zone = {
  zoneInit: async () => {
    return {};
  },
  LayoutComponent: TempLayout
};

export default TempZone;
