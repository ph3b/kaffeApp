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
        return;
      }
    };
  });
