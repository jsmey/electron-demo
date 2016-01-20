/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import { spy } from 'sinon';
import React from 'react';
import t from 'tcomb-form';

import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithClass,
  Simulate
} from 'react-addons-test-utils';
import MyForm from '../../app/components/MyForm';

const Form = t.form.Form;
const Person = t.struct({
  name: t.String,
  surname: t.String
});
function setup() {
  const actions = {
    saveForm: spy()
  };
  const component = renderIntoDocument(<MyForm submitted={false} {...actions} />);
  return {
    component,
    actions,
    buttons: scryRenderedDOMComponentsWithTag(component, 'button').map(button => {
      return button;
    }),
    p: findRenderedDOMComponentWithClass(component, 'myForm')
  };
}


describe('MyForm component', () => {



  it('save button should call saveForm', () => {
    const { buttons, actions } = setup();
    Simulate.click(buttons[0]);
    expect(actions.saveForm.called).to.be.true;
  });
});