import { SAVED_FORM, RECEIVED_DATA  } from '../actions/form';
import util from 'util';

var initialState = {
data:{}, submitted:false, dataList:[]
}
export default function form(state=initialState, action) {
  switch (action.type) {
    case SAVED_FORM:
        return action.form;
    case RECEIVED_DATA:
        return action.form;
    default:
      return state;
  }
}
