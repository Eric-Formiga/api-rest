
import { Response, Request, NextFunction } from "express";

export function myMiddleware( request:Request, reponse: Response, next:NextFunction){

request.user_id = "1445"

console.log("passou por aqui")
    return next()
}