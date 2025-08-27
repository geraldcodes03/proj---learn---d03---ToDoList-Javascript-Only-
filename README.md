Scope: Single-File JS, console output (no UI yet)
Timebox: 2-3 hours max
Definition of Done: All user inputs pass into the console, code commented, README has run steps

Goal: A console To Do App to add/view/complete tasks

Users And Actions:

    User : 
        Me using Node.js

    Primary Actions :
        - Add task
        - List tasks
        - Mark tasks as complete
        - List only incomplete
        - Delete task

User Acceptance Criteria:

    1. Add a task : When I call addTask("Read"), then tasks will contain an item with a unique id, name:"Read", completed: "false"
    2. List a task: When I call listTask(), I see numbered lines that contain all tasks
    3. Complete a task: When I call completeTask(1), the task with id "1"'s completed property will become true and listTasks show its completed with a tick
    4. List incomplete only: When I call listIncompleteTasks(), only tasks with completed:false will be displayed
    5. Delete a task: When I call deleteTask(1), task with id "1" will be removed and listTasks will show that it is gone.

Data model:

    tasks: Array<Task>
    Task: {
        id:number,
        name:string,
        completed:boolean
    }
    nextId: number (to be auto-incremented)

    id is unique
    name is non-empty string

API:

    //state
    let tasks = []
    let nextId = 1

    //core functions
    function addTask(name) {}
        - addTask("") // reject with message
        - duplicate names are allowed, ids will differentiate
    function listTasks() {}
        - listTasks() when !tasks to show "No tasks yet"
    function completeTask(id) {}
        - completeTask(id) // where id does not exist, show "not found"
    function listOpenTasks() {}
    function deleteTask(id) {}
        - delteTask(id) // where id does not exist, show "not found"
    function clearAll() {}

Control Flow:

    1. User calls function
    2. Validate input
    3. Update tasks array
    4. Return/print formatted output

Test cases:

addTask("Finish homework");   // expect id 1
addTask("Practice JavaScript"); // id 2
listTasks();                  // 1 ❌, 2 ❌
completeTask(1);              // set 1 ✅
listOpenTasks();              // shows only id 2
completeTask(99);             // "Task 99 not found"
deleteTask?.(2);              // optional
listTasks();                  // reflect changes

File Plan And Commits:

    1. main.js (all code)
    2. README.md (how to run + API)

    // Commit checkpoints
    1. Scaffold state + addTask
    2. listTasks
    3. completeTask
    4. listOpenTasks
    5. Edge cases + clean up

