import { module, test } from 'qunit';
import { setupTest } from 'my-app/tests/helpers';

module('Unit | Route | route2', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:route2');
    assert.ok(route);
  });
});
