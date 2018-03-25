import types from "./types";

const details = (state = 0, action) => {
  switch (action.type) {
    case types.ACTIVE_TAB:
      return action.activeTab;
    case types.SELECT_USER:
      return 0;
    default:
      return state;
  }
};

export default details;

export const actions = {
  setActiveTab: activeTab => ({ type: types.ACTIVE_TAB, activeTab })
};
