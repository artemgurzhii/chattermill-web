import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | filter-panel/button', hooks => {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<FilterPanel::Perform />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <FilterPanel::Button>
        template block text
      </FilterPanel::Button>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
