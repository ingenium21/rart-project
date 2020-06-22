import ClearX from 'clearx';
import { constructAccessor } from '../helpers/accessor';
import { ThemeList } from './themes';

const getStore = () => {
  const theme = localStorage.getItem('theme') || ThemeList.light;
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
