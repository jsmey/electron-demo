export const SAVED_FORM = 'SAVED_FORM';
export const RECEIVED_DATA = 'RECEIVED_DATA';
import util from 'util';

export function save(form) {
  form.submitted = true;
  return {
    form: form,
    type: SAVED_FORM
  };
}

export function receivedData(list) {
  return {
    form: {dataList: data, submitted:false, data: {}},
    type: RECEIVED_DATA
  };
}

export function getList() {
  return (dispatch, getState) => {
    setTimeout(() => {
        var list = getState().form.dataList;
        dispatch(receivedData(list));
    }, 5);
  };
}

export function saveForm(data) {

    return (dispatch, getState) => {
      setTimeout(() => {
          console.log('in action ' + util.inspect(data));
          console.log('getstate::' + util.inspect(getState()));
          var form = getState().form;
          form.dataList.push(data);
          form.submitted = true;
          form.data = data;


          dispatch(save(form));
      }, 5);
  };
}
