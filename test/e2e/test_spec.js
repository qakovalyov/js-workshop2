describe('add new item to todo list', function() {
  it('should greet the named user', function() {
    browser.get('#/todo_list');
    var new_item = 'New Item';
    element(by.model('new_item')).sendKeys(new_item);
    element(by.css('[ng-click="add()"]')).click();
    list = element.all(by.repeater('item in list track by $index'))
    expect(list.get(0).getText()).toEqual(new_item);
  });
});
