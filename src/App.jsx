import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from './axios';
function App() {
  const [myState, setMyState]= useState([]);
  const [isError,setIsError] = useState("");
  const getApiData = async ()=>{
    try{
      const response = await axios.get("/posts");
      setMyState(response.data);
    }catch(error){
      setIsError(error.message);
    }

  };
  useEffect(()=>{

    console.log("useefferct");
    getApiData();
    // axios.get("https://jsonplaceholder.typicode.com/toddos/")
    // .then(respone =>setMyState(respone.data)) //setMyState(respone.data)
    // .catch((error)=>setIsError(error.message));
  },[isError]);
  return (
    <>
    <h1>Axios Tutorial</h1>
    {isError !== "" && <h2>{isError}</h2>}
    <div className='grid'>
        {myState.slice(0,12).map((post)=>{
          const {id,title,body} = post;
          return (<div className="card" key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>)
          
        })}
      
    </div>
    </>
    
  )
}

export default App
