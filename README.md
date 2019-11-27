[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Shaken-Bytes/riot-dashboard)

[![Known Vulnerabilities](https://snyk.io/test/github/shakenbytes/riot/badge.svg?targetFile=package.json)](https://snyk.io/test/github/shakenbytes/riot?targetFile=package.json)

[![Actions Status](https://github.com/shakenbytes/riot/workflows/ci-workflow/badge.svg)](https://github.com/riot/workflows/actions)


# riot
Application Workflow Monitoring

The purpose of this project is to monitor business workflows and send notifications when something unexpected happens.

We want to able to track a business workflow from its initial state to the desired ending state. To do that, we have defined actions that change the status of the workflow using transitions.

Notifications will be triggered based on transition rules.

## Workflow

A workflow is a set of actions.

## Action

Actions execute transitions.

## Transition

Transitions move a workflow from one state to another. Transitions defined the rules that will be used to monitor the events.

## State

Workflows have a current state, which is determined by the last transition executed by an action.

### Examples - Process Order Workflow


### Example - Tracking Events

Having the workflow `process_order` if we wanted to track an event when calling the action `create_new_order`.
