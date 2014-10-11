'use strict';

/**
 * @ngdoc overview
 * @name kaffeAppApp
 * @description
 * # kaffeAppApp
 *
 * Main module of the application.
 */
angular
  .module('kaffeAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap',
    'mgcrea.ngStrap.helpers.dimensions',
    'mgcrea.ngStrap.helpers.dateParser'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    
    var apibase = 'http://localhost:3000/api/';

    var checkLoggedIn = function($q, $timeout, $http, $location, $rootScope){
        var deferred = $q.defer();

        $http.get(apibase + 'isloggedin').success(function(user){
          if(user !== '0'){
            $timeout(deferred.resolve, 0);
          }
          else {
            $timeout(function(){
              deferred.reject();
            }, 0)
            $location.url('/login')
          }
        })
      }

      var isLoggedIn = function($q, $timeout, $http, $location, $rootScope){
        var deferred = $q.defer();

        $http.get(apibase + 'isloggedin').success(function(user){
          if(user == '0'){
            $timeout(deferred.resolve, 0);
          }
          else {
            $timeout(function(){
              deferred.reject();
            }, 0)
            $location.url('/feed')
          }
        })
      }

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve : {
          loggedIn : isLoggedIn
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/feed', {
        templateUrl: 'views/feed.html',
        controller: 'FeedCtrl',
        resolve : {
          loggedIn : checkLoggedIn
        }
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        resolve: {
          loggedIn : checkLoggedIn
        }
      })
      .when('/user/:id', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
        resolve: {
          loggedIn : checkLoggedIn
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
