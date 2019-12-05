import { Controller, Get, Route } from "tsoa";
@Route("Users")
export class UserController extends Controller {
    @Get()
    public async getUser() {
        return { name: "hello world" };
    }
}
