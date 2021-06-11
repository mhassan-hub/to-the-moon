
// const express = require("express");
// const http = require("http");
// const cors =require('cors')
// const socketIo = require("socket.io");

// const port = process.env.PORT || 8080;


// const app = express();

// app.use(cors());

// const server = http.createServer(app);

// const io = socketIo(server); // < Interesting!

// app.get("/", (req, res) => {
//   res.send({ response: "Welcome to Multiplayer" }).status(200);
// });



// let interval;

// io.on("connection", (socket) => {
//   console.log("New client connected");
//   if (interval) {
//     clearInterval(interval);
//   }
//   interval = setInterval(() => getApiAndEmit(socket), 1000);
//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//     clearInterval(interval);
//   });
// });

// const getApiAndEmit = socket => {
//   const response = new Date();
//   // Emitting a new message. Will be consumed by the client
//   socket.emit("FromAPI", response);
// };

// server.listen(port, () => console.log(`Listening on port ${port}`));

const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: ["http://localhost:3002", "https://dev.example.com"],
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

io.on('connection', function(socket){
  console.log("New client has connected with id:",socket.id);
  socket.on('hello',function(data){ // Listen for new-player event on this client 
    console.log("New player has state:",data);
    socket.emit('create-player',data);
  })
})



httpServer.listen(8080);


