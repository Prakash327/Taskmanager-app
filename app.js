const express = require('express');
const app = express();
const tasks = require('./routes/task')
const connectDB=require('./db/connect')
require('dotenv').config()

//middleware to access html/static file
app.use(express.static('./public'))
//middleware
app.use(express.json())

//routes
// app.get('/hello',(req,res)=>{
//     res.status(200).send("hello world");
// })


app.use('/api/v1/tasks',tasks)



const port = 3000;

// invoke connection 
const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,
         console.log(`The server is listening at ${port}....`))
        
        

    } catch (error) {
        console.log(error)
        
    }
}
 
start()