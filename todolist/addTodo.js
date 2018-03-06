var addTodo= function(){
	this.addText = function(nameText){
		element(by.model('todoList.todoText')).sendKeys(nameText);//dsfad
		
	};

	
};
module.exports = new addTodo();
