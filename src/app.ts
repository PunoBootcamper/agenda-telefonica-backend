import express from "express";
import morgan from "morgan";
import contactRoutes from "./routes/contact.routes";
import { getInfo } from "./controllers/contact.controller";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", contactRoutes);
app.get("/info", getInfo);
export default app;