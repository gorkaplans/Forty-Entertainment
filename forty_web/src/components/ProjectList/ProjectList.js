
import React from 'react'; 
import {Link} from 'react-router-dom';
import './ProjectList.scss'
import Projects from '../../pages/Projects';
import { useHistory } from "react-router-dom";





const ProjectList = ({projectslist}) => {
   

   let history = useHistory();

   const handleOnClick = (id) =>{
     history.push(`Projects/${id}`) 
   }    
    
    return (
       <div>
          {projectslist.map((project, index) => 
          <div onClick={() => handleOnClick(project.sys.id)} key={index} className='project-row'>
            <div 
            style={{
                  backgroundImage: `url(${project.fields.image.fields.file.url})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
               }}
            className='project-img bold4'>{project.fields.title}</div>
         </div>)}
       </div>
       
    )
}

export default ProjectList;



        