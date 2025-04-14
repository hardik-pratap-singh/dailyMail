import { useEffect, useState } from "react"
import Card from "./components/Card"
import { Navbar } from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx'
import About from './components/About.jsx'


function App() {
  //api='https://jsonplaceholder.typicode.com/users'
  const [user, setUser] = useState([])
  const [news, setNews] = useState([])
  // const [posts , setPosts] = useState([])
  // const [classes , setClasses] = useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=aeb3a8116b764f2d9c38582452473b46")
      const data = await response.json()
      setUser(data.articles)

    }

    getData();
  }, [])

  return (

    <>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>


      <Navbar />
      {
        user.map((data, idx) =>
          <>
            <Card key={idx} titleName={data.title} descriptionName={data.description} urlName={data.urlToImage} url={data.url} />
            {/* <li></li> */}
          </>

        )
      }




    </>
  )
}

export default App
