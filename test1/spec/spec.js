var util = require('util');

var getOptions = require('../page/getOptions.js');

describe('to test the learning protractor site', function(){
	beforeEach(function(){
		browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');
	});	

	it('should be able to test protractor site by page objects', function(){
		 
		var testData = require('../data.json');

		var name = testData.dataName;
		var email = testData.email;
		console.log(name);
		console.log(email);

		getOptions.setText(name, email);

		getOptions.dynamicText().then(function (data) {
			console.log(typeof(data));
			data = data.trim();
			expect(data).toBe('{"name":"aleena","email":"gyu@gmail.com"}');         
		});
		
		var chooseOption = getOptions.nextOption();
		chooseOption.selectConsole(0);
		var submitData = chooseOption.nextOption();
		browser.sleep(2000);
		submitData.confirmButton();
	});
})