import { HTTP_METHOD_TYPE } from "../enums/http-method-type.enum";

export const subscribers: Params[] = [];

export const GET = ( path: string ) => {
    return ( target: any, propertyKey: string ) => {
       addRoute(
            target.constructor.name,
            propertyKey, path,
            HTTP_METHOD_TYPE.GET
        );
    };
};

export const POST = ( path: string ) => {
    return ( target: any, propertyKey: string ) => {
       addRoute(
            target.constructor.name,
            propertyKey, path,
            HTTP_METHOD_TYPE.POST
        );
    };
};

export const PUT = ( path: string ) => {
    return ( target: any, propertyKey: string ) => {
       addRoute(
            target.constructor.name,
            propertyKey, path,
            HTTP_METHOD_TYPE.PUT
        );
    };
};

export const DELETE = ( path: string ) => {
    return ( target: any, propertyKey: string ) => {
       addRoute(
            target.constructor.name,
            propertyKey, path,
            HTTP_METHOD_TYPE.DELETE
        );
    };
};

const addRoute = (targetName: string, method: string, url: string, methodType: string) => {
    const params = {
        className: targetName,
        methodName: method,
        path: url,
        type: methodType
    } as Params;
    return subscribers.push(params);
};

export interface Params {
    className: string;
    methodName: string;
    path: string;
    type: string;
}
