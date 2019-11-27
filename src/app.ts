import express from "express";
import workflowsRouter from "./routers/workflowRouter";
const app = express();
// TODO: Move midlewares setup to separate files under middlewares folder
express.json();

// Routers config
app.use("/api/workflows", workflowsRouter);

// Export express instance
export default app;