import React from 'react'
import {Link } from 'gatsby'

const Menu = () => {
    return (
        <div>
            <ul>
                <li className="listStyle"><Link className="link" to="/">Home</Link></li> 
                <li className="listStyle"><Link className="link" to="/blog/">Blog</Link></li>
                <li className="listStyle"><Link className="link" to="/about/">About us</Link></li> 
                <li className="listStyle"><Link className="link" to="/contact/">Contact us</Link> </li>
                </ul>
           </div>
    )
}
export default Menu