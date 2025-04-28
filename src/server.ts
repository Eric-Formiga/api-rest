import express  from "express";

const PORT = 3333

const app = express()

app.get("/", (request, reponse)=>{
reponse.send("Hello World")
})

app.listen(PORT,()=>{
   console.log(`Server is running at ${PORT}`);
})