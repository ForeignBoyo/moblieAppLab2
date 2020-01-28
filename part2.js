var x = "Hello World";
console.log(x);
// (a) - Create an array of strings.
var myTasksArray = [];
/*(b) - Create an addTask function:
i. It receives a string as a parameter called task.
ii. It adds the task to the array.
iii. It prints a message in the console indicating the insertion.
iv. It returns the number of elements in the array after the insertion.*/
function addTask(task) {
    myTasksArray.push(task);
    console.log("Item " + task + "has been added to the Array");
    return myTasksArray.length;
}
addTask("Complete Lab ");
var numberOfTasks = addTask("Eat Breakfast ");
console.log("The number of tasks to do today is " + numberOfTasks);
/* (c) - Create a listAllTasks function:
i. It iterates over all the tasks in the array.
ii. It prints each array item in the console.*/
function listAllTasks() {
    //for(let i = 0; i < myTasksArray.length; i++){
    //}
    console.log("Array contains the following items: ");
    myTasksArray.forEach(function (task) {
        console.log(task);
    });
}
listAllTasks();
/* (d) Create a deleteTask function:
i. It receives a string as a parameter called task.
ii. It removes that string from the array.
iii. It prints in console a message indicating the deletion.
iv. It returns the number of elements in the array after the deletion*/
function deleteTask(task) {
    var index = myTasksArray.indexOf(task);
    if (index > -1) {
        myTasksArray.splice(index, 1);
        console.log("Item " + task + "has been deleted from the Array");
    }
    else {
        console.log("Item " + task + "not in Array");
    }
    return myTasksArray.length;
}
deleteTask("Complete Lab ");
