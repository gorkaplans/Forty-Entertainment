
import React from 'react'; 
import {Link} from 'react-router-dom';
import './ProjectList.scss'
import Projects from '../../pages/Projects';



const ProjectList = ({projectslist}) => {

   
    
    return (
       <div>
          {projectslist.map((project, index) => 
          <div key={index} className='project-row'>
            <div 
            style={{
                  backgroundImage: `url(${project.fields.image.fields.file.url})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
               }}
            className='project-img bold4'>{project.fields.name}</div>
         </div>)}
       </div>
       
    )
}

export default ProjectList;



        