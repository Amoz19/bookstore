// import {useState } from 'react';
// import HomeUi from './HomeUi';

// const data = [
//   {
//     _id:"63b91209e4e9cf3c60c0debe",
//     title:"Su Latt",
//     author: "Chan Myae Win",
//     publishedDDate:"5.5.2020",
//     Rating:4,
//     Reviwer: "Aung Mon",
//     Review:"Bla Bla"
//   },
//   {
//     _id:"4500",
//     title:"Hit Refresh",
//     author: "Ye min win",
//     publishedDDate:"19.5.2022",
//     Rating:2,
//     Reviwer: "Amoz",
//     Review:"Ahh hmm"
//   },

// ]

// const Home = () => {
//     // const [bookdata, setBookdata] = useState([data])

//   // useEffect(() => {
//   //   async function fetchData() {
//   //     const response = await fetch('http://localhost:4000/api/v1/books')
//   //     const json = await response.json()
//   //     setBookdata(json)
//   //   }

//   //   fetchData()
//   // }, [])


  
//   if (data === []) {
//     return <p>Loading data...</p>;
//   }
//     return ( 
//       <HomeUi data={data} />
//      );
// }
 
// export default Home;


import { useLoaderData, Link } from "react-router-dom";

export default function Home() {
  const books = useLoaderData()
  return (
    <div>
      {books.map(item => (
        <Link to={item._id.toString()} key={item._id}>
           {/* <h2 className='flex h-48 justify-center items-center' >{item.title}</h2> */}
                <div key={item._id} className="flex flex-col items-center">
                   <div className="flex flex-col w-1/4 border-b-2 pt-4 border-indigo-300">
                        <div className=" border-solid border-2 bg-slate-500 text-white">
                             <h2 className='flex h-48 justify-center items-center' >{item.title}</h2>
                         </div>
                        
                       <p>{item.author}</p>
                        <pre>{item.publishedDDate}</pre>
                    </div>
                    
              </div>
          </Link>
       ))}
    </div>
  )
    
}

export const booksLoader = async () => {
  const res = await fetch('http://localhost:4000/api/v1/books')
  return res.json()
}
