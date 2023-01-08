// import {useState } from 'react';
import HomeUi from './HomeUi';

const data = [
  {
    _id:"63b91209e4e9cf3c60c0debe",
    title:"Su Latt",
    author: "Chan Myae Win",
    publishedDDate:"5.5.2020",
    Rating:4,
    Reviwer: "Aung Mon",
    Review:"Bla Bla"
  }
]

const Home = () => {
    // const [bookdata, setBookdata] = useState([data])

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('http://localhost:4000/api/v1/books')
  //     const json = await response.json()
  //     setBookdata(json)
  //   }

  //   fetchData()
  // }, [])


  
  if (data === []) {
    return <p>Loading data...</p>;
  }
    return ( 
      <HomeUi data={data} />
     );
}
 
export default Home;
