import './Contact.scss'
import { Link } from 'react-router-dom'


import Menu from '../components/Menu';
import MainLayout from '../components/MainLayout'

const Contact = () => {


  const menu = ['MANIFEST', 'PROJECTS', 'CONTACT']

    return (
      <MainLayout>
      <div className='contact-container2'>
      <Menu titles={menu}></Menu>
      <div className='claim-contact bold4'>
        <h1>We are the aliens! 
        <br></br>
        Where have we met? </h1>
      </div>
      <div className='contact-column'>
        <div className="contact-info bold2">
          <p>hello@forty.tv</p>
          <p>-</p>
          <p>653 05 71 04 / 93 148 36 43</p>
          <p>-</p>
          <p>C/ Pereda 4, Sabadell 08203, Barcelona.</p>
          <p>-</p>
          <a className="svg-container" href="https://whitemoose.tv/">
          <svg data-v-1877ef98="" viewBox="0 0 463 192" xmlns="http://www.w3.org/2000/svg"><path d="M350.2 112.41c20.51 0 35.49 10.42 40.81 30.39l-4.56.87c-8.9-9.87-21.27-12.15-33.64-12.15h-5.87c-11.83 0-32.46 3.25-32.46 12 0 4.524 5.538 6.579 24.715 6.62h29.995c6.95 0 19.76.76 19.76 11.41 0 15.08-14.54 30-37.35 30-24.85 0-36.89-12.59-42-30.4l4.44-.86c9.45 9.33 19.11 12.37 33.76 12.37h5.86c12.81 0 32-4 32-12.26 0-6.906-12.048-7.252-26.928-7.27H332.18c-10.09 0-21.17-1.09-21.17-10.75-.01-9.24 10.09-29.97 39.19-29.97zm-85.58 0c22.9 0 40.59 17.69 40.59 39.52 0 21.91-17.69 39.61-40.59 39.61h-4.13c-23.33 0-40.7-17.7-40.7-39.61s17.37-39.52 40.7-39.52h4.13zm-89.81 0c22.9 0 40.59 17.69 40.59 39.52 0 21.91-17.69 39.61-40.59 39.61h-4.13c-23.33 0-40.7-17.7-40.7-39.61s17.37-39.52 40.7-39.52h4.13zm287.34 1.51v19H400.5v17.49h52.75v3.14H400.5v17.37h61.65v19h-64.59v-76h64.59zm-396.83-.01v65.46l40.16-65.46h17.92v76h-3.16v-65.77l-40.16 65.77h-17.9v-65.77L22 189.91H.85l46.57-76h17.9zm200.17 17.49h-5.86l-.608.003c-20.024.182-36.392 9.34-36.392 20.527 0 11.187 16.387 20.424 36.393 20.607l.607.003h5.86l.604-.003c19.909-.182 36.296-9.33 36.296-20.607 0-11.3-16.72-20.53-36.9-20.53zm-89.82 0h-5.86l-.608.003c-20.024.182-36.392 9.34-36.392 20.527 0 11.187 16.377 20.424 36.392 20.607l.608.003h5.86l.605-.003c19.918-.182 36.305-9.33 36.305-20.607 0-11.3-16.72-20.53-36.91-20.53zm58.98-106.14v76h-3.15v-76h3.15zm154.08-.02v19h-61.66v17.48h52.76v3.15h-52.76v17.36l61.66.01v19h-64.59v-76h64.59zm-70.06 0v19h-36.36v57h-3.15v-57h-36.25v-19h75.76zm-168.18 0V53.8h66.43V25.26h3.14v75.98h-3.14V72.69h-66.43v28.55h-3.15v-76h3.15zm-144.87 0l28.65 67.94L62.6 25.24h3.26L74 44.68 94.62 93.2l28.22-67.94h19.54l-31.59 75.98H94.51L72.37 48.81l-21.82 52.43H34.27l-32.13-76h3.48zM233.14.29a8.7 8.7 0 018.67 8.79 8.68 8.68 0 11-8.67-8.79z"></path></svg>
          </a>
        </div>
        <div className="contact-footer ">
          <Link className="legal regular1" to='/Privacy'><p>Privacy Policy</p></Link>
          <p className="regular1">Legal Advice</p>
          <p className="regular1">Cookies Policy</p>
        </div>
      </div>
      </div>
    </MainLayout>
      );
    }
     
    export default Contact;