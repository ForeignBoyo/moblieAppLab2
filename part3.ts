import {tasksInterface} from './interface';

class Todos implements tasksInterface{
    myTasksArray: Array <string> = [];

    addTask(task: string): number{

        this.myTasksArray.push(task);
        console.log("Item " + task + "has been added to the Array");
    
        return this.myTasksArray.length; //this - specify the instance of the array
    }

    listAllTasks():void {

        //for(let i = 0; i < myTasksArray.length; i++){
        //}
        console.log("Array contains the following items: ")
        this.myTasksArray.forEach(function(task){
            console.log(task);
        })
    }

    deleteTask(task: string): number{

        let index:number = this.myTasksArray.indexOf(task);
        if(index > -1)
        {
            this.myTasksArray.splice(index,1);
            console.log("Item " + task + "has been deleted from the Array");
        }else {
            console.log("Item " + task + "not in Array");
        }
        
        return this.myTasksArray.length;
    }
}

let todo = new Todos();
todo.addTask("Complete Lab ");
todo.listAllTasks();
todo.deleteTask("Complete Lab ");