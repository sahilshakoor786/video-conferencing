const server = require("express");
const app = server();
app.use(server.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/lobby.html");
});
app.listen(3000);
