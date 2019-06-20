class WebSocketService{

    static instance = null;
    callbacks ={};
    static getInstance()
    {
        if(!WebSocketService.instance)
        {
            WebSocketService.instance = new WebSocketService();
        }
        return WebSocketService.instance;
    }

    constructor(){
        this.socketRef = null;
    }
    connect (ticketId){
        const path = `ws://127.0.0.1:8000/ws/chat/${ticketId}/`;
        this.socketRef = new WebSocket(path);
        this.socketRef.onmessage= e =>{
            this.socketNewMessage(e.data);
        };
        this.socketRef.onerror= e =>{
            console.log(e.message);
        };
        this.socketRef.onclose = ()=>{
            console.log('websocket is closed');
            this.connect();
        }

    }
    socketNewMessage(data){
        const parsedData = JSON.parse(data);
        const command = parsedData.command;
        debugger
        if(Object.keys(this.callbacks).length===0){
            return ;
        }
        if (command==='new_message'){
             this.callbacks[command](parsedData.message);
        }
    }
    newChatMessage(message){
        this.sendMessage({command:'new_message', data:message});
    }
    close(){

    }
    addCallbacks(newMessageCallback){
        this.callbacks['new_message'] = newMessageCallback;
    }
    sendMessage(data){
        try{
            this.socketRef.send(JSON.stringify({...data}))

            debugger
        }catch(err) {
            debugger
            console.log(err.message);
        }
    }
    state(){
        return this.socketRef.readyState;
    }

    waitForSocketConnection(callback){
        const socket = this.socketRef;
        const recursion = this.waitForSocketConnection();
        setTimeout(
            function(){
                if(socket.readyState ===1 ){
                    console.log('connection is secure');
                    if(callback!=null)
                    {
                        callback();
                    }
                    return;
                }else {
                    console.log('waiting for connection...');
                    recursion(callback);
                }
            },1);
    }
}
const WebSocketInstance = WebSocketService.getInstance();

export default WebSocketInstance;