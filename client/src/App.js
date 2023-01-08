
import { useEffect, useState } from 'react';

function App() {

  const [bookdata, setBookdata] = useState(null)
 

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:4000/api/v1/books')
      const json = await response.json()
      setBookdata(json)
    }

    fetchData()
  }, [])

  // console.log(bookdata)
  
  if (bookdata === null) {
    return <p>Loading data...</p>;
  }
  return (
    <div>
       {bookdata.map(item => (
        <div key={item._id}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
