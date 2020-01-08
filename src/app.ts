import express from "express";
import * as swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./routers/routes";
import workflowsRouter from "./routers/workflowRouter";

const app = express();
// TODO: Move midlewares setup to separate files under middlewares folder
express.json();

RegisterRoutes(app);

// try {
//     // tslint:disable-next-line: no-var-requires
//     const swaggerDocument = require("../dist/swagger.json");
//     app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// } catch (err) {
//     // tslint:disable-next-line: no-console
//     console.log("Unable to load swagger.json", err);
// }

app.use("/api/workflows", workflowsRouter);

// Export express instance
export default app;
