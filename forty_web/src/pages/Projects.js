import './Projects.scss'



import Menu from '../components/Menu';
import MainLayout from '../components/MainLayout'
import Singelproject from '../components/Singelproject'


const Projects = () => {

  const menu = ['MANIFEST', 'PROJECTS', 'CONTACT']

  return (
    <MainLayout>
      <div className='projects-container2'>
        <Menu titles={menu}></Menu>
        <div className='projects-scroll'>
          <Singelproject title = 'TITLE_1'></Singelproject>
          <Singelproject title = 'TITLE_2'></Singelproject>
          <Singelproject title = 'TITLE_2'></Singelproject>
          <Singelproject title = 'TITLE_2'></Singelproject>
          <Singelproject title = 'TITLE_2'></Singelproject>
          <Singelproject title = 'TITLE_2'></Singelproject>
        </div>
      </div>
   </MainLayout>
    );
    }
     
export default Projects;