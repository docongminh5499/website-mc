import { ActionTypes, SideBars } from '../Type/Type';

export function ChangeStateSidebar(sidebarName, status, affectToOverlay = true) {
  let payload = {};
  if (affectToOverlay) payload = { [sidebarName]: status, overlay: status };
  else payload = { [sidebarName]: status };
  return { type: ActionTypes.CHANGE_SIDEBAR_STATUS, payload };
}

export function ResetAllSidebar() {
  let payload = { overlay: false };
  Object.values(SideBars).forEach(name => (payload[name] = false));
  return { type: ActionTypes.RESET_ALL_SIDEBAR, payload };
}
