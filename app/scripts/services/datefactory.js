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
            var defer = $q.defer();
            $http.get(apibase + 'date/' + dateid).success(function(date){
                console.log(date);
                defer.resolve(date);
        });
        return defer.promise;
      },
      endDate: function(dateid){
          var defer = $q.defer();
          $http.put(apibase + 'date/' + dateid).success(function(response){
              defer.resolve(response);
          });
        return defer.promise;
      },
      getMyDate : function(){
          var defer = $q.defer();
          $http.get(apibase + 'date/mydate').success(function(response){
              if(response !== '0'){

                  defer.resolve(response)
              } else {
                  defer.resolve(false)
              }
          });
        return defer.promise;
      }
    };
  });