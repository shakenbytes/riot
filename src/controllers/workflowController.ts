import { Request, Response } from "express";
//TODO: Move the Workflow entity to a class then: import Workflow from '../models/workflow';
//TODO: use something like diskbd to use this JSON as a local database
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
const Ok = (response: Response, body: any) => response.status(200).send(body);

class WorkflowController {

    static getAll = async (req: Request, res: Response) => {
        Ok(res, workflows);
    };

    static getById = async (req: Request, res: Response) => {
        Ok(res, workflows.find((t) => t.id === req.params.workflow_id));
    };

    static createRule = async (req: Request, res: Response) => {
        const workflowToUpdate = workflows.find((t) => t.id === req.params.wokflow_id);
        Ok(res, workflowToUpdate);
    };

    static createState = async (req: Request, res: Response) => {
        const workflowToUpdate = workflows.find((t) => t.id === req.params.wokflow_id);
        workflowToUpdate.states.push(req.body.state);
        Ok(res, workflowToUpdate);
    };

    static createTransition = async (req: Request, res: Response) => {
        const workflowToUpdate = workflows.find((t) => t.id === req.params.wokflow_id);
        workflowToUpdate.transitions.push(req.body.state);
        Ok(res, workflowToUpdate);
    };

};
export default WorkflowController;