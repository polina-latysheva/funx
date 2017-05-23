export class EditController {
  constructor ($scope, $window, $q, firebase, moment, $stateParams) {
    'ngInject';
    this.$scope = $scope;
    this.firebase = firebase;
    this.currentWeek = moment().isoWeek();
    this.user = $stateParams;
  }

  add(val) {
    if (angular.isUndefined(val)) {return}
    let score = parseInt(val, 10);
    this.firebase.edit(this.currentWeek, this.user.id, score);
  }
}
