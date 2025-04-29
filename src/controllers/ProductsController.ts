import { Request, Response } from "express"
import { AppError } from "../utils/AppError"
import { z } from "zod"

class ProductsController {
    /*
    * index - GET para listar varios registros
    * show - GET ara listar u, unico registro
    * create - POST para criar um registro
    * update -  PUT para atualizar um registro
    * remove - DELETE para deletar um registro
     */

    index(request: Request, response: Response) {
        const { page, limit } = request.query
        response.send(`a pagina é ${page} e o imite é ${limit}`)
    }

    create(request: Request, response: Response) {
       
        const bodySchema = z.object({
            name: z.string(),
            lastName: z.string()
        })

        const {name, lastName} = bodySchema.parse(request.body)
        // if (!name) {
        //     throw new AppError("O Name é obrigátorio!", 400)
        // }

        // if (!lastName) {
        //     throw new AppError("O LastName é obrigátorio!", 400)
        // }

        response.status(201).json({ name, lastName, user_id: request.user_id })
    }


}


export { ProductsController }