
function generateButtons({content, onClick}) {
  const button = document.createElement('button');
  button.textContent = content;
  button.onclick = onClick;
  return button;
}

export default class AddTagForm{
    constructor({rootElement, onSave, onCancel}){
        this.rootElement = rootElement;
        this.onSave = onSave;
        this.onCancel = onCancel;
        this.domElements = {
            container: null,
            input: null,
            buttonAcceptE: null,
            buttonCancelE: null
        }
    }
    handleSave = (event) => {
        const tag = this.domElements.input.value;
        this.onSave(event, {tag});
    }

    handleCancel = (event) => {
        this.onCancel(event);
    }
    generateContainer(){
        const {input, buttonCancelE, buttonAcceptE } = this.domElements;
        this.domElements.container = document.createElement('div');
        this.domElements.container.classList.add('add-tag-form');
        this.domElements.container.appendChild(input);
 //       this.domElements.container.appendChild(buttonCancelE);
        this.domElements.container.appendChild(buttonAcceptE);
        this.rootElement.appendChild(this.domElements.container);
    }
   render(){
        this.unMount();
        this.domElements.input = document.createElement('input');
        this.domElements.buttonAcceptE = generateButtons({ content: 'Add Tag', onClick: this.handleSave});
   //     this.domElements.buttonCancelE = generateButtons({ content: 'Cancel', onClick: this.handleCancel});
        this.generateContainer();
   } 
   unMount(){
       this.rootElement.innerHtml = "";
   }
}