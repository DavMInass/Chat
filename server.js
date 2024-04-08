const express = require("express");
const path = require("path")
const http = require("http")
const socket  = require("socket.io")

const app = express();
app.use(express.static(path.join(__dirname,
    "public")));
const server = http.createServer(app)
const io = socket(server)

io.on("connection", (socket) =>{
    console.log("User is connected");
    socket.emit('message', 'welcome');
    socket.broadcast.emit('message', 'user has joined')
    socket.on('chatmsg', (m)=>{
        io.emit('message', m)
    })
    socket.on("disconnect",()=>{
        io.emit('message', "a user has left!")
    });

})

app.get('/', (req, res) => {
    res.send("Hello World");
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Example is running on port ${PORT}`);
});
