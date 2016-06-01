'use strict';

angular.module('esys')
  .controller('HomeCtrl', function (Customer) {

    var vm = this;

    vm.tableVisible = false;

    vm.toggleTable = function () {
      vm.tableVisible = !vm.tableVisible;
    };

    vm.customers = [];

    Customer.query(function (customers) {
      vm.customers = customers;
    });

    angular.extend(vm, {
      name: 'HomeCtrl'
    });

  });
