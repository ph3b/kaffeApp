'use strict';

/**
 * @ngdoc service
 * @name kaffeAppApp.user
 * @description
 * # user
 * Factory in the kaffeAppApp.
 */
angular.module('kaffeAppApp')
  .factory('user', function ($http, $q) {
    var apibase = 'http://localhost:3000/api/';

    return {
      getCurrentUser: function () {
        var deferred = $q.defer();
        $http.get(apibase + 'user').success(function(user){
          deferred.resolve(user);
        })
        return deferred.promise;
      },
      setNewBio: function(bio){
        var deferred = $q.defer();
        $http.put(apibase + 'user', bio).success(function(response){
          deferred.resolve(response);
        })
      return deferred.promise;
      },
      getFacebookId : function(userid){
        var deferred = $q.defer();
        $http.get(apibase + 'user/' + userid).success(function(fbId){
          deferred.resolve(fbId)
        })
        return deferred.promise;
      }
    };
  });
