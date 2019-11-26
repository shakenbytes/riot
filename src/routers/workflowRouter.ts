import { Router, Request, Response } from "express";
import WorkflowController from "../controllers/workflowController";

var router = Router();
// GET api/workflows/
// Get all the registered workflows
router.get("/", WorkflowController.getAll);
// GET api/workflows/{wokflow_id}
// Worker getting workflow configuration
// and then checking transactions that have that configuration
router.get("/:workflow_id", WorkflowController.getById);

/*
So we can start checking those transactions
against the rules and notify if any rule is violated
**/

// Configure Transition Rule
router.post("/:workflow_id/transitions/:transition_id/rules", WorkflowController.createRule);

router.post("/:workflow_id/states", WorkflowController.createState);

router.post("/:workflow_id/transitions", WorkflowController.createTransition);

//export this router to use in our app.ts
export default router;
 