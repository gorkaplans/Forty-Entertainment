import { Link } from 'react-router-dom';

import MainLayout from '../components/MainLayout';
import './Home.scss'

const Home = () => {

  /// cridar imatge de contenful per la picture

return (
    <MainLayout>
       <div class="row1">
            <div class="logo-container bold">
              <Link className="logo" to='/'></Link>
            </div>
            <Link class="about-container bold" to="/Manifest">
              MANIFEST
            </Link>
            <Link class="contact-container bold" to="/Contact">
              CONTACT
            </Link>
        </div>    
        <div class="row2">
            <Link class="projects-container bold" to="/Projects">
              PROJECTS
            </Link>
            <div class="picture-container bold">
              PICTURE
            </div>
        </div>    
        
    </MainLayout>
  );
}
 
export default Home;