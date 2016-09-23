'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.module('goodDetail').component('goodDetail', {
  templateUrl: 'good-detail/good-detail.template.html',
  controller: ['$http', '$routeParams',
    function GoodDetailController($http, $routeParams) {
      var self = this;

      $http.get('goods/' + $routeParams.goodId + '.json').then(function(response) {
        self.good = response.data;

      });
    }]
  });
