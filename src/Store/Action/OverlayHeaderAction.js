import { ActionTypes } from '../Type/Type';

export function ChangeOverlayHeaderState(name, status) {
  return {
    type: ActionTypes.CHANGE_OVERLAY_HEADER_STATUS,
    payload: { [name]: status }
  };
}
