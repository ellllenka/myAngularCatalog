'use strict';

angular.module('catalogApp').config(['$locationProvider' ,'$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/goods', {
      template: '<good-list></good-list>'
    }).
    when('/goods/:goodId', {
      template: '<good-detail></good-detail>'
    }).
    otherwise('/goods');
  }
]);
