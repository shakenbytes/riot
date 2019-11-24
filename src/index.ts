import express from "express";
const app = express();
express.json();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});

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

// GET api/workflows/{wokflow_id}
// Worker getting workflow configuration
// and then checking transactions that have that configuration
app.get("/api/workflows/:workflow_id", (req, res) => {
    res.send(workflows.find((t) => t.id === req.params.workflow_id));
});

/*
So we can start checking those transactions
against the rules and notify if any rule is violated
**/

// Configure Transition Rule
app.post("/api/workflows/:workflow_id/transitions/:transition_id/rules", (req, res) => {
    // {
    //     "workflow" : "process_order",
    //         "action" : "create_new_order",
    //             "metadata" : [
    //                 { "key": "order_id", "value": 1 }
    //             ]
    // }
    const reqBody = req.body;
    const workflowToUpdate = workflows.find((t) => t.id === req.params.wokflow_id);

    switch (reqBody.action) {
        case "create_new_order":

            break;

        default:
            break;
    }

    res.send(workflowToUpdate);
});

app.post("/api/workflows/:workflow_id/states", (req, res) => {
    const workflowToUpdate = workflows.find((t) => t.id === req.params.wokflow_id);
    workflowToUpdate.states.push(req.body.state);

    res.send({});
});

app.post("/api/workflows/:workflow_id/transitions", (req, res) => {
    const workflowToUpdate = workflows.find((t) => t.id === req.params.wokflow_id);
    workflowToUpdate.transitions.push(req.body.state);

    res.send({});
});

// start the Express server
app.listen(port, () => {

    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
