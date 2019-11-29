import { Router } from "express";
import { UserController } from "../controllers/users/user.controller";
import { subscribers } from "../utils/http.decorator";

export class MainRouter {
    private router: Router;
    private controllers: any;

    constructor(appRouter: any) {
        this.router = appRouter;
    }

    public addControllers(controllers: object) {
        this.controllers = {...controllers};
    }

    public loadRoutes() {
        subscribers.forEach((val) => {
            this.setRoutes(val);
        });
        return this.router;
    }

    private setRoutes(subscribe: any) {
        switch (subscribe.type) {
            case "GET":
                this.router.get(
                    subscribe.path,
                    this.controllers[subscribe.className][subscribe.methodName]
                );
                break;
        }
        return;
    }
}
