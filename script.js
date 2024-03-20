document.addEventListener("DOMContentLoaded", () =>{
    const list = document.createElement("ul");
    const tasks = [];

    // Function for launching notepad
    function startNotepad() {
        let taskText;
        while ((taskText = prompt("Enter your task")) !== null) {
            if (taskText.trim() !== '') {
                addTask(taskText);
            }
        }
    }

    // Start notepad and add ul
    startNotepad();
    document.body.append(list);

    // Button for adding new task
    const addButton = document.createElement("button");
    addButton.textContent = "Add task 🟢";
    document.body.append(addButton);

    // Event listener on click to add task
    addButton.addEventListener("click", () =>{
        const taskText = prompt("Enter your task");
        if (taskText !== null && taskText.trim() !== '') {
            addTask(taskText);
        }
    })

    function addTask(taskText) {

        const task = document.createElement("li");
        task.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.onclick = function() {
            task.remove();
        };

        task.append(deleteButton);
        list.append(task);
    }
});
