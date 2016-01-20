export const SAVED_FORM = 'SAVED_FORM';
export const RECEIVED_DATA = 'RECEIVED_DATA';
import util from 'util';

export function save(data) {
  return {
    form:{ data: data, submitted: true},
    type: SAVED_FORM
  };
}

export function receivedData(data) {
  return {
    form: {dataList: data},
    type: RECEIVED_DATA
  };
}

export function getList() {
  return (dispatch, getState) => {
    setTimeout(() => {
        var data = [
          {name:'john', surname:'s'},
          {name:'Lynn', surname: 'w'}
        ];
        dispatch(receivedData(data));
    }, 5);
  };
}

export function saveForm(data) {

    return (dispatch, getState) => {
      setTimeout(() => {
          console.log('in action ' + util.inspect(data));
          console.log('getstate::' + util.inspect(getState()));
          dispatch(save(data));
      }, 5);
  };
}
