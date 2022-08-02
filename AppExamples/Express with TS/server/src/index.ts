import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { router } from "./routes/login.routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieSession({ keys: ["abcd"] }));
app.use(router);

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
