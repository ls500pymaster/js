document.addEventListener("DOMContentLoaded", () => {
    const tasksContainer = document.createElement("ul");
    document.body.append(tasksContainer);
    const addButton = document.createElement("button");
    addButton.textContent = "Add Task 🟢";
    document.body.append(addButton);

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        if (storedTasks.length > 0) {
            storedTasks.forEach(task => addTask(task));
        } else {
            askForNewTasks();
        }
    }

    function askForNewTasks() {
        let taskText;
        while ((taskText = prompt("Enter your task")) !== null) {
            if (taskText.trim() !== '') {
                addTask(taskText);
            }
        }
        saveTasksToStorage();
    }

    addButton.addEventListener("click", () => {
        const taskText = prompt("Enter your task");
        if (taskText && taskText.trim() !== '') {
            addTask(taskText);
            saveTasksToStorage();
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.addEventListener("click", () => {
            taskItem.remove();
            saveTasksToStorage();
        });

        taskItem.append(deleteButton);
        tasksContainer.appendChild(taskItem);
    }

    function saveTasksToStorage() {
        const tasks = Array.from(tasksContainer.children).map(taskItem => {
            return taskItem.firstChild.textContent;
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    loadTasks();
});
