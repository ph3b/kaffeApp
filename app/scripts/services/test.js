'use strict';

/**
 * @ngdoc service
 * @name kaffeAppApp.test
 * @description
 * # test
 * Factory in the kaffeAppApp.
 */
angular.module('kaffeAppApp')
  .factory('test', function ($http, $q) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      getUsers: function () {
        var deferred = $q.defer();
        $http.get('http://localhost:3000/api/users').success(function(response){
          deferred.resolve(response);
        })
      return deferred.promise;
      }
    };
  });
