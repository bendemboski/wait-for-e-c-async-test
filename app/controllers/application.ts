import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import { waitFor } from '@ember/test-waiters';

export default class Application extends Controller {
  @tracked value = 0;

  @task
  @waitFor
  async increment() {
    await new Promise((resolve) => setTimeout(resolve, 100));
    this.value += 1;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'application': Application;
  }
}
