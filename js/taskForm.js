
function generateButtons({content, onClick}) {
  const button = document.createElement('button');
  button.textContent = content;
  button.onclick = onClick;
  return button;
}

export default class TaskForm{
    constructor({rootElement, onSave, onCancel, onPrintPendingTask}){
        this.rootElement = rootElement;
        this.onSave = onSave;
        this.onCancel = onCancel;
        this.onPrintPendingTasks = onPrintPendingTask;
        this.domElements = {
            container: null,
            input: null,
            buttonAccept: null,
            buttonCancel: null,
            buttonPrintPengingTasks: null
        }
    }
    handleSave = (event) => {
        const name = this.domElements.input.value;
        this.onSave(event, {name});
    }

    handleCancel = (event) => {
        this.onCancel(event);
    }
    handlePendingTasks = (event) =>{
        console.log("pendis");
        this.onPrintPendingTasks(event);
       
    }

    generateContainer(){
        const {input, buttonCancel, buttonAccept, buttonPrintPengingTasks } = this.domElements;
        this.domElements.container = document.createElement('div');
        this.domElements.container.classList.add('task-form');
        this.domElements.container.appendChild(input);
        this.domElements.container.appendChild(buttonCancel);
        this.domElements.container.appendChild(buttonAccept);
        this.domElements.container.appendChild(buttonPrintPengingTasks);
        this.rootElement.appendChild(this.domElements.container);
    }
   
   render(){
       this.unMount();
       this.domElements.input = document.createElement('input');
       this.domElements.input.placeholder = "nombre de tarea";
       this.domElements.buttonAccept = generateButtons({ content: 'Aceptar', onClick: this.handleSave});
       this.domElements.buttonCancel = generateButtons({ content: 'Cancelar', onClick: this.handleCancel});
       this.domElements.buttonPrintPengingTasks = generateButtons({ content: 'Imprimir tareas pendientes', onClick: this.handlePendingTasks});

       this.generateContainer();
   } 

   unMount(){
       this.rootElement.innerHtml = "";
   }
}