'use strict';

/**
 * @ngdoc function
 * @name kaffeAppApp.controller:HeaderctrlCtrl
 * @description
 * # HeaderctrlCtrl
 * Controller of the kaffeAppApp
 */
angular.module('kaffeAppApp')
  .controller('HeaderctrlCtrl', function ($scope, $location) {
    $scope.showHeader = function(){
    	return $location.$$path !== '/';
    }
    $scope.isActive = function(arg){
    	if(arg === $location.$$path){
    		return 'active'
    	}
    	return "";
    }
  });
