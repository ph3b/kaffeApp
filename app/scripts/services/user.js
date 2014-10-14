'use strict';

/**
 * @ngdoc service
 * @name kaffeAppApp.user
 * @description
 * # user
 * Factory in the kaffeAppApp.
 */
angular.module('kaffeAppApp')
  .factory('user', function ($http, $q, apibase) {
    return {
      getCurrentUser: function () {
        var deferred = $q.defer();
        $http.get(apibase + 'currentuser').success(function(user){
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
      },
      getUser: function(userid){
        var deferred = $q.defer();
        $http.get(apibase + 'user/' + userid).success(function(user){
          deferred.resolve(user)
        })
        return deferred.promise;
      },
      getMyDatePost: function(){
        var deferred = $q.defer();
        $http.get(apibase + 'mydatepost').success(function(reponse){
          if(reponse !== '0'){
            deferred.resolve(reponse);
          } else {
            deferred.resolve(false);
          }
        })
        return deferred.promise;
      }
    };
  });
