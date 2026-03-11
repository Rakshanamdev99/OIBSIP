function addTask(){

let input = document.getElementById("taskInput");
let task = input.value;

if(task === ""){
alert("Please enter a task");
return;
}

let li = document.createElement("li");
li.innerHTML = task + 
' <button onclick="completeTask(this)">✔</button> ' +
' <button onclick="deleteTask(this)">❌</button>';

document.getElementById("pendingList").appendChild(li);

input.value = "";
}

function completeTask(button){

let li = button.parentElement;

button.remove();

document.getElementById("completedList").appendChild(li);
}

function deleteTask(button){

button.parentElement.remove();

}
