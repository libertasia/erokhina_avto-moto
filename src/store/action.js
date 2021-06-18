export const ActionType = {
  SET_ACTIVE_TAB: `view/setActiveTab`,
};

export const ActionCreator = {
  setActiveTab: (activeTab) => ({
    type: ActionType.SET_ACTIVE_TAB,
    payload: activeTab,
  }),
};
