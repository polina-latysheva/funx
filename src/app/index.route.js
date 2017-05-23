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
      controllerAs: 'list'
    }).state('edit', {
      url: '/edit/:id',
      templateUrl: 'app/edit/edit.html',
      controller: 'EditController',
      controllerAs: 'edit'
    });

  $urlRouterProvider.otherwise('/list');
}


