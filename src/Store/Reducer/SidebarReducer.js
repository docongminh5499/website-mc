import { ActionTypes, SideBars } from '../Type/Type';

let initialStore = { overlay: false };
Object.values(SideBars).forEach(name => (initialStore[name] = false));

export function SidebarReducer(store = initialStore, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_SIDEBAR_STATUS:
      return Object.assign({}, store, action.payload);
    case ActionTypes.RESET_ALL_SIDEBAR:
      return Object.assign({}, store, action.payload);
    default:
      return store || {};
  }
}
