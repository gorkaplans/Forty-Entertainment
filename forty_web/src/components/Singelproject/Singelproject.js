
import React from 'react'; 
import {Link} from 'react-router-dom';
import './Singelproject.scss'



const Singelproject = ({title, image}) => {

   
    
    return (
       <div className='project-row'>
          <div className='project-img bold4'>{title}</div>
          <div className='project-titile bold4'>{image}</div>
       </div>
        
    )
}

export default Singelproject;