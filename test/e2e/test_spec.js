describe('add new item to todo list', function() {
  it('should greet the named user', function() {
    browser.get('/');
    var new_item = 'New Item';
    element(by.model('new_item')).sendKeys(new_item);
    element(by.css('.add')).click();
    element.all(by.repeater('item in items').then(function(items) {
      expect(items[0].getText()).toEqual(new_item);
    }));
  });
});
