import express from "express";
import morgan from "morgan";
import contactRoutes from "./routes/contact.routes";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", contactRoutes);

export default app;