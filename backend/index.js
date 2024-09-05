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
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
