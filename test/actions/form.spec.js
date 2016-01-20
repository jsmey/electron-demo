/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import { spy } from 'sinon';
import * as actions from '../../app/actions/form';


describe('actions', () => {

  // There's no nice way to test this at the moment...
  it('saveForm', (done) => {
    const fn = actions.saveForm({field1: 1});
    expect(fn).to.be.a('function');
    const dispatch = spy();
    const getState = () => ({ submitted : true });
    fn(dispatch, getState);
    setTimeout(() => {
      expect(dispatch.calledWith({ type: actions.SAVE_FORM })).to.be.true;
      done();
    }, 100);
  });
});
