import { expect } from 'chai';
import form from '../../app/reducers/form';
import { SAVED_FORM} from '../../app/actions/form';


describe('reducers', () => {
  describe('form', () => {
    it('should handle initial state', () => {
      expect(form(undefined, {})).to.deep.equal({submitted:false});
    });

    it('should handle SAVED_FORM', () => {
      expect(form(false, { type: SAVED_FORM })).to.deep.equal({submitted:true});
    });

  });
});
