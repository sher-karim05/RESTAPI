import express from 'express'
import bodyParser  from 'body-parser'

const app = express();
//port 
const PORT = 5000;
app.use(bodyParser.json());

//get request
app.get('/',(req,res)=>{
    res.send("Hello from Home page!")
})
app.listen(PORT, ()=> console.log(`Server is running on port: http://localhost: ${PORT}`))