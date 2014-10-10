'use strict';

/**
 * @ngdoc function
 * @name kaffeAppApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the kaffeAppApp
 */
angular.module('kaffeAppApp')
  .controller('FeedCtrl', function ($scope, test, datepost) {
    
    datepost.getDatePosts().then(function(dateposts){
    	$scope.dateposts = dateposts;
    	console.log($scope.dateposts)
    });

    $scope.addPost = function(){
    	datepost.addNewDatePost($scope.datepost).then(function(response){
    		console.log(response)
    	});
    }
  });
