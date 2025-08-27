// TO DO LIST

// Global state
let tasks = [];
let nextId = 1;

// Core functions
const addTask = (name) => {
    if (!name) {
        console.log("Task name cannot be empty")
        return null
    } else {
        tasks.push({
            name:name,
            id: nextId,
            complete: false
        })
        nextId ++;
    }
}
const listTasks = () => {
    if (tasks.length === 0) { // empty array in JS is truthy. so instead use property tasks.length to check if the array is occupied or not
        console.log("No Tasks Yet. Unable To Show Any Task")
        return null
    } else {
        for (let task in tasks) {
            console.log(`${task.nextId} : ${task.name} ${task.complete ? '✅' : '❌'} `) // ternary operator will evaluate to a value
        }
    }
}

const completeTask = (id) => {
    if (id >= nextId) {
        console.log(`Task ${id} does not exist`)
        return null
    } else {
        for (let task in tasks) {
            if (task.id === id) {
                task.complete = true;
                console.log('Task has been completed')
                return
            } else {
                continue
            }
        }
    }
}

const listOpenTasks = () => {
    tasks.forEach((task) => {
        if (task.complete === false) {
            console.log(`Task ${task.id} : ${task.name} ❌`)
        }
    })
}

const deleteTask = (id) => {
    if (id >= nextId) {
        console.log("Task does not exist.")
        return
    } else {
        for (let task in tasks) {
            if (task.id === id){
                tasks.
            }
        }
    }
}