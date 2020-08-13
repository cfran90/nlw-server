import express from "express";
import routes from "./routes";

const bodyParser = require("body-parser");

import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(routes);

app.listen(3333);