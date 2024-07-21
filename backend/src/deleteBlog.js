const express = require('express');
const router = express.Router();
const { client} = require('./db');
const { ObjectId } = require('mongodb');

router.delete('/:id', async(req,res)=>{
  
    const id= req.params.id;
  
   
try{
    




    
    const database=client.db('blogwebsite')
    const collection = database.collection('blogs')
    
    
   
    
     
   
const dbResponse= await  collection.deleteOne( { _id : new ObjectId(id)});
console.log(dbResponse)
res.send(dbResponse)

}catch(error){
    res.status(500).json({ error: 'Failed to delete blog' });
}


})

module.exports=router;