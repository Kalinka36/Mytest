
require ('../page/chooseOption.js');
var content= null;
var getOptions= function(){

	this.setText= function(nameValue, emailValue){
	element(by.model('formData.name')).sendKeys(nameValue);
	element(by.model('formData.email')).sendKeys(emailValue);
	};



	this.dynamicText= function(){

		var deferred = protractor.promise.defer();

		var text= element(by.css('.ng-binding'));
			
		text.getText().then(function (data) { 
			return deferred.fulfill(data);
		});
		return deferred.promise;
	};

	this.nextOption=function(){
		element(by.xpath('//*[@id="form-views"]/div[3]/div/a')).click();
		return require('./chooseOption.js');
	};	
};

module.exports = new getOptions();