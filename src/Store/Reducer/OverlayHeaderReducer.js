import { ActionTypes, OverlayHeader } from '../Type/Type';

let initialStore = {};
Object.values(OverlayHeader).forEach(name => (initialStore[name] = false));

export function OverlayHeaderReducer(store = initialStore, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_OVERLAY_HEADER_STATUS:
      return Object.assign({}, store, action.payload);
    default:
      return store || {};
  }
}
