import Menu from '../components/Menu';
import MainLayout from '../components/MainLayout'

const Contact = () => {


  const menu = ['MANIFEST', 'PROJECTS', 'CONTACT']

    return (
      <MainLayout>
        <Menu titles={menu}></Menu>
        <h1>Contact</h1>
      </MainLayout>
      );
    }
     
    export default Contact;