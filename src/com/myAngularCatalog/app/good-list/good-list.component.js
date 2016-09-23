'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('goodList').component('goodList', {
    templateUrl: 'good-list/good-list.template.html',
    controller: ['$http', function GoodListController($http) {
      // this.goods = [
      //   {
      //     name: 'Кефир',
      //     snippet: 'Способствует восстановлению баланса бифидобактерий в организме.',
      //     price: 20
      //   }, {
      //     name: 'Творог',
      //     snippet: 'Способствует укреплению и здоровому росту мышц, костей и других тканей организма.',
      //     price: 40
      //   }, {
      //     name: 'Ряженка',
      //     snippet: 'Способствует очищению организма.',
      //     price: 50
      //   }
      // ];

      var self = this;
      self.orderProp = 'price';

      $http.get('goods/goods.json').then(function (response) {
        self.goods = response.data;
        self.goods = response.data.slice(0, 5);
      });
    }]
  });

/*
 angular.
 module('phoneList').
 component('phoneList', {
 templateUrl: 'phone-list/phone-list.template.html',
 controller: function PhoneListController($http) {
 var self = this;
 self.orderProp = 'age';


 $http.get('phones/phones.json').then(function(response) {
 self.phones = response.data;
 self.phones = response.data.slice(0, 5);
 });


 }
 });
 */
