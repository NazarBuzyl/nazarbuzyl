import express from "express";
import mongoose from "mongoose";

import { postCreateValidation, registerValidator } from "./validation.js";
import validAuth from "./utils/validAuth.js";

import * as UserController from "./controllers/UserController.js";
import * as PostController from "./controllers/PostController.js";

mongoose
  .connect(
    "mongodb+srv://admin:legend5432@cluster0.3amxre6.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connect DB");
  })
  .catch(() => {
    console.log("Failed to connect");
  });

const app = express();
const port = 4444;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.post("/auth/login", UserController.login);
app.post("/auth/register", registerValidator, UserController.register);
app.get("/auth/me", validAuth, UserController.getMe);

app.get("/posts", PostController.getAll);
app.get("/posts/:id", PostController.getOne);
app.post("/posts", validAuth, postCreateValidation, PostController.create);
app.delete("/posts/:id", validAuth, PostController.remove);
app.patch("/posts/:id", validAuth, PostController.update);

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log(`Server:${port} OK`);
});
