import './Projects.scss'
import React from 'react'
import { client } from '../client';



import Menu from '../components/Menu';
import MainLayout from '../components/MainLayout'
import ProjectList from '../components/ProjectList'

const menu = ['MANIFEST', 'PROJECTS', 'CONTACT']

class Projects extends React.Component{
  
  
  state = {
      projects: []
  }

  componentDidMount() {
      client.getEntries()
      .then((response) => {
          console.log(response)
          this.setState({
              projects: response.items
          })
      })
      .catch(console.error)
  }

  render() {
    return (
      <MainLayout>
      <div className='projects-container2'>
        <Menu titles={menu}></Menu>
        <div className='projects-scroll'>
          <ProjectList projectslist ={this.state.projects}></ProjectList>
        </div>
      </div>
   </MainLayout>
    );
  }
}

export default Projects;



/* const Projects = () => {

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
     
export default Projects; */