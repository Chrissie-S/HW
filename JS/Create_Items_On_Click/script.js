function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
    if (taskList.firstChild) {
        taskList.insertBefore(newTask, taskList.firstChild);
    } else {
        taskList.appendChild(newTask);
    }
    taskInput.value = '';
}