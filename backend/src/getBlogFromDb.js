const express = require('express');
const router = express.Router();
const { client} = require('./db');


router.get('/', async(req,res)=>{
try{
    const database=client.db('blogwebsite')
    const collection = database.collection('blogs')
const dbResponse= await collection.find({}).toArray();

res.send(dbResponse)

}catch(error){
    res.status(500).json({ error: 'Failed to fetch data' });
}


})

module.exports=router;