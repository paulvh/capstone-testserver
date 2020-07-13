const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", connection => {
    console.log("New client connected")

    connection.on("message", data => {
        console.log(data)
    })
    
    connection.on("close", () => {
        console.log("Client has disconnected")
    })
})