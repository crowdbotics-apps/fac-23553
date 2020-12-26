import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn21188038Reducer from '../features/SignIn21188038/redux/reducers'
import CalendarView2188037Reducer from '../features/CalendarView2188037/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn21188038: SignIn21188038Reducer,
CalendarView2188037: CalendarView2188037Reducer,

});