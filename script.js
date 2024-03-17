const list = document.createElement("ul");
const tasks = [];

function startNotepad() {
    addTask();
    createList(tasks);
    document.body.append(list);
}

function addTask() {
    while (true) {
        const task = prompt("Enter your task");
        if (task === null) {
            break;
        }
        tasks.push(task);
    }
}

function createList(tasks) {
    tasks.forEach((task) => {
        console.log(task);
        const listItem = document.createElement("li");
        listItem.textContent = task;
        list.append(listItem);
    })
}

startNotepad();

