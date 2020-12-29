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
      <div className='picture-manifest'>
      </div>
      <div className='text-manifest bold3'>
        <h1>In 1990, 30 minutes before turning off its’ cameras, after a 13 year trip and more than forty AU (6 billion km) from Planet Earth, the satellite Voyager I, took a photo with a very humble outcome: the image shows a really tiny part of our Solar System, and our beautiful Planet with all our lives and hopes in it is only a fraction of a pixel. This picture gave us a very important tool: perspective.
        <br></br>
        <br></br>
        Forty wants to be that picture. It’s purpose is to give perspective, lay the table with new and different questions and raise possibilities of change.
        <br></br>
        <br></br>
        Remember: we are just a speck of dust, a beautiful casualty floating around an infinite void. Change the questions and raise new answers.
        <br></br>
        <br></br>
        Forty, more than entertainment.</h1>
      </div>
      </div>
    </MainLayout>
  </>
  );
}
 
export default Manifest;