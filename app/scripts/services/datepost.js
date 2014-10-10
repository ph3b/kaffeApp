'use strict';

/**
 * @ngdoc service
 * @name kaffeAppApp.datepost
 * @description
 * # datepost
 * Factory in the kaffeAppApp.
 */
angular.module('kaffeAppApp')
  .factory('datepost', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
