'use strict';

/**
 * @ngdoc function
 * @name kaffeAppApp.controller:DateCtrl
 * @description
 * # DateCtrl
 * Controller of the kaffeAppApp
 */
angular.module('kaffeAppApp')
  .controller('DateCtrl', function ($scope, dateFactory, UserFactory, $location) {
        $scope.UserFactory = UserFactory;

        dateFactory.getMyDate().then(function(response){
            $scope.date = response;
            $scope.host = response.host;
            $scope.guest = response.guest;
        });
        // Denne er helt feil. Må regne ut sekunder fra midnatt og subtrahere.
        $scope.timeLeftToDate = function(time){
            var now = new Date();
            var dateTime = new Date(time);
            var minutesToDate = dateTime.getMinutes() - now.getMinutes();
            var hoursToDate = dateTime.getHours() - now.getHours();
            if(hoursToDate == 0){
                return minutesToDate + ' minutter.';
            }
            if(hoursToDate == 1){
                return hoursToDate + ' time og ' + minutesToDate + ' minutter.';
            }
            if(hoursToDate > 1){
                return hoursToDate + ' timer og ' + minutesToDate + ' minutter.';
            }
        };
        $scope.endDate = function(dateid){
            dateFactory.endDate(dateid).then(function(response){
            })
        }

  });
