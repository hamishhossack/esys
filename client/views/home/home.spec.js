'use strict';

describe('Controller: HomeCtrl', function () {

  beforeEach(module('esys'));

  var HomeCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('should have a hidden table', function () {
    expect(HomeCtrl.tableVisible).toBe(false);
  });

  it('should have a visible table after toggle', function () {
    HomeCtrl.toggleTable();
    expect(HomeCtrl.tableVisible).toBe(true);
  });

  it('should have a hidden table after double toggle', function () {
    HomeCtrl.toggleTable();
    HomeCtrl.toggleTable();
    expect(HomeCtrl.tableVisible).toBe(false);
  });

});
