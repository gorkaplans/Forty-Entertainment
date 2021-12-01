import { Link } from 'react-router-dom';
import { useEffect, useState} from 'react';
import { client } from '../client';


import MainLayout from '../components/MainLayout';
import './Home.scss'
import useInterval from './../hooks/useInterval'

const Home = () => {
  const [activeBg, setActiveBg] = useState('')
  const [images, setImages] = useState([])
  
  // The counter
  const [count, setCount] = useState(0)
  // Dynamic delay
  const [delay, setDelay] = useState(4000)
  // ON/OFF
  const [isPlaying, setPlaying] = useState(false)



  useEffect(() => {
    callImages();
    setPlaying(true)
    
    
  }, []);


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

useInterval(
  () => {
    if(count < images.length){
    setCount(count + 1)
    setActiveBg(images[count])}
    else{
      setCount(0)
    }
    
  },
  isPlaying ? delay : null,
)






return (
    <MainLayout>
       <div class="row1">
            <div class="logo-container bold">
              <Link className="logo" to='/'></Link>
            </div>
            <Link class="about-container bold" to="/Manifest">
              MANIFESTO
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