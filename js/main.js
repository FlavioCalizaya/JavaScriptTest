import Task from "./task.js";
import TaskCollection from "./taskCollection.js";
import TaskForm from "./taskForm.js";


if(!localStorage.taskList){
    localStorage.taskList=[];
}

var taskList;
function syncTask() {
    window.localStorage.setItem('taskList', JSON.stringify(taskList));
    taskList = JSON.parse(window.localStorage.getItem('taskList'));
}
function generateUUID(){
    return Date.now();
}
(function(){
    if (!!(window.localStorage.getItem('taskList'))) {
        taskList = JSON.parse(window.localStorage.getItem('taskList'));
      } else {
        taskList = [];
      }
    const list = document.querySelector('#list');
    const form = document.querySelector('#form');
    const button = document.querySelector('#mainButton');
    
    const handleUpdate = function(event, taskProps2){
        taskCollection.update({id: taskProps2.id, name: taskProps2.name})
        const indice = taskList.indexOf(taskList.filter((task)=> task.id===taskProps2.id)[0]);
        let task = taskList.filter((task)=> task.id===taskProps2.id)[0]
        taskList[indice] = {id: taskProps2.id, name: taskProps2.name, isDone: task.isDone, tags: task.tags}
        syncTask();
        taskCollection.render();
    }

    const handleAddTag = function(event, tag2){
        taskCollection.addTag({id: tag2.id, tag: tag2.tag})
        const indice = taskList.indexOf(taskList.filter((task)=> task.id===tag2.id)[0]);
        let task = taskList.filter((task)=> task.id===tag2.id)[0]
        taskList[indice] = {id: task.id, name: task.name, isDone: task.isDone, tags: task.tags}
        console.log(taskList);
        syncTask();
        taskCollection.render();
    }
    const handleDelete = function(taskProps3){
        taskCollection.delete({id: taskProps3.id});
        taskList = taskList.filter((task)=> task.id!=taskProps3.id )
        syncTask();
        taskCollection.render();
    }
    const handleDonteTask = function(taskProps){
        taskCollection.doneTask({id: taskProps.id});
        const indice = taskList.indexOf(taskList.filter((task)=> task.id===taskProps.id)[0]);
        let task = taskList.filter((task)=> task.id===taskProps.id)[0]
        taskList[indice] = {id: task.id, name: task.name, isDone: true, tags: task.tags}
        console.log(taskList);
        syncTask();
        taskCollection.render();
    }
    button.onclick = () => {
        taskForm.render();
    }
    let taskCollection = new TaskCollection({rootElement: list});
    for(let i=0; i< taskList.length;i++){
        taskCollection.add(new Task({id:taskList[i].id, name: taskList[i].name, isDone:taskList[i].isDone, tags:taskList[i].tags, onUpdate: handleUpdate, onAddTag: handleAddTag, onDelete: handleDelete, onDoneTask: handleDonteTask}))
    }
    taskCollection.render();
    const taskForm = new TaskForm({
        rootElement: form,
        onSave: (event , taskProps) => {
           let task = new Task({id: generateUUID(), ...taskProps,isDone:false, onUpdate: handleUpdate, onAddTag: handleAddTag, onDelete: handleDelete, onDoneTask: handleDonteTask})
           taskCollection.add(task)
           taskList.push({id:task.id,...taskProps, isDone: false, tags: []})
           syncTask();
           console.log(localStorage.taskList)
           taskCollection.render();
                
           taskForm.unMount();
           document.querySelector('#form').removeChild(document.getElementsByClassName("task-form")[0]);
        },
        onCancel: () => {
            taskForm.unMount();
            document.querySelector('#form').removeChild(document.getElementsByClassName("task-form")[0]);
        },
        onPrintPendingTask: () => {
           taskCollection.exportPendingTasks();
        }
    })
   
}());