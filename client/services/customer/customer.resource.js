'use strict';

angular.module('esys')
  .factory('Customer', function ($resource) {
    return $resource('/api/customers');
  });
