'use strict';

/**
 * @ngdoc function
 * @name kaffeAppApp.controller:HeaderctrlCtrl
 * @description
 * # HeaderctrlCtrl
 * Controller of the kaffeAppApp
 */
angular.module('kaffeAppApp')
    .controller('HeaderctrlCtrl', function ($scope, $location, $rootScope, dateFactory) {

        $scope.search = function(e){
            //if(e.keyCode === 13){}
            $rootScope.searchQuery = $scope.searchBox;
        }

        $scope.showDateButton = false;
        $scope.showHeader = function () {
            return $location.$$path !== '/';
        }
        $scope.isActive = function (arg) {
            if (arg === $location.$$path) {
                return 'active'
            }
            return "";
        };
        dateFactory.getMyDate().then(function (response) {
            if (response !== false) {
                $scope.showDateButton = true;
            } else {
                $scope.showDateButton = false;
            }
        });



    });
