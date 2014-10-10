'use strict';

/**
 * @ngdoc function
 * @name kaffeAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kaffeAppApp
 */
angular.module('kaffeAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
