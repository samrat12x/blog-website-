import { useState , useEffect } from 'react'
import CreateBlog from './CreateBlogs';
import { updateBlog } from './UpdateBlog';
import { deleteBlog } from './DeleteBlog';
import './App.css'

function App() {
  
  const [blogList, setblogList] = useState([])
  const [displayCreateBlog, setDisplayCreateBlog]=useState(false)

  const[ isUpdate , setIsUpdate]=useState(false);
  const [selectedBlog , setSelectedBlog] = useState({});
  const [blogs,setBlogs]=useState();  
  const[triggerChange , setTriggerChange]=useState(1);

function invokeSetTriggerChange(){
  setTriggerChange(triggerChange+1)
}




useEffect(()=>{
const fetchBlog = async ()=>{
  try{
const response =await fetch("http://localhost:6969/getBlogData/") ; 

const data = await response.json();
const time = new Date()
console.log("Here is the DB response: ", data , "at time",time);
setblogList(data)
}catch(error){
    console.log("failed to fetch blog data from the db due to error code", error);
  }
}

fetchBlog();

} , [triggerChange]);





useEffect(()=>{
 const arrayOfBlogs= blogList.map(element=>(
<div className="singleBlog" key={element._id}>
<div className="blogtitle">{element.title}</div> 
<div >Date {element.date}</div>
   <div className='blogcontent'>{element.content}</div>
   <div className="buttons">
   <button onClick={()=>updateBlog(element ,setSelectedBlog,setIsUpdate ,setDisplayCreateBlog,setTriggerChange)}  className='uptBtn'>Update blog</button>
   <button onClick={()=>deleteBlog(element._id, setTriggerChange)} className='dltBtn'>Delete blog</button>

   </div>
  
   </div>
 )
  )

  setBlogs(arrayOfBlogs )

},[blogList])






function createBlog(){
 
setDisplayCreateBlog(true)

}

  return (
    <>
<button onClick={createBlog}>Create blog</button>
<div className='blogsList'>{blogs}</div>



<CreateBlog  Display={displayCreateBlog}
changeDisplay={setDisplayCreateBlog}
Trigger={invokeSetTriggerChange}
update={isUpdate}
selectedBlog={selectedBlog}
setIsUpdate={setIsUpdate}
/>
    </>
  )
}

export default App
