import ClearX from 'clearx';
import { constructAccessor } from '../helpers/accessor';

let store = {
  theme: 'light',
  color: {
    red: 'green',
  },
};

let Store = new ClearX(store);

export default {
  Accessor: constructAccessor(store),
  get Store() {
    return Store;
  },
};
