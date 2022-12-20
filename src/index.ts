//import consolaGlobalInstance from "consola";
const consola = require('consola')
const inquirer = require('inquirer');

    enum Action {
    List = "list",
    Add = "add",
    Remove = "remove",
    Quit = "quit"
    }

    enum MessageVariant {
        Success = 'success',
        Error = 'error',
        Info ='info'
    }


    class Message {
        public constructor(public content: string,){
            this.content = content
        }

        public show(){
            console.log(this.content)
        }

        public toUpperCase(){
        const up = this.content.toUpperCase()
        console.log(up)
        }

        public toLowerCase(){
            const down =this.content.toLowerCase()
            console.log(down)
        }
        public capitalize(){
            const first = this.content.charAt(0).toUpperCase() + this.content.slice(1)
            console.log(first)
        }
        public showColorized(option: MessageVariant, text: string){
            consola[option](text)
        }
    }

    function showColorized(option: MessageVariant, text: string){
        consola[option](text)
    }
            const msg = new Message("heLlo world!");
        msg.show(); // "heLlo world!"
        msg.capitalize();
        msg.show(); // "Hello world!"
        msg.toLowerCase();
        msg.show(); // "hello world!"
        msg.toUpperCase();
        msg.show(); // "HELLO WORLD!"

        
        Message.showColorized(MessageVariant.Success, "Test"); // √ "Test"
        
        Message.showColorized(MessageVariant.Error, "Test 2"); // "x Test 2"
        
        Message.showColorized(MessageVariant.Info, "Test 3"); // ℹ "Test 3"




const startApp = () =>{



    
    inquirer.prompt([{
    name: 'action',
    type: 'input',
    message: 'how can i help you?',
    }]).then(async (answers:  { action: Action }) => {
    console.log('Chosen action:' + answers.action);
    startApp();
    if (answers.action === 'quit')
    return;
    });




} 
startApp()