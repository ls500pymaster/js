document.addEventListener("DOMContentLoaded", () =>{
    const list = document.createElement("ul");
    document.body.append(list);

    const addButton = document.createElement("button");
    addButton.textContent = "Add task 🟢";
    document.body.append(addButton);

    addButton.addEventListener("click", () =>{
        const taskText = prompt("Enter your task");
        if (taskText) {
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
