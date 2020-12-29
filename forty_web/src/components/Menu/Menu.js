
import React from 'react'; 
import {Link} from 'react-router-dom';
import './Menu.scss'



const Menu = ({titles}) => {

    const title1 = titles[0]
    const title2 = titles[1]
    const title3 = titles[2]
    
    return (
        <>
        <div className="nav-bar">
            <div class="logo-menu">
              <Link className="logo" to='/'></Link>
            </div>
            <Link class="manifest-menu bold2" to="/Manifest">
              {title1}
            </Link>
            <Link class="projects-menu bold2" to="/Projects">
              {title2}
            </Link>
            <Link class="contact-menu bold2" to="/Contact">
              {title3}
            </Link>

        </div>
        
        </>
        
    )
}

export default Menu;