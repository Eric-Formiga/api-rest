import { Router } from "express";

import { myMiddleware } from "../middlewares/my-middleware";

import { ProductsController } from "../controllers/ProductsController";

const productsRoutes = Router()
const productsController = new ProductsController()

// se aplica para todas as rotas abaixo
// //app.use(myMiddleware)

// productsRoutes.get("/:id/:user", (request, response) => {
//     const { id, user } = request.params
//     response.send(`o Id é ${id} e o Usuário é ${user}`)

// })

//middleware local/ em uma rota especifica
productsRoutes.get("/",productsController.index
    // (request, response) => {
    //     ///products?page=1&limit=10
    //     // const { page, limit } = request.query
    //     // response.send(`a pagina é ${page} e o imite é ${limit}`)

    // }
)

productsRoutes.post("/", myMiddleware,productsController.index
    // (request, response) => {
    //     // const { name, lastName } = request.body
    //     // //  reponse.send(`Nome completo:${name} ${lastName} `)
    //     // response.status(201).json({ name, lastName, user_id: request.user_id })
    // }
)

export { productsRoutes }