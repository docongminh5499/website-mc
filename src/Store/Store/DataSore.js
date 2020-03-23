import { createStore } from 'redux';
import { RootReducer } from '../Reducer/RootReducer';

export const DataStore = createStore(RootReducer);
