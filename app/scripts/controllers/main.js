'use strict';

angular.module('jsWorkshop2App')
  .controller('MainCtrl', function ($scope) {
    $scope.list = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.add = function () {
        $scope.list.unshift($scope.new_item);
    }
  });
