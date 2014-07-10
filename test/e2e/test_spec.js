describe('workshop angular', function() {
  it('should greet the named user', function() {
    // Load the AngularJS homepage.
    browser.get('/');

    // Find the element with ng-model matching 'yourName' - this will
    // find the <input type="text" ng-model="yourName"/> element - and then
    // type 'Julie' into it.
    element(by.model('field1')).sendKeys('Julie');

    // Find the element with binding matching 'yourName' - this will
    // find the <h1>Hello {{yourName}}!</h1> element.
    var greeting = element(by.binding('field1'));

    // Assert that the text element has the expected value.
    // Protractor patches 'expect' to understand promises.
    expect(greeting.getText()).toEqual('Julie');
  });
});
