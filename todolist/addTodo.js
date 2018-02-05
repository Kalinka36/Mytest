var addTodo= function(){
	this.addText = function(nameText){
		element(by.model('todoList.todoText')).sendKeys(nameText);
		
	};

	
};
module.exports = new addTodo();
