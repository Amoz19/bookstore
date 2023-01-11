import { useLoaderData, useParams } from 'react-router-dom'

export default function BookDetails() {
  const { id } = useParams()
    const books = useLoaderData()
    console.log(books)

  return (
    <div>
      <h2>Career Details for {books.title}</h2>
      <pre>{books.publishedDDate}</pre>
          {/* <h2>Route is { id }</h2> */}
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