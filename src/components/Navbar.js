import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Comment out HOC 

/* import { Link, NavLink, withRouter } from 'react-router-dom';

* const Navbar = (props) => {
*     console.log('props1', props);
*     setTimeout(() => {
*         props.history.push('/about')
*         console.log('props2', props);
*  }, 2000)
*/

const Navbar = () => {

    return(
        <nav className="nav-wrapper deep-orange accent-3">
            <div className="container">
                <a href="/" className="brand-logo">Fashion Gossip</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}


// export default withRouter(Navbar);
export default Navbar;