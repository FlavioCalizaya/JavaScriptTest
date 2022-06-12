import UpdateForm from "./updateForm.js";
import AddTagForm from "./addTagForm.js";
function generateButtons({content, onClick}){
    const button = document.createElement('button');
    button.textContent = content;
    button.onclick = onClick;
    return button;
}

export default class Task{
    constructor(props){
        const {tags=[]} = props;
        this.name = props.name;
        this.id = props.id;
        this.tags = tags;
        this.isDone = props.isDone;
        this.domElements = {
            deleteButton: null,
            editButton: null,
            title: null
        }
        this.onUpdate = props.onUpdate;
        this.onAddTag = props.onAddTag;
        this.onDelete = props.onDelete;
        this.onDoneTask = props.onDoneTask;
        this.updateForm = new UpdateForm({
        rootElement: document.querySelector('#form'),
          onSave: (event , taskProps) => {
             this.onUpdate(event, {id: this.id, name: taskProps.name})
             this.updateForm.unMount();
           document.querySelector('#form').removeChild(document.getElementsByClassName("update-task-form")[0]);
          },
          onCancel: () => {
              this.updateForm.unMount();
              document.querySelector('#form').removeChild(document.getElementsByClassName("update-task-form")[0]);
          }
         })
        this.addTagForm = new AddTagForm({
                rootElement: document.querySelector('#form'),
                  onSave: (event , tagTask) => {
                     this.onAddTag(event, {id: this.id, tag: tagTask.tag})
                     this.addTagForm.unMount();
                     document.querySelector('#form').removeChild(document.getElementsByClassName("add-tag-form")[0]);
                  },
                  onCancel: () => {
                    this.addTagForm.unMount();
                    document.querySelector('#form').removeChild(document.getElementsByClassName("add-tag-form")[0]);
                  }
                 }  
        ) 
    }
    handleUpdate = (event) => {
        this.updateForm.render();

    }
    handleAddTag = (event) => {
        this.addTagForm.render();

    }
    handleDelete = (event) => {
        this.onDelete({id:this.id});
    }
    handleDoneTask =(event) => {
        this.onDoneTask({id:this.id});
    }
    getDomElement(){
        const domTask = document.createElement('div');
        this.domElements.deleteButton = generateButtons({content: 'Eliminar', onClick: this.handleDelete })
        this.domElements.editButton = generateButtons({content: 'Editar', onClick: this.handleUpdate })
        this.domElements.addTagButton = generateButtons({content: 'Ag Tag', onClick: this.handleAddTag})
        this.domElements.doneTaskButton = generateButtons({content: 'Completado', onClick: this.handleDoneTask})
        this.domElements.deleteButton.classList.add('btn-delete');
        this.domElements.editButton.classList.add('btn-update');
        this.domElements.addTagButton.classList.add('btn-addTag');
        this.domElements.doneTaskButton.classList.add('btn-done-task');
        this.domElements.title = document.createElement('div');
        this.domElements.title.innerHTML = this.name+"<br> tags:" +this.tags;
        const butons = document.createElement('div');
        butons.classList.add('botones');
        domTask.innerHTML = this.name+"<br>: tags:" +this.tags+"<br> completado: "+ this.isDone;
        domTask.classList.add('task');
        domTask.id = "updateTask"
        butons.appendChild(this.domElements.deleteButton);
        butons.appendChild(this.domElements.editButton);
        butons.appendChild(this.domElements.addTagButton);
        butons.appendChild(this.domElements.doneTaskButton);
        domTask.appendChild(butons)
        return domTask;
    }
}
