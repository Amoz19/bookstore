import {NavLink, Outlet} from 'react-router-dom'
const RoootLayout = () => {
    return ( 
        <header >
            <div className='flex justify-around h-12 items-center bg-slate-300'>
                <div>
                    <h1 className='uppercase text-xl font-semibold text-neutral-800'>Books</h1>
                </div>
                <nav>
                    <NavLink to="/" className='pr-6 hover:text-white'>Home</NavLink>
                    <NavLink to="/newbooks" className='pr-6 hover:text-white'>Newbooks</NavLink>
                    <NavLink to="/reviews" className='pr-6 hover:text-white'>Reviews</NavLink>
                </nav>
            </div>
           
            <main>
                <Outlet/>
            </main>
        </header>
        
        
     );
}
 
export default RoootLayout;