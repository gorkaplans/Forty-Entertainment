import './Manifest.scss'
import Menu from '../components/Menu';
import MainLayout from '../components/MainLayout'

const Manifest = () => {

  const menu = ['MANIFEST', 'PROJECTS', 'CONTACT']

return (
  <>
    <MainLayout>
      <div className='manifest-container'>
      <Menu titles={menu}></Menu>
      <div className='picture-manifest'></div>
      <div className='text-manifest'></div>
      </div>
    </MainLayout>
  </>
  );
}
 
export default Manifest;