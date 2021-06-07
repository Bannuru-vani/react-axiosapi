import React,{useState,useEffect} from 'react';
import axios from 'axios'
function Datafetch(){
  const[post,setPost] = useState({});
  const [id, setId] = useState(1);
  const [ fetch,setidFetch] = useState(1);
  const handleClick =()=>{
    setidFetch(id)
  }
  useEffect(()=>{
    axios
    .get(`https://jsonplaceholder.typicode.com/posts/${fetch}`)
    .then(res=>{
      console.log(res);
      setPost(res.data)
    })
    .catch(err=>{
      console.log(err)
      
    })
  },[fetch])
  

  return(
    <div>
       {
         /*
          <ul>
           { posts.map(post =>(
             <li key={post.id}>{post.title}{post.body}{post.userId}</li>
           )) }
        </ul>
          */
       }
       <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
       <button type="button" onClick={handleClick}>fetchApi</button>
       {post.title}
    </div>

  )
}
export default Datafetch;