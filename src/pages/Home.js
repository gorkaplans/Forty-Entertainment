import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { client } from '../client';


import MainLayout from '../components/MainLayout';
import './Home.scss'

const Home = () => {
  const [activeBg, setActiveBg] = useState('')
  const [images, setImages] = useState([])
  const [count, setCount] = useState(0)







const callImages = () => {
  var imagesx = []
  client.getEntries({
    content_type: "productions"
  })
  .then((response) => {

    response.items.forEach(x => {
      imagesx.push(`url(${x.fields.image.fields.file.url})`)
   });

   setImages(imagesx)
  })
  .catch(console.error)
}





  useEffect(() => {
    callImages();
    const updateImage = (images) => {
      console.log('index' + count)
  
      if(count <= images.lenght){
        setActiveBg(images[count])
        console.log(activeBg)
        setCount(count +1);
     } else{
       setCount(0)
     };
  }; 
    const interval = setInterval(() => {
      updateImage(images);
      console.log(activeBg)
    }, 4000);
    return () => clearInterval(interval);
  }, );


/// aactivar el set interval  { setInterval(updateImage(images,index), 2000)}

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
            <div 
            style={{
              backgroundImage: activeBg,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
           }} 
            class="picture-container bold">

            </div>
        </div>    
        
    </MainLayout>
  );
}
 
export default Home;