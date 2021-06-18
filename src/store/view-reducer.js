import {ActionType} from './action';
import {TabTypes} from '../const';

const initialState = {
  activeTab: TabTypes.CHARACTERISTICS,
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
  }

  return state;
};

export {viewReducer};
