import { useState, useEffect } from 'react'

function App() { 
  const [data, setData] = useState(null)

  useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(response => response.json())
      .then(data => setData(data))
  }
    , [] )  // only once when first rendered
  
    return (
      <div className='App'>
        {data && data.map((post,index) => <p key={index}>{post.title}</p>)}
      </div>
    )
}
  

export default App
