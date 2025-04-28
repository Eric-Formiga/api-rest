import { Request, Response } from "express"

class ProductsController {
/*
* index - GET para listar varios registros
* show - GET ara listar u, unico registro
* create - POST para criar um registro
* update -  PUT para atualizar um registro
* remove - DELETE para deletar um registro
 */

index(request: Request, response: Response){
    const { page, limit } = request.query
    response.send(`a pagina é ${page} e o imite é ${limit}`)
}

create(request: Request, response: Response){
    const { name, lastName } = request.body
    response.status(201).json({ name, lastName, user_id: request.user_id })
}


}


export {ProductsController}