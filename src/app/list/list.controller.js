export class ListController {
  constructor ($scope, $window, $q, firebase) {
    'ngInject';
    this.$scope = $scope;
    this.firebase = firebase;
    this.users = {
      'sara' : true,
      'ruby': true,
      'palina': false
    };
    this.firebase.getWeeks().then(result => {
      this.weeks = result.weeks;
      this.$scope.$digest();
    });
  }
}
