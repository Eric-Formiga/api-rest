import express  from "express";

const PORT = 3333

const app = express()

app.use(express.json())

app.get("/products/:id/:user", (request, reponse)=>{
const { id,user } = request.params 
reponse.send(`o Id é ${id} e o Usuário é ${user}`)

})

app.get("/products", (request, reponse)=>{
   ///products?page=1&limit=10
   const { page, limit } = request.query
   reponse.send(`a pagina é ${page} e o imite é ${limit}`)
   
})

app.post("/products", (request, reponse)=>{
   const { name,lastName } = request.body
   reponse.send(`Nome completo:${name} ${lastName} `)
   
   })
app.listen(PORT,()=>{
   console.log(`Server is running at ${PORT}`);
})