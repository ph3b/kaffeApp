'use strict';

/**
 * @ngdoc service
 * @name kaffeAppApp.datepost
 * @description
 * # datepost
 * Factory in the kaffeAppApp.
 */
angular.module('kaffeAppApp')
  .factory('datepost', function ($http, $q) {
    // Service logic
    // ...

    var apibase = 'http://localhost:3000/api/'

    // Public API here
    return {
      addNewDatePost: function (datepost) {
        var deferred = $q.defer();
        $http.post(apibase + 'dateposts', datepost).success(function(response){
          deferred.resolve(response);
        })
        return deferred.promise;
      },
      getDatePosts: function(){
        var deferred = $q.defer();
        $http.get(apibase + 'dateposts').success(function(dateposts){
          deferred.resolve(dateposts);
        })
      return deferred.promise;
      },
      deleteDatePost : function(datepostid){
        var deferred = $q.defer();
        $http.delete(apibase + 'datepost/' + datepostid).success(function(response){
          deferred.resolve(response);
        })
        return deferred.promise; 
      },
      sendRequestTo : function(datepostid){
        var deferred = $q.defer();
        $http.post(apibase + 'datepost/' + datepostid).success(function(response){
          deferred.resolve(response);
        })
        return deferred.promise;
      },
      acceptRequest : function(requserid, datepostid){
        var deferred = $q.defer();
        $http.post(apibase + 'date/' + datepostid +'/'+requserid).success(function(response){
          console.log(response)
          deferred.resolve(response);
        })
        return deferred.promise;
      }
    };
  });
