import { useState } from "react";
import RoootLayout from './components/pages/RootLayout'

const App = () => {
  const [jsonData,setJsonData] =  useState('')
  const [formData, setFormData] = useState(
    {
      email: "",
      password:""
    }
  )

 

  const handleChange = (e) => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
       [e.target.name] : e.target.value
        }
      })
  }

  

  const handleSubmit =  async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:4000/api/v1/books/signup', {
        method: 'POST', 
        body: JSON.stringify(formData),
        headers: {'Content-Type': 'application/json'}
      })

      setJsonData(await res.json());
      
    } catch(err){ 
        console.log(err)
   }
    
  }

  

  // console.log(formData)

  return ( 
    <>
        <div className="flex flex-col items-center h-screen justify-center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs" action="/signups" onSubmit={handleSubmit} >
              <div className="flex justify-center text-2xl mb-3">
                  <h2>Signup</h2>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="text" placeholder="Email" onChange={handleChange} value={formData.email} required />
                <p className="text-red-500 text-xs italic">{jsonData.errors && jsonData.errors.email}</p>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="Please enter your password" onChange={handleChange} value={formData.password} required/>
                <p className="text-red-500 text-xs italic">{jsonData.errors && jsonData.errors.password}</p>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy;2022 Amoz DEV All rights reserved.
            </p>
      </div>
      {/* <RoootLayout/> */}
    </>
   );
}
 
export default App;