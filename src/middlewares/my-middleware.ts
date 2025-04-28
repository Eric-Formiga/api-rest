
import { Response, Request, NextFunction } from "express";

export function myMiddleware(reponse: Response, request:Request, next:NextFunction){

console.log("passou por aqui")
    return next()
}