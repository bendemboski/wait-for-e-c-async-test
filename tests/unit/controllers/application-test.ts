import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, click } from '@ember/test-helpers';

module('Unit | Controller | application', function (hooks) {
  setupApplicationTest(hooks);

  test('it works', async function (assert) {
    await visit('/');
    assert.dom().includesText('Value: 0');

    await click('button');
    assert.dom().includesText('Value: 1');
  });
});
