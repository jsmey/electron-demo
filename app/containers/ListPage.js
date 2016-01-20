import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import List from '../components/List';
import * as FormActions from '../actions/form';
import util from 'util';

function mapStateToProps(state) {
    console.log('in container');
    console.log(util.inspect(state));
  return {

    dataList: state.form.dataList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FormActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
