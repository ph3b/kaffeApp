'use strict';

/**
 * @ngdoc function
 * @name kaffeAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kaffeAppApp
 */
angular.module('kaffeAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
