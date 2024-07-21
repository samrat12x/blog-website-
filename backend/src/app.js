const { log } = require('console')
const express = require('express')
const cors = require('cors')
const { client, connectToDatabase } = require('./db')

// Import the routes
const blogRoutes = require('./getBlogFromDb');
const createBlog = require('./createBlog')
const deleteBlog=require('./deleteBlog')
const updateBlog=require('./updateBlog')


const { json } = require('body-parser')
const { title } = require('process');


const app = express()
app.use(cors())

const port=6969

// connect to mongo
connectToDatabase();
//middle to parse json bodies
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello sexc")
})


const Blog = 
    
    {
        title: "Second Blog",
        content: "This is the second blog post. We talk about interesting things here.",
        date: new Date('2023-06-15')
    }
   
  
;

app.get("/data" , async(req ,res)=>{
    try{
const database=client.db('blogwebsite')

const collection = database.collection('blogs')

//insert the new data element into the db collection
await collection.insertOne(Blog)

res.send('Blog successfully added');
}catch(error){
 

    res.status(500).send("error occured " , error);
}



})


//use the routes

app.use('/getBlogData',blogRoutes);
app.use('/deleteBlog',deleteBlog);
app.use('/createBlog',createBlog);
app.use('/updateBlog', updateBlog)
app.listen(port,()=>{
    console/log("app running on",port)
})