'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('jsWorkshop2App'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('add element', function () {
    var old_length = scope.list.length;
    var item = 'New Item';
    scope.new_item = item;
    scope.add();
    expect(scope.list.length).toBe(old_length + 1);
    expect(scope.list[0]).toBe(item);
  });
});
