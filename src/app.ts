import express, {Request} from "express";
import morgan from "morgan";
import contactRoutes from "./routes/contact.routes";
import { getInfo } from "./controllers/contact.controller";

const app = express();

app.use(express.json());

morgan.token('body', (req: Request) => JSON.stringify(req.body));

app.use(
    morgan(':method :url :status :res[content-length] - :response-time ms :body')
  );

app.use(morgan("tiny"));

app.use("/api", contactRoutes);
app.get("/info", getInfo);
export default app;