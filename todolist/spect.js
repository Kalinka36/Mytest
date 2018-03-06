var util = require('util');
var addTodo = require('../pages/addTodo.js');
describe('to test the angularJs to-do-list site', function(){
	beforeEach(function(){
		browser.get('https://angularjs.org/');
	});

	it('should be able to add the todo list', function(){
		 
		var testData = require('../todoData.json');

		var name = testData.list;

		addTodo.addText(name);
		browser.sleep(4000);
		//element(by.model('todoList.todoText')).sendKeys(nameText);
		element(by.css('[value="add"]')).click();
		browser.sleep(6000);

		var todoList = element.all(by.repeater('todo in todoList.todos'));
	    expect(todoList.count()).toEqual(3);
	    expect(todoList.get(2).getText()).toEqual('hai there');
	   
	    todoList.get(2).element(by.css('input')).click();
	    var crossOff = element.all(by.css('.done-true'));
	    expect(crossOff.count()).toEqual(2);
	    browser.sleep(4000);

	});
});
