'use strict';

/**
 * @ngdoc function
 * @name kaffeAppApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the kaffeAppApp
 */
angular.module('kaffeAppApp')
    .controller('FeedCtrl', function ($scope, datepost, user, $q, $timeout) {
        $scope.showButton = true;
        $scope.showSpinner = true;
        $scope.showForm = false;

        var getPosts = function () {
            datepost.getDatePosts().then(function (dateposts) {
                user.getMyDatePost().then(function (datepost) {
                    $scope.showSpinner = false;
                    $scope.dateposts = dateposts;
                    console.log(dateposts)
                    if (datepost == '0') {
                        $scope.showForm = true;
                    } else {
                        $scope.showForm = false;
                    }
                })
            });
        };
        getPosts();
        user.getCurrentUser().then(function(user) {
            $scope.user = user;

        });
        $scope.addPost = function () {
            $scope.datepost.datetime = adjustTime($scope.datepost.datetime);
            datepost.addNewDatePost($scope.datepost).then(function (response) {
                getPosts();
            });
        };
        $scope.facebookProfilePic = function (userid) {
            return 'https://graph.facebook.com/' + userid + '/picture?height=120'
        };
        var adjustTime = function (arg) {
            var now = new Date();
            var dateTime = new Date(arg);
            dateTime.setMonth(now.getMonth());
            dateTime.setDate(now.getDate());
            dateTime.setFullYear(now.getFullYear());
            dateTime.setSeconds(0);
            console.log('Now :' + now);
            console.log('DateTime: ' + dateTime);
            return dateTime;
        };
        $scope.timeOffset = function (time) {
            var d = new Date(time);
            var hour = "";
            var minutes = "";
            if (d.getHours() < 10) {
                hour = '0' + d.getHours();
            }
            if (d.getHours() >= 10) {
                hour = d.getHours();
            }
            if (d.getMinutes() < 10) {
                minutes = '0' + d.getMinutes();
            }
            if (d.getMinutes() >= 10) {
                minutes = d.getMinutes();
            }
            return hour + ':' + minutes;
        };
        $scope.showRequestButton = function (posterid) {
            if($scope.user){
                return (!(posterid === $scope.user._id));
            }

        };
        $scope.sendRequest = function (_datepost) {
            _datepost.reqHasBeenSent = true;
            console.log(_datepost)
            datepost.sendRequestTo(_datepost._id).then(function (response) {
            });

        };
        $scope.userHasSentReq = function(_datepost){

            if($scope.user && _datepost.poster._id != $scope.user.id && _datepost.reqHasBeenSent){
                return true;
            } else {
                return false
            }
        }

        $scope.now = function(){
            return new Date();
        }

    });
