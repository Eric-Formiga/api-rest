import express, { response }  from "express";
import { myMiddleware } from "./middlewares/my-middleware";

const PORT = 3333

const app = express()

app.use(express.json())

// se aplica para todas as rotas abaixo
// //app.use(myMiddleware)

app.get("/products/:id/:user", (request, reponse)=>{
const { id,user } = request.params 
reponse.send(`o Id é ${id} e o Usuário é ${user}`)

})

//middleware local/ em uma rota especifica
app.get("/products", (request, reponse)=>{
   ///products?page=1&limit=10
   const { page, limit } = request.query
   reponse.send(`a pagina é ${page} e o imite é ${limit}`)
   
})

app.post("/products", myMiddleware, (request, reponse)=>{
   const { name,lastName } = request.body
 //  reponse.send(`Nome completo:${name} ${lastName} `)
   response.status(200).json({name, lastName})
   })
app.listen(PORT,()=>{
   console.log(`Server is running at ${PORT}`);
})