
import { Response, Request, NextFunction } from "express";

export function myMiddleware( request:Request, reponse: Response, next:NextFunction){

console.log("passou por aqui")
    return next()
}