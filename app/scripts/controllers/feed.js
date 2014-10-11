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
    	$scope.datepost.datetime = adjustTime($scope.datepost.datetime);
    	datepost.addNewDatePost($scope.datepost).then(function(response){
    		datepost.getDatePosts().then(function(dateposts){
    			$scope.dateposts = dateposts; 		
    		});
    	});
  		
  		console.log($scope.datepost.datetime)
    }
    $scope.facebookProfilePic = function(userid){
    	return 'https://graph.facebook.com/' + userid + '/picture?height=120'
    }
    var adjustTime = function(arg){
    	var today = new Date();
  		var d = new Date(arg);
  		d.setFullYear(today.getFullYear());
  		d.setMonth(today.getMonth());
  		d.setUTCDate(today.getUTCDate());
  		d.setSeconds(0);
  		return d;
    }
    $scope.timeOffset = function(time){
    	var d = new Date(time)
    	var hour = "";
    	var minutes = "";
    	if(d.getHours() < 10){
    		hour = '0' + d.getHours();
    	}
    	if(d.getHours() > 10){
    		hour = d.getHours();
    	}
    	if(d.getMinutes() < 10){
    		minutes = '0' + d.getMinutes();
    	}
    	if(d.getMinutes() > 10){
    		minutes = d.getMinutes();
    	}
    	return hour + ':' + minutes;
    }

  });
