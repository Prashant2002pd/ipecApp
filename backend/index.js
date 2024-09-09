const express = require("express");

const { app, server } = require("./socket/socket");

const routes = require("./routers/routes");
const connect = require("./connection/db");
const cors = require("cors");

app.use(cors());
connect;
// Use the auth routes
app.use(express.json());
app.use("/api", routes);



const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
