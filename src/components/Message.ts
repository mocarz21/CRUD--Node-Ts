class Message {
    public constructor(public content: string,){
        this.content = content
        this.showColorized();
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



export default Message;