'use strict';

/**
 * @ngdoc function
 * @name kaffeAppApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the kaffeAppApp
 */
angular.module('kaffeAppApp')
  .controller('ProfileCtrl', function ($scope, user) {
    user.getCurrentUser().then(function(user){
    	$scope.facebookPhoto = 'https://graph.facebook.com/' + user.facebookid + '/picture?height=72';
    	$scope.user = user;
    	if($scope.user.bio === null || $scope.user.bio === ""){
    		$scope.hasBio = false;
    	} else {
    		$scope.hasBio = true;
    	}
    })

    $scope.setNewBio = function(){
    	if($scope.newbio === "" || $scope.newbio === undefined){
    		return;
    	}
    	$scope.user.bio = $scope.newbio;
    	user.setNewBio($scope.user).then(function(result){
    	})
    	$scope.hasBio = true
    }
    $scope.changeBio = function(){
    	$scope.newbio = $scope.user.bio;
    	$scope.hasBio = false;
    }
 

  });
