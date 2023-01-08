import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider

} from 'react-router-dom'

import RootLayout from './components/pages/RootLayout'
import Home from './components/pages/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path='/' element={ <Home />}></Route>
    </Route>
  )
)

const App = () => {
  return ( 
    <RouterProvider router={router}/>
   );
}
 
export default App;
