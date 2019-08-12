import * as mobx from 'mobx';
import { expect, assert } from 'chai';
import MobxModel from '../../lib/index';

class TestModel extends MobxModel {
  static modelName = 'TestModel';

  static attributes = {
    value: null,
  };

  static relations = [];
}

describe('MobxMode.config', () => {
  it('should contain method config()', function() {
    expect(MobxModel.config instanceof Function).to.equal(true);
  });

  it('should throw error if `mobx` module not set in configuration', function() {
    assert.throws(
      () => {
        MobxModel.config({
          mobx: undefined,
        });
      },
      Error,
      'Configuration attribute" `mobx` must be set in MobxModel.config({ mobx })...',
    );
  });
});
