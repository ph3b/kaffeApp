'use strict';

/**
 * @ngdoc service
 * @name kaffeAppApp.dateFactory
 * @description
 * # dateFactory
 * Factory in the kaffeAppApp.
 */
angular.module('kaffeAppApp')
  .factory('dateFactory', function (apibase, $http, $q) {
    return {
      getDate: function (dateid) {
            var deferred = $q.defer();
            $http.get(apibase + 'date/' + dateid).success(function(date){
                console.log(date);
                deferred.resolve(date);
        });
        return deferred.promise;
      },
      endDate: function(dateid){
          var deferred = $q.defer();
          $http.put(apibase + 'date/' + dateid).success(function(response){
              deferred.resolve(response);
          });
        return deferred.promise;
      },
      getMyDate : function(){
          var deferred = $q.defer();
          $http.get(apibase + 'date/mydate').success(function(response){
              if(response !== '0'){

                  deferred.resolve(response)
              } else {
                  deferred.resolve(false)
              }
          });
        return deferred.promise;
      }
    };
  });