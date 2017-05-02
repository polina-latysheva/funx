/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { ListController } from './list/list.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

const fb_config = {
  apiKey: "AIzaSyBR-uc9qYYYYDbm3iALzGDebPQn3Uk0N18",
  authDomain: "fundex-9d689.firebaseapp.com",
  databaseURL: "https://fundex-9d689.firebaseio.com",
  storageBucket: "fundex-9d689.appspot.com",
  messagingSenderId: "73132638534"
};
window.firebase.initializeApp(fb_config);
const db = window.firebase.database();

db.ref('/weeks').once('value').then(snapshot => {
  const weeksArray = snapshot.val();
  const state = {
     weeks: {
       weeks: weeksArray
     }
   }
});

angular.module('fundex', ['ngTouch', 'ngAria', 'ngResource', 'ui.router', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('ListController', ListController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
