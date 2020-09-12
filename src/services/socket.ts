import Message from "../interface/Message";

export const createWebSocket = (URL: string) : WebSocket => {
    const Socket = new WebSocket(URL, ["websocket"]);
    return Socket;
}

export const onMessage = (socket: WebSocket, callback: (msg: Message[]) => void) => {
    socket.onmessage = e => {
        if (e) {
            const { data } = e;
            try {
                const { activities } = JSON.parse(data);
                if (activities) {
                    const messages = activities.map((act: any) => ({ 
                        text: act.text,
                        id: act.id, 
                        isFromMe: act.from.id === "Rethink App" 
                    })) || [];
                    callback(messages);
                }    
            } catch (error) {
                console.log("ERROR ON MESSAGE WEBSOCKET", error);
            }
            
        }
        
    }
}