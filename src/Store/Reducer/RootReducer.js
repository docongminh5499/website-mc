import { combineReducers } from 'redux';
import { SidebarReducer } from './SidebarReducer';
import { OverlayHeaderReducer } from './OverlayHeaderReducer';

export const RootReducer = combineReducers({
  sidebar: SidebarReducer,
  overlayHeader: OverlayHeaderReducer
});
