'use strict';

/**
 * @ngdoc function
 * @name kaffeAppApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the kaffeAppApp
 */
angular.module('kaffeAppApp')
  .controller('FeedCtrl', function ($scope, test, datepost, user, $q, $rootScope) {
    
    datepost.getDatePosts().then(function(dateposts){
    	$scope.dateposts = dateposts;
    });

    $scope.addPost = function(){
    	datepost.addNewDatePost($scope.datepost).then(function(response){
    		datepost.getDatePosts().then(function(dateposts){
    			$scope.dateposts = dateposts; 		
    		});
    	});
    }
    $scope.facebookProfilePic = function(userid){
    	return 'https://graph.facebook.com/' + userid + '/picture?height=60'
    }
  });
