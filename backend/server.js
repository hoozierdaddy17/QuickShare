import express from "express";
import cors from "cors";
import DBConnection from "./database/db.js";
import fileRouter from "./routes/fileRoutes.js";

const app = express();
DBConnection();

app.get("/", (req, res) => {
  res.send("Hello Everyone!");
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", fileRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
