import { useState , useEffect} from "react"

export default function CreateBlog(props){
const[formData, setFormdata]=useState( {
title: "",
content:"",
date: new Date()
}
)

useEffect(()=>{
    if(props.update && props.selectedBlog && Object.keys(props.selectedBlog).length>0){
        setFormdata(props.selectedBlog)
    }
},[props.selectedBlog, props.update])



function handleChange(event){
   
const{name,value}=event.target;
setFormdata({...formData,

    [name] : value }
)
}

async function handleSubmit(event){
  
    event.preventDefault();
try{

    if(props.update){


        const response =await fetch("http://localhost:6969/updateBlog/", {

            method:'POST',
        headers :{
            "Content-Type" : "application/json"
        },
        body :JSON.stringify(formData)
        
        
        }) ; 
        







props.setIsUpdate(false)


    }else{
const response =await fetch("http://localhost:6969/createBlog/", {

    method:'POST',
headers :{
    "Content-Type" : "application/json"
},
body :JSON.stringify(formData)


}) ; 
    }
props.Trigger();

setFormdata(
    {
        title: "",
        content:"",
       
        }
)
props.changeDisplay(false)


}catch(error){
    console.log("server failed to create blog" , error);
}

}





return (
    <div className={`${props.Display ? "":"hideblogCreate " }`}> 
 <form onSubmit={handleSubmit}>
<div>
<label htmlFor="title">
title :
</label>
<input type="text" 

id="title"
name="title"
value={formData.title}
onChange={handleChange}
required
/>


</div>



<div>
    <label htmlFor="content"> content:</label>
    <textarea name="content" id="content"
    value={formData.content}
    onChange={handleChange}
    ></textarea>
</div>


<input type="submit"></input>


 </form>
    
    
    
    </div>
)
}

