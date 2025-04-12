import { useEffect, useState } from "react"

function App() {
//api='https://jsonplaceholder.typicode.com/users'
const [user,setUser]=useState([])
useEffect(()=>{
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    setUser(data)
    console.log(user) ; 
  }

  getData() ;
},[])
  return (
    
    <>
      <h1>Hellow World!</h1>
      {
        user.map((data,idx)=>
          <li key={idx}>{data.name}</li>
          
        )
      }
  
    </>
  )
}

export default App
