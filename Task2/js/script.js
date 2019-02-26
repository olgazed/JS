	
	/*2. Create a TODO list with the following UI controls
    * Form input for new Item
    * Button for adding the new Item
    * Button for deleting some item
    * Show and Hide Button */

var inputTask = document.getElementById("newTask");
var tasksToDo = document.getElementById("tasksToDo");
var addButton = document.getElementById("add");
var showButton = document.getElementById("show");
var hideButton = document.getElementById("hide");

function createNewElement (task) {
	var listItem = document.createElement("li");
	var label = document.createElement("label");
	label.innerText = task;
	var input = document.createElement("input");
	input.type = "text";
	var deleteButton = document.createElement("button");
	deleteButton.className = "delete";
	deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';

	listItem.appendChild(label);
	listItem.appendChild(input);
	listItem.appendChild(deleteButton);

	return listItem;
}

function addTask() {
	if (inputTask.value) {
		var listItem = createNewElement(inputTask.value, false);
		tasksToDo.appendChild(listItem);
		bindTaskEvents(listItem, tasksToDo);
		inputType.value = "";
	}
}

addButton.onclick = addTask;

function deleteTask() {
	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	ul.removeChild(listItem);
}

function tasksToDo() {
	var listItem = this.parentNode;
	tasksToDo.appendChild(listItem);
}

function bindTaskEvents (listItem) {
	var deleteButton = listItem.querySelector("button.delete");

	deleteButton.onclick = deleteTask;
}

function showHideTasks(a) {
	if (a == 1)
 		document.getElementById("tasksToDo").style.display = "none";
 	else
  		document.getElementById("tasksToDo").style.display = "block";
}