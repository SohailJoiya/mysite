import React from 'react'
import {graphql} from 'gatsby'
import headerStyle from "../Style/header.scss"
import Menu from "../components/navigation"

const Header = () => {

    return (
        <div>
            <header>
    <div className="headerarea"><h1>heder</h1></div>
              <div className="navbar"><Menu/></div>  
                
            </header>
        </div>
    )


}

export default Header