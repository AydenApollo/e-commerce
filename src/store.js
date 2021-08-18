import { createStore } from 'redux';

import item_select from './reducers.js';

var store = createStore(item_select);

export default store;