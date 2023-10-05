//import json-server
const jsonserver=require('json-server')

//create server
const server=jsonserver.create()

//parsing json data to js - middleware
const middleware=jsonserver.defaults()

//create router
const router=jsonserver.router("db.json")

//port
const PORT=process.env.PORT || 4000

//using middleware,router
server.use(middleware)
server.use(router)

//listen
server.listen(PORT,()=>{
    console.log(`JSON SERVER STARTED @ PORT NUMBER : ${PORT}`);
})