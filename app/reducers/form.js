import { SAVED_FORM, RECEIVED_DATA  } from '../actions/form';
import util from 'util';
import initialState from '../store/initialState';
import _ from 'lodash';
export default function form(state=initialState(), action) {
  switch (action.type) {
    case SAVED_FORM:
        return _.cloneDeep(state);
    case RECEIVED_DATA:
        return state.form;
    default:
      return state.form || state;
  }
}
