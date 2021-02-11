
import React from 'react'; 
import {Link} from 'react-router-dom';
import './Singelproject.scss'



const Singelproject = ({title,}) => {

   
    
    return (
       <div className='project-row'>
          <div className='project-img bold4'>{title}</div>
       </div>
        
    )
}

export default Singelproject;