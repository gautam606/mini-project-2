let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

function addTask() {
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create new list item
  let li = document.createElement("li");
  li.innerHTML = `
    ${taskText}
    <button onclick="deleteTask(this)">❌</button>
  `;

  taskList.appendChild(li);
  taskInput.value = ""; // clear input
}

function deleteTask(button) {
  let li = button.parentElement;
  li.remove();
}