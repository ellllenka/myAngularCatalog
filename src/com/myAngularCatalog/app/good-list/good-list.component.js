'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('goodList').component('goodList', {
    templateUrl: 'good-list/good-list.template.html',
    controller: ['Good', function GoodListController(Good) {

      this.goods = Good.query();
      this.orderProp = 'price';

      // $http.get('goods/goods.json').then(function (response) {
      //   self.goods = response.data;
      //   self.goods = response.data.slice(0, 5);
      // });
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
