const {MongoClient , ServerApiVersion }= require('mongodb');
const uri ="mongodb+srv://samratpatel15x:BGdnDwu8mx8kF4si@cluster0.trjb5di.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client= new MongoClient(uri , { 
serverApi:{
    version: ServerApiVersion.v1,
    strict:true,
    deprecationErrors: true,
}
});


async function connectToDatabase(){
    try{
await client.connect();
await client.db("admin").command({ping:1});
console.log("ping your deployment. successfully connected to mongoDB");
 


} catch(error){
console.error("Failed to connect", error);
    }
}



//export the above 2 functions  , as part of db.js module
module.exports={ client , connectToDatabase};