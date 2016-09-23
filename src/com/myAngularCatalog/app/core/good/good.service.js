'use strict';

angular.module('core.good').factory('Good', ['$resource',
    function($resource) {
      return $resource('goods/:goodId.json', {}, {
        query: {
          method: 'GET',
          params: {goodId: 'goods'},
          isArray: true
        }
      });
    }
  ]);
