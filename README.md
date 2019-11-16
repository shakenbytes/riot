# riot
Application Workflow Monitoring

Workflow
- Actions
- States
- Transitions


Process Order Workflow
New -> Placed -> Paid -> Shipped -> Delivered


Create Order Action
- New

Place Order Action
- First Transitition
- New -> Placed


New -> Placed
- 1 day
- Allowed
- NotAllowed

Get Workflow
[GET] /api/workflows/1
```
{
  "hooks" : {
    "error_hook_url" : "https://superorders.com/hooks/notifyError",
    "warning_hook_url" : "https://superorders.com/hooks/notifyWarning"
  },
  "id" : "process_order",
  "name" : "Process Order Wokflow",
  "actions": [
    {
      "name": "Create New Order",
      "transition" : "from_nothing_to_new"
    },
    {
      "name" : "Place Order",
      "transition" : "from_new_to_placed"
     }
  ],
  "states" : [
    "new",
    "placed",
    "paid",
    "shipped",
    "delivered"
  ],
  transitions: [
    {
      "from" : null,
      "to": "new", "name" : "from_nothing_to_new"
    },
    {
      "from" : "new",
      "to" : "placed",
      "name" : "from_new_to_placed",
      "rules" : [
        {
          "type: "duration"
          "name": "process_order_rule",
          "metadata": [{"key": "duration", "value": "24h"}]
        }
      ]
    }
  ]
}
```
[GET]

Call Action
[HEADERS]

Configure Transition Rule
[POST] /api/workflows/{workflow_id}/transitions/{transition_id}/rules
```
{
  "name": "process_order_duration",
  "metadata": [{"key": "duration", "value": "24h"}]
}
```

Send Action
[POST] /api/tracker/sendAction/

```
{
  "workflow" : "process_order",
  "action" : "create_new_order",
  "metadata" : [
    { "key" : "order_id", "value" : 1 }
  ]
}
```
Send Action
[POST] /api/tracker/sendAction/

```
{
  "workflow" : "process_order",
  "action" : "place_order",
  "metadata" : [
    { "key" : "order_id", "value" : 1 }
  ]
}
```