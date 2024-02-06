import { createStore } from 'vuex';
import ropaStore from '@/modules/ropa/store';

const store = createStore({
  modules: {
    ropaStore: ropaStore,
  }
});

export default store;