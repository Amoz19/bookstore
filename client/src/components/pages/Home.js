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
  },
  {
    _id:"4500",
    title:"Hit Refresh",
    author: "Ye min win",
    publishedDDate:"19.5.2022",
    Rating:2,
    Reviwer: "Amoz",
    Review:"Ahh hmm"
  },

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
