import EmberRouter from '@ember/routing/router';
import config from 'workflow/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('workflows', { path: '/' });
  this.route('item', { path: '/item/:item_id' });
});
