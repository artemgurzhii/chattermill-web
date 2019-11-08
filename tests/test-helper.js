import Application from 'chattermill-web/app';
import config from 'ember-get-config';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
