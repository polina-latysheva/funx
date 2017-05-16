export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    }).state('list', {
      url: '/list',
      templateUrl: 'app/list/list.html',
      controller: 'ListController',
      controllerAs: 'list',
      resolve: {
        weeks: function($q, firebaseService){
          return $q.resolve(firebaseService.getWeeks());
        }
      }
      // resolve: {
      //   weeks: function(firebaseService){
      //     // const defer = $q.defer();
      //     // firebaseService.getWeeks().then( (resp) => {
      //     //   defer.resolve(resp);
      //     // });
      //     // return defer.promise;
      //     return firebaseService.getWeeks();
      //   }
      // }
    });

  $urlRouterProvider.otherwise('/');
}


