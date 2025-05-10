const express = require("express");
const app = express();
const path = require("node:path");
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (res) => {
  res.render("index");
});
app.post("/new", (req, res) => {
  const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
    },
  ];
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  messages.push({ text: messageText, user: messageUser, added: new Date() });

  res.render("liste", { title: "Mini Messageboard", messages: messages });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
