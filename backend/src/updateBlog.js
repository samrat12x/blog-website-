const express = require('express');
const router = express.Router();
const { client} = require('./db');
const { ObjectId } = require('mongodb');

// Middleware to parse JSON bodies
router.use(express.json());


router.post('/', async(req,res)=>{
console.log("hello got the update req")
    try{
   
    const database=client.db('blogwebsite')
    const collection = database.collection('blogs')

    const blog=req.body;
//insert the new data element into the db collection
console.log(blog)
const filter= {
    _id: new ObjectId(blog._id),

}
console.log(filter)

const replaced={ 
    title: blog.title ,
    content : blog.content
}
const response=await collection.replaceOne(filter,replaced)
console.log(response);

res.send("blog updated in  db" )

}catch(error){
    res.status(500).json({ error: 'Failed to insert data' });
}


})

module.exports=router;