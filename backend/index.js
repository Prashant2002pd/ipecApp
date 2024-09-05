const express = require("express");
const app = express();
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const server = createServer(app);
const io = new Server(server);
const routes = require("./routers/routes");
const connect = require("./connection/db");
const cors = require("cors");

app.use(cors());
connect;
// Use the auth routes
app.use(express.json());
app.use("/api", routes);

io.on("connection", (socket) => {
  console.log("a user connected");

  // socket.emit("live",{"mssg":"HWKKI"})
  // socket.broadcast.emit("live",{"mssg":`${socket.id} joined the server.`})

  // message event
  socket.on("message",(data)=>{
    console.log(data)
    io.emit("receive-message",data)
  })
  // Group Messages
  socket.on("join-room",(room)=>{
    io.join(room)
  })

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
