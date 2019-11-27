import { Response } from "express";
import { response } from "express";

// augment the `express-serve-static-core` module
declare module "express-serve-static-core" {
    // tslint:disable-next-line: interface-name
    export interface Response {
        /**
         * Represents a OK response with a 200 status code
         */
        ok(body?: any): this;
        /**
         * Represents a BAD_REQUEST response with a 400 status code
         */
        badRequest(body?: any): this;
        /**
         * Represents a UNAUTHORIZED response with a 401 status code
         */
        unauthorized(body?: any): this;
        /**
         * Represents a FORBIDEN response with a 403 status code
         */
        forbiden(body?: any): this;
        /**
         * Represents a NOT_FOUND response with a 404 status code
         */
        notFound(body?: any): this;
    }
}

const addStatustoResponse
    = (res: Response, statusCode: number, body: any = {}): Response => res.status(statusCode).send(body);

response.ok = function(body?: any) {
    return addStatustoResponse(this, 200, body);
};
response.badRequest = function(body?: any) {
    return addStatustoResponse(this, 400, body);
};
response.unauthorized = function(body?: any) {
    return addStatustoResponse(this, 401, body);
};
response.forbiden = function(body?: any) {
    return addStatustoResponse(this, 403, body);
};
response.notFound = function(body?: any) {
    return addStatustoResponse(this, 404, body);
};

/**
 * Exposes common functionalities and properties for Controllers
 */
export abstract class BaseController {

}
