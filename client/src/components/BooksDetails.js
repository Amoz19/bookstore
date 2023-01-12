import { BsFillBookmarkFill, BsFillFileEarmarkBreakFill , BsFillCloudArrowUpFill } from "react-icons/bs";
// import {  } from "react-icons/bs";
import { Link, useLoaderData, useParams } from 'react-router-dom'

export default function BookDetails() {
  const { id } = useParams()
    const books = useLoaderData()
    // console.log(books)

  return (
    <div>
      <div className="flex mx-8">
        <div className="w-1/6 border-solid border-2 bg-slate-500 text-white">
            <h2 className='flex h-full justify-center items-center' >{books.title}</h2>
        </div>
        <div className="w-2/4 flex flex-col mx-4">
            <h1 className="text-xl font-bold text-neutral-800 py-2">{books.title}</h1>
            <p className='py-2 italic'>By {books.author}</p>
            <pre className='py-2 underline decoration-slate-500'>{books.reviews.length === 1 ? "Review Count " + books.reviews.length : "Reviews Count " + books.reviews.length}</pre>
            <p className="pb-6">{books.bookDetail}</p>
            <p className="flex items-center py-1"><BsFillBookmarkFill className="pr-2 text-2xl"/>{books.genre}</p>
          <p className="flex items-center py-1"> <BsFillFileEarmarkBreakFill className="pr-2 text-2xl"/> {books.Pages}</p>
          <p className="flex items-center py-1"> <BsFillCloudArrowUpFill className="pr-2 text-2xl"/> {books.publishedDDate}</p>
            <Link to="/">
              <button className="rounded-full bg-blue-200 mt-2 px-6 ">Back to Home</button>
            </Link>
        </div>
        
      </div>
      
    </div>
  )
}

// data loader
export const bookDetailsLoader = async ({ params }) => {
    const { id } = params
    // const specific = id.toString()

  const res = await fetch('http://localhost:4000/api/v1/books' + `/${id}` )

  return res.json()
}