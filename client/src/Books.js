import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
  
  } from 'react-router-dom'
  
  import RootLayout from './components/pages/RootLayout'
  import Home from './components/pages/Home'
  import { booksLoader } from './components/pages/Home'
  import BookDetails from './components/BooksDetails'
  import { bookDetailsLoader } from './components/BooksDetails'
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} loader={booksLoader}></Route>
        <Route path=':id' element={<BookDetails />} loader={bookDetailsLoader}></Route>
      </Route>
    )
  )
  
  const Books = () => {
    return ( 
      <RouterProvider router={router} />
     );
  }
   
  export default Books;
  