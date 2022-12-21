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

export default UserData;