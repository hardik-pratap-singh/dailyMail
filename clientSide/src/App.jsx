import { useEffect, useState } from "react"
import Card from "./components/Card"
import { Navbar } from "./components/Navbar"


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
      <Navbar />
      {
        user.map((data, idx) => 
          <>
            <Card key = {idx} titleName={data.title} descriptionName={data.description} urlName={data.urlToImage} url={data.url} />
            {/* <li></li> */}
          </>
          
        )
      }
      

      

    </>
  )
}

export default App
