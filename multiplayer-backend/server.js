const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: ["http://localhost:3002", "http://localhost:3003"],
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
    forceNew: true,
  },
});

const players = {};

let ready = [];

let shipReady = [];

io.on("connection", function (socket) {
  console.log("New client has connected with id:", socket.id);
  const gameID = socket.id;
  players[socket.id] = {
    socketID: socket.id,
  };
  console.log(players, players.length);
  socket.emit("gameID", gameID);
  socket.on("newplayer", function (data) {});
  socket.on("hello", function (data) {
    // Listen for new-player event on this client
    console.log("New player has state:", data);
    socket.broadcast.emit("hello", data);
  });

  socket.on("disconnect", function (data) {
    console.log("socket  disconnected", socket.id);
  });

  socket.on("ready", function (data) {
    ready.push(socket.id);
    socket.broadcast.emit("ready", "player is ready");
    console.log("ready back end");
    if (ready.length === 2) {
      if (ready[0] === ready[1]) {
        ready.pop();
      } else {
        ready = []
        io.emit("start game", "game is ready to start")
        
      }
    }
  });
  socket.on("initiallaunch", function (data) {
    console.log("here is the data", data);
    socket.broadcast.emit("launch", data);
    socket.emit("launch", data);
    // socket.broadcast.to(players[socket.id]).emit( 'send msg', {data : data} )
  });
  socket.on("playerchoice", function (data) {
    socket.broadcast.emit("playerchoicepicked", data);
    // socket.broadcast.to(players[socket.id]).emit( 'send msg', {data : data} )
  });

  socket.on("shipchoice", function (data) {
    shipReady.push(socket.id);
    socket.broadcast.emit("shipchoicepicked", data);

    if (shipReady.length === 2) {
      if (shipReady[0] === shipReady[1]) {
        shipReady.pop();
      } else {
        shipReady = [];
        io.emit("readyButton", "Game is ready to being");
      }
    }
    // socket.broadcast.to(players[socket.id]).emit( 'send msg', {data : data} )
  });

  socket.on("gamelaunch", function (data) {
    socket.broadcast.emit("startrealgame", data);
    // socket.broadcast.to(players[socket.id]).emit( 'send msg', {data : data} )
  });

  socket.on("enemyFire", function (data) {
    socket.broadcast.emit("enemyShoot", data);
    // socket.broadcast.to(players[socket.id]).emit( 'send msg', {data : data} )
  });

  socket.on("score", function (data) {
    socket.broadcast.emit("redirectScore", data);
    // socket.broadcast.to(players[socket.id]).emit( 'send msg', {data : data} )
  });

  socket.on("pause", function (data) {
    console.log(data);
    socket.broadcast.emit("pauseScreen", "pause player 2");
  });

  socket.on("resume", function (data) {
    console.log(data);
    socket.broadcast.emit("resumeGame", "resume player 2");
  });

  socket.on("redirect", function (data) {
    console.log(data);
    socket.broadcast.emit("redirect", data);
    // socket.broadcast.to(players[socket.id]).emit( 'send msg', {data : data} )
  });
  socket.on("playerMovement", function (data) {
    socket.broadcast.emit("enemyMovement", data);
  });
});

httpServer.listen(8080);
