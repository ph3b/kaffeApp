'use strict';

/**
 * @ngdoc service
 * @name kaffeAppApp.UserFactory
 * @description
 * # UserFactory
 * Factory in the kaffeAppApp.
 */
angular.module('kaffeAppApp')
  .factory('UserFactory', function () {

    return {
      getFacebookPic: function (userid) {
          return 'https://graph.facebook.com/' + userid + '/picture?height=120'
      }
    };
  });
