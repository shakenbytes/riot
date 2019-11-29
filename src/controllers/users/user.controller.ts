import { Request, Response } from "express";
import { GET } from "../../utils/http.decorator";

export class UserController {
    @GET("/users")
    public findAllUsers = async (req: Request, res: Response) => {
        res.send({name: "hello users"});
    }
}
