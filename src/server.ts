import express  from "express";

const PORT = 3333

const app = express()

app.get("/products/:id/:user", (request, reponse)=>{
const { id,user } = request.params 
reponse.send(`o Id é ${id} e o Usuário é ${user}`)
})

app.listen(PORT,()=>{
   console.log(`Server is running at ${PORT}`);
})