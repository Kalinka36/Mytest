var addTodo= function(){
	this.addText = function(nameText){
		element(by.model('todoList.todoText')).sendKeys(nameText);//dsfadsdfsdafasdfdas
		
	};

	
};
module.exports = new addTodo();
