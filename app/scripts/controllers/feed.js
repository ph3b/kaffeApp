'use strict';

/**
 * @ngdoc function
 * @name kaffeAppApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the kaffeAppApp
 */
angular.module('kaffeAppApp')
  .controller('FeedCtrl', function ($scope, test) {
    test.getUsers().then(function(response){
    })
  });
