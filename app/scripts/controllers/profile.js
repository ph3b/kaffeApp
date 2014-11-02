'use strict';

/**
 * @ngdoc function
 * @name kaffeAppApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the kaffeAppApp
 */
angular.module('kaffeAppApp')
  .controller('ProfileCtrl', function ($scope, user, datepost, $location) {
    $scope.hasBio = true;
    $scope.profileIsLoaded = false;
    $scope.showSpinner = true;

    user.getCurrentUser().then(function(user){
        $scope.profileIsLoaded = true;
    	$scope.facebookPhoto = 'https://graph.facebook.com/' + user.facebookid + '/picture?height=72';
    	$scope.user = user;
        console.log($scope.user)

        $scope.showSpinner = false;
    	if($scope.user.bio === null || $scope.user.bio === ""){
    		$scope.hasBio = false;
    	} else {
    		$scope.hasBio = true;
    	}
    })
    user.getMyDatePost().then(function(response){
        $scope.activePost = response; // TODO

    });

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
    $scope.timeOffset = function(time){
        var d = new Date(time)
        var hour = "";
        var minutes = "";
        if(d.getHours() < 10){
            hour = '0' + d.getHours();
        }
        if(d.getHours() >= 10){
            hour = d.getHours();
        }
        if(d.getMinutes() < 10){
            minutes = '0' + d.getMinutes();
        }
        if(d.getMinutes() >= 10){
            minutes = d.getMinutes();
        }
        return hour + ':' + minutes;
    };
    $scope.facebookProfilePic = function(userid){
        return 'https://graph.facebook.com/' + userid + '/picture?height=120'
    }
    $scope.deleteDatePost = function(id){
        datepost.deleteDatePost(id).then(function(response){
            user.getMyDatePost().then(function(response){
                $scope.activePost = response; // TODO
            });
        })
    };
    $scope.acceptRequest = function(requserid, activepostid){
        datepost.acceptRequest(requserid, activepostid).then(function(response){
            $location.path('/date')
        })
    }

  });
