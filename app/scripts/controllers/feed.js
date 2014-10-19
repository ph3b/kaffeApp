'use strict';

/**
 * @ngdoc function
 * @name kaffeAppApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the kaffeAppApp
 */
angular.module('kaffeAppApp')
    .controller('FeedCtrl', function ($scope, datepost, user, $q) {
        $scope.showButton = true;
        $scope.showSpinner = true;
        var getPosts = function () {
            datepost.getDatePosts().then(function (dateposts) {
                $scope.dateposts = dateposts;
                $scope.showSpinner = false;
                user.getMyDatePost().then(function (datepost) {
                    if (datepost == '0') {
                        $scope.showForm = true;
                    } else {
                        $scope.showForm = false;
                    }
                })
            });
        };
        getPosts();
        user.getCurrentUser().then(function (user) {
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
            if (d.getMinutes() > 10) {
                minutes = d.getMinutes();
            }
            return hour + ':' + minutes;
        };
        $scope.showRequestButton = function (posterid) {
            return !(posterid === $scope.user._id)
        };
        $scope.sendRequest = function (datepostid) {
            datepost.sendRequestTo(datepostid).then(function (response) {
            })
        };
        $scope.now = function(){
            return new Date();
        }
    });
