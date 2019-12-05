import express from "express";
import workflowsRouter from "./routers/workflowRouter";
import { RegisterRoutes } from "./routers/routes";
import * as swaggerUi from 'swagger-ui-express';

const app = express();
// TODO: Move midlewares setup to separate files under middlewares folder
express.json();

RegisterRoutes(app);

try {
    const swaggerDocument = require('../dist/swagger.json');
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (err) {
    console.log('Unable to load swagger.json', err);
}

app.use("/api/workflows", workflowsRouter);

// Export express instance
export default app;