import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import t from 'tcomb-form';
import * as FormActions from '../actions/form';
import util from 'util';
import styles from './Counter.module.css';
import { Link } from 'react-router';

const Form = t.form.Form;
const Person = t.struct({
  name: t.String,
  surname: t.String
});


class MyForm extends Component {
    static propTypes = {
    saveForm: PropTypes.func.isRequired,
    submitted: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired
  };


  render() {
      const { saveForm, submitted, data} = this.props;
    return (
        <div>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
            <div>submitted={submitted.toString()}</div>

      <div className={"myForm"}>
        <Form
          ref="form"
          type={Person}
        />
        <button onClick={() => saveForm(this.refs.form.getValue())}>Save</button>

      </div>
      <div>
      {util.inspect(this.props.data)}
      </div>
      </div>
    );
  }

}
export default MyForm;
