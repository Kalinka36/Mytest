require ('../page/submitData.js');
var submitData = function(){

this.confirmButton = function(){

	var submitButton = $('.btn');
		submitButton.click();

	var EC = protractor.ExpectedConditions;
		browser.wait(EC.alertIsPresent(), 5000, "Alert is not getting present :(");
		browser.switchTo().alert().accept();
		browser.sleep(5000);

};

};
module.exports = new submitData();