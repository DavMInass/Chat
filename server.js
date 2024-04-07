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
})

app.get('/', (req, res) => {
    res.send("Hello World");
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Example is running on port ${PORT}`);
});
