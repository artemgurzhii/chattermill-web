import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { isBlank } from '@ember/utils';
import { task } from 'ember-concurrency-decorators';

export default class FormLoginComponent extends Component {
  @service session;

  @tracked username;
  @tracked password;

  get disableSubmit() {
    return this.submit.isRunning
      || isBlank(this.username)
      || isBlank(this.password);
  }

  @task({ drop: true })
  *submit() {
    const result = yield this.session.authenticate('authenticator:base', {
      username: this.username,
      password: this.password,
    });

    return result;
  }
}
