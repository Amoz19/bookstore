import {NavLink, Outlet} from 'react-router-dom'
const RoootLayout = () => {
    return ( 
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/newbooks">Newbooks</NavLink>
                <NavLink to="/reviews">Reviews</NavLink>
            </nav>
            <main>
                <Outlet/>
            </main>
        </header>
        
        
     );
}
 
export default RoootLayout;