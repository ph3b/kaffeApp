'use strict';

/**
 * @ngdoc function
 * @name kaffeAppApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the kaffeAppApp
 */
angular.module('kaffeAppApp')
  .controller('UserCtrl', function ($scope, user, $routeParams) {
    	user.getUser($routeParams.id).then(function(user){
    		$scope.user = user;
    		$scope.facebookPhoto = 'https://graph.facebook.com/' + user.facebookid + '/picture?height=72';
    	})
  });
