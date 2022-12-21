//import consolaGlobalInstance from "consola";
const consola = require('consola')
const inquirer = require('inquirer');
//const UserData = require('./components/')
//const Message =require('./components/Message')

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

    interface User {
        name: string
        age: number;
    }



    class UserData {
       data: User[] = []
        
        public showAll = () =>{
            console.log(showColorized(MessageVariant.Info,'USERS DATA '))
            if(this.data.length === 0){
                console.log('No data ....')

            }else console.table(this.data)

        }

        public add =(User: User)=>{
            if(User.age > 0 && User.name.length > 0){
                this.data.push(User)
                consola.success('User has been successfully added!')
            }else consola.error('Wrong Data !')
        }

        remove = (name: string) => {


            if(this.data.map(item => item.name).indexOf(name)){

                const  removeIndex =this.data.map(item => item.name).indexOf(name)
                this.data.splice(removeIndex,1) 
                console.log('removed '+ name)
            }else console.log('not find !')

        }

        
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
    
const users = new UserData();
console.log("\n");
console.info("???? Welcome to the UsersApp!");
console.log("====================================");
showColorized(MessageVariant.Info, "Available actions");
console.log("\n");
console.log("list – show all users");
console.log("add – add new user to the list");
console.log("remove – remove user from the list");
console.log("quit – quit the app");
console.log("\n");

const startApp = () =>{



    
    inquirer.prompt([{
    name: 'action',
    type: 'input',
    message: 'how can i help you?',
    }]).then(async (answers:  { action: Action }) => {
    console.log('Chosen action:' + answers.action);
    switch (answers.action) {
        case Action.List:
            users.showAll()
            break;
        case Action.Add:
            const user =await inquirer.prompt([{
                name: 'name',
                type: 'input',
                message: 'Enter name'
            },{
                name: 'age',
                type: 'number',
                message: 'Enter age',
            }]);
            users.add(user);
            break
        case Action.Remove:
            const name= await inquirer.prompt([{
                name: 'name',
                type: 'input',
                message: 'Enter name',
            }]);
            users.remove(name.name);
            break;
        case Action.Quit:
            showColorized(MessageVariant.Info, "Bye bye!");
            return
            default: console.log('????')
    }
    startApp();
    });




} 
startApp()