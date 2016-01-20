export const SAVED_FORM = 'SAVED_FORM';
export const RECEIVED_DATA = 'RECEIVED_DATA';
import util from 'util';
import Firebase from 'firebase';


export function save(form) {
  form.submitted = true;
  return {
    form: form,
    type: SAVED_FORM
  };
}

export function receivedData(form) {
  return {
    form: form,
    type: RECEIVED_DATA
  };
}

export function getList() {
  return (dispatch, getState) => {
    var firebaseRef = new Firebase('https://fiery-fire-8865.firebaseio.com/');
    firebaseRef.child("data/users").on("value", function(snapshot) {
          var list = snapshot.val();
          console.log(util.inspect(list));
          var form = getState().form;
          form.dataList = list;
          form.submitted = false;
          form.data = {};
          dispatch(receivedData(form));
    });
    //setTimeout(() => {
    //    var list = getState().form.dataList;
    //    dispatch(receivedData(list));
    //}, 5);
  };
}

export function saveForm(data) {

    return (dispatch, getState) => {

          console.log('in action ' + util.inspect(data));
          console.log('getstate::' + util.inspect(getState()));
          var form = getState().form;
          form.dataList.push(data);
          form.submitted = true;
          form.data = data;


          dispatch(save(form));

  };
}
