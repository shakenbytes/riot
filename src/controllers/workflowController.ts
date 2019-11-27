import { Request, Response } from "express";
import { BaseController } from "./baseController";

// TODO: Move the Workflow entity to a class then: import Workflow from '../models/workflow';
// TODO: use something like diskbd to use this JSON as a local database
const workflows = [{
    hooks: {
        error_hook_url: "https://superorders.com/hooks/notifyError",
        warning_hook_url: "https://superorders.com/hooks/notifyWarning"
    },
    id: "process_order",
    name: "Process Order Wokflow",
    actions: [
        {
            name: "Create New Order",
            transition: "from_nothing_to_new"
        },
        {
            name: "Place Order",
            transition: "from_new_to_placed"
        }
    ],
    states: [
        "new",
        "placed",
        "paid",
        "shipped",
        "delivered"
    ],
    transitions: [
        {
            from: "none",
            to: "new", name: "from_nothing_to_new"
        },
        {
            from: "new",
            to: "placed",
            name: "from_new_to_placed",
            rules: [
                {
                    type: "duration",
                    name: "process_order_rule",
                    metadata: [{ key: "duration", value: "24h" }]
                }
            ]
        }
    ]
}];

class WorkflowController extends BaseController {

    public static getAll = async (req: Request, res: Response) => {
        res.ok(workflows);
    }

    public static getById = async (req: Request, res: Response) => {
        res.ok(workflows.find((t) => t.id === req.params.workflow_id));
    }

    public static createRule = async (req: Request, res: Response) => {
        const workflowToUpdate = workflows.find((t) => t.id === req.params.wokflow_id);
        res.ok(workflowToUpdate);
    }

    public static createState = async (req: Request, res: Response) => {
        const workflowToUpdate = workflows.find((t) => t.id === req.params.wokflow_id);
        workflowToUpdate.states.push(req.body.state);
        res.ok(workflowToUpdate);
    }

    public static createTransition = async (req: Request, res: Response) => {
        const workflowToUpdate = workflows.find((t) => t.id === req.params.wokflow_id);
        workflowToUpdate.transitions.push(req.body.state);
        res.ok(workflowToUpdate);
    }

}
export default WorkflowController;
