import ClearX from 'clearx';
import { constructAccessor } from '../helpers/accessor';

const getStore = () => {
  const theme = localStorage.getItem('theme') || 'light';
  return {
    theme: theme,
    color: {
      red: 'green',
    },
  };
};

let Store = getStore();
let ClearXStore = new ClearX(Store);

export default {
  Accessor: constructAccessor(Store),
  get Store() {
    return ClearXStore;
  },
};
