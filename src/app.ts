import express, { Router } from "express";
import { UserController } from "./controllers/users/user.controller";
import { MainRouter } from "./routers/mainRouter";
import workflowsRouter from "./routers/workflowRouter";

const app = express();
const router = Router();
const mainRouter = new MainRouter(router);

mainRouter.addControllers(
    {
        UserController: new UserController()
    }
);

// TODO: Move midlewares setup to separate files under middlewares folder
express.json();
// Routers config
app.use("/api/workflows", workflowsRouter);
app.use("/api/", mainRouter.loadRoutes());

// Export express instance
export default app;
