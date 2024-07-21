export async function deleteBlog(id,setTriggerChange){
const url =`http://localhost:6969/deleteBlog/${id}`;
    try{
const response = await  fetch(url, {  method: 'DELETE', // Specify the DELETE method
    headers: {
        'Content-Type': 'application/json',
    },});
alert(response)
setTriggerChange(x=>x+1)
    }catch(error){
console.log("unable to delete the blog"  , error) ;
    }
}