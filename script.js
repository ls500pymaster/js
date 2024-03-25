document.addEventListener("DOMContentLoaded", () =>{
    const list = document.createElement("ul");

    // Load tasks from localStorage or prompt the user for new tasks
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks && storedTasks.length > 0) {
            list.innerHTML = '';
            storedTasks.forEach(task => addTask(task));
        } else {
            startNotepad();
        }
    }

    // Launching notepad
    function startNotepad() {
        let taskText;
        while ((taskText = prompt("Enter your task")) !== null) {
            if (taskText.trim() !== '') {
                addTask(taskText);
                saveTasksToStorage();
            }
        }
    }

    // Button for adding new task
    const addButton = document.createElement("button");
    addButton.textContent = "Add task 🟢";
    document.body.append(addButton);

    // Event listener on click to add task
    addButton.addEventListener("click", () =>{
        const taskText = prompt("Enter your task");
        if (taskText !== null && taskText.trim() !== '') {
            addTask(taskText);
            saveTasksToStorage();
        }
    })

    // Add ul to the page
    document.body.append(list);

    // Function to add task to the list
    function addTask(taskText) {
        const task = document.createElement("li");
        task.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.onclick = function() {
            task.remove();
            saveTasksToStorage();
        };

        task.append(deleteButton);
        list.append(task);
    }

    // Save tasks to localStorage
    function saveTasksToStorage() {
        const taskTexts = Array.from(list.children).map(task => task.textContent);
        localStorage.setItem('tasks', JSON.stringify(taskTexts));
    }

    // Load tasks from localStorage or start notepad
    loadTasks();
});
