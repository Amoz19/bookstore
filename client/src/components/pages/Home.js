import { useEffect, useState } from 'react';
import HomeUi from './HomeUi';

const Home = () => {
    const [bookdata, setBookdata] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:4000/api/v1/books')
      const json = await response.json()
      setBookdata(json)
    }

    fetchData()
  }, [])


  
  if (bookdata === []) {
    return <p>Loading data...</p>;
  }
    return ( 
      <HomeUi data={bookdata} />
     );
}
 
export default Home;
