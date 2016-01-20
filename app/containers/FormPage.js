import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyForm from '../components/MyForm';
import * as FormActions from '../actions/form';
import util from 'util';

function mapStateToProps(state) {
    console.log('in container');
    console.log(util.inspect(state));
  return {
    submitted: state.form.submitted,
    data: state.form.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FormActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyForm);
