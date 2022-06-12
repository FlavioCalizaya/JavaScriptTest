export default class TaskCollection{
    constructor({initialValue=[], rootElement}){
        this.rootElement = rootElement;
        this.value = initialValue;
    }
    render(){
        this.rootElement.innerHTML = "";
        const tasks = this.value.map(task => task.getDomElement())
        tasks.forEach(task => this.rootElement.appendChild(task)) 
    }
    add(task){
        this.value.push(task);
    }
    update(task1){
         const updateTask = this.value.find(task => task.id === task1.id )
         if(updateTask){
             updateTask.name =  task1.name;  
         }else{
               throw new Error("task not found");  
         }    
    }
    
    addTag({id, tag}){
        const addingTask = this.value.find(task => task.id === id )
        if(addingTask){
         
            addingTask.tags.push(tag);
 
          
        }else{
              throw new Error("task not found");  
        }
    }
    delete({id}){
        const index = this.value.findIndex((task) =>  task.id === id);
        if (index>=0) {
            this.value.splice(index,1);
        } else {
          throw new Error("Tasl not found!");
        }
      
    } 
    doneTask({id}){
        const donedTask = this.value.find(task => task.id === id )
         if(donedTask){
            donedTask.isDone = true;
          
        }else{
              throw new Error("task not found");  
        }
    }
    exportPendingTasks(){
        const pendingTasks = this.value.filter( task => task.isDone === false );
        if(pendingTasks){
           console.log('pending',pendingTasks);     
           let csvContent = "data:text/csv;charset=utf-8," 
           + this.value.map(e => e.join(",")).join("\n");
   
       }else{
             throw new Error("Pending task not found");  
       }
       var encodedUri = encodeURI(csvContent);
       window.open(encodedUri);
    }

}