const express = require('express');
const router = express.Router();
const { client} = require('./db');

// Middleware to parse JSON bodies
router.use(express.json());


router.post('/', async(req,res)=>{
try{
    const database=client.db('blogwebsite')
    const collection = database.collection('blogs')

    const blog=req.body;
//insert the new data element into the db collection
await collection.insertOne(blog)


res.send("blog inserted in db")

}catch(error){
    res.status(500).json({ error: 'Failed to insert data' });
}


})

module.exports=router;