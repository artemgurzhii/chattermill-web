import Application from '@ember/application';

import { initialize } from 'chattermill-web/initializers/current-user';
import { module, test } from 'qunit';
import { run } from '@ember/runloop';

module('Unit | Initializer | current-user', function(hooks) {
  hooks.beforeEach(function() {
    this.TestApplication = Application.extend();
    this.TestApplication.initializer({
      name: 'initializer under test',
      initialize
    });

    this.application = this.TestApplication.create({ autoboot: false });
  });

  hooks.afterEach(function() {
    run(this.application, 'destroy');
  });

  // Replace this with your real tests.
  test('it works', async function(assert) {
    await this.application.boot();

    assert.ok(true);
  });
});
