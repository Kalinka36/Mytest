require ('../page/submitData.js');
var chooseOption = function() {

this.selectConsole = function(data) {
	if(data == 0)
		return element.all(by.xpath('//*[@id="form-views"]/div[1]/div[1]/label/input')).click(); 
	else
		return element.all(by.xpath('//*[@id="form-views"]/div[1]/div[2]/label/input')).click(); 

};



this.nextOption =function(){
	element(by.xpath('//*[@id="form-views"]/div[2]/div/a')).click();
	return require('./submitData.js');
};


};
module.exports = new chooseOption();