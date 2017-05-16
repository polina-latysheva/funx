export class ListController {
  constructor ($scope, $window, $q, firebase, weeks) {
    'ngInject';
    this.$scope = $scope;
    this.firebase = firebase;
    this.weeks = weeks;

    this.firebase.getWeeks().then(result => {
      this.weeks = result.weeks;
      // this.$scope.$digest();
    });
  }
}
