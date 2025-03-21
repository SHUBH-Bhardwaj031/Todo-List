function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">Delete</button>`;
    taskList.appendChild(li);

    taskInput.value = ""; // Clear input field
}

function removeTask(task) {
    let taskList = document.getElementById("taskList");
    taskList.removeChild(task.parentElement);
}
