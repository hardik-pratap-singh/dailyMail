import { useEffect, useState } from "react"
import Card from "./components/Card"


function App() {
  //api='https://jsonplaceholder.typicode.com/users'
  const [user, setUser] = useState([])
  const [news , setNews] = useState([])
  // const [posts , setPosts] = useState([])
  // const [classes , setClasses] = useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=5b5d7badb7404318a221b43ab217fb35")
      const data = await response.json()
      setUser(data.articles)
      
    }

    getData();
  }, [])

  return (

    <>
      {/* <Card /> */}
      {
        user.map((data, idx) => 
          <>
            <Card key = {idx} title={data.title} description={data.description} />
            {/* <li></li> */}
          </>
          
        )
      }


      

    </>
  )
}

export default App
