import './Privacy.scss'

import Menu from '../components/Menu';
import MainLayout from '../components/MainLayout'

const Cookies = () => {


  const menu = ['MANIFEST', 'PROJECTS', 'CONTACT']

    return (
      <MainLayout>
      <div className='privacy-container'>
          <Menu titles={menu}></Menu>
        <div className='privacy-text'>
            <h1 className='bold5'> POLÍTICA DE COOKIES </h1>
    
            <br></br>
            <p className='regular2'>El prestador por su propia cuenta o la de un tercero contratado para la prestación de servicios de medición, pueden utilizar cookies cuando un usuario navega por el sitio web. Las cookies son ficheros enviados al navegador por medio de un servidor web con la finalidad de registrar las actividades del usuario durante su tiempo de navegación.</p>
            <br></br>
            <p className='regular2'>Las cookies utilizadas por el sitio web se asocian únicamente con un usuario anónimo y su ordenador, y no proporcionan por sí mismas los datos personales del usuario.</p>
            <br></br>
            <p className='regular2'>Mediante el uso de las cookies es posible que el servidor donde se encuentra la web, reconoz- ca el navegador web utilizado por el usuario con la finalidad de que la navegación sea más sencilla, permitiendo, por ejemplo, el acceso a los usuarios que se hayan registrado previa- mente, acceder a las áreas, servicios, promociones o concursos reservados exclusivamente a ellos sin tener que registrarse en cada visita. Se utilizan también para medir la audiencia y parámetros del tráfico, controlar el progreso y número de entradas.</p>
            <br></br>
            <p className='regular2'>El usuario tiene la posibilidad de configurar su navegador para ser avisado de la recepción de cookies y para impedir su instalación en su equipo. Por favor, consulte las instrucciones y manuales de su navegador para ampliar esta información.</p>
            <br></br>
            <p className='regular2'>Para utilizar el sitio web, no resulta necesario que el usuario permita la instalación de las cookies enviadas por el sitio web, o el tercero que actúe en su nombre, sin perjuicio de que sea necesario que el usuario inicie una sesión como tal en cada uno de los servicios cuya presta- ción requiera el previo registro o “login”.</p>
            <br></br>
            <p className='regular2'>Las cookies utilizadas en este sitio web tienen, en todo caso, carácter temporal con la única finalidad de hacer más eficaz su transmisión ulterior. En ningún caso se utilizarán las cookies para recoger información de carácter personal.</p>
            <br></br>
           
           
            <p className='regular3'>Tipo de cookies</p>
            <br></br>
            <p className='regular2'>En función de su naturaleza, las galletas se pueden clasificar como:“Cookies de sesión” o “cookies persistentes”: las “cookies de sesión” son eliminadas al cerrar el navegador, en cambio las “cookies persistentes” permanecen en el equipo informático. “Cookies propias” o “cookies de terceros”: las primeras pertenecen al mismo titular de la web, las segundas a un tercero.</p>
            <br></br>
           
           
            <p className='regular3'>Cookies utilizadas en este sitio:</p>
            <br></br>
            <p className='regular2'>Galletas propias y de sesión:</p>
            <br></br>
            <p className='regular2'>PHPSESSIDTiempo de caducidad: Hasta el fin de la sesión de la navegación (hasta el cierre del navegador).
Propósito: Cookie estándar de PHP (lenguaje en que está programada la web). Controla elmantenimiento de la sesión.
Creación: En la primera página visitada de la web.
Modificación: Nunca.</p>
            <br></br>
            <p className='regular2'>Galletas propias y persistentes:</p>
            <br></br>
            <p className='regular2'>anguage
Tiempo de caducidad: 1 año desde su creación.
Propósito: Evitar mostrar la alerta de política de cookies una vez el usuario ha declarado ser
conocedor de las mismas.
Creación: Al aceptar el usuario expresamente ser conocedor de la política de cookies.
Galletas de terceros y persistentes:

<br></br>

__utma
<br></br>
Tiempo de caducidad predeterminado: 2 años desde su creación o modificación.
Propósito: Usado para distinguir usuarios y sesiones.
Creación: Al ejecutar la librería JavaScript de Google Analytics y si no existe la cookie previamente.
Modificación: Cada vez que se envían datos a Google Analytics.

<br></br>

__utmb
<br></br>
Tiempo de caducidad predeterminado: 30 minutos desde su creación o modificación.
Propósito: Usado para determinar nuevas sesiones / visitas.
Creación: Al ejecutar la librería JavaScript de Google Analytics y si no existe la cookie previamente.
Modificación: Cada vez que se envían datos a Google Analytics.

<br></br>

__utmc
<br></br>
Tiempo de caducidad predeterminado: Hasta el fin de la sesión de la navegación (hasta el cierre del navegador).
Propósito: Not used in ga.js. Septiembre for interoperability with urchin.js. Historically, this cookie operated in Conjunction with the __ UTMB cookie to determin whether the user was in a new session / visit.

<br></br>

__utmz
<br></br>
Tiempo de caducidad predeterminado: 6 meses desde su creación o modificación.
Propósito: Almacena el origen de tráfico o campaña que explica cómo el usuario ha llegado al lugar.
Creación: Al ejecutar la librería JavaScript de Google Analytics.
Modificación: Cada vez que se envían datos a Google Analytics.

</p>
            <br></br>
            <p className='regular2'>Estas cuatro cookies de Google Analytics en ningún caso lo identifican de manera individual ya que trabaja con datos agregados.</p>
            <br></br>
            <p className='regular2'>Google ha desarrollado un complemento para que los visitantes del sitio web tengan la posibilidad de evitar que Google Analytics recopile y utilice sus datos. Está disponible para Microsoft Internet Explorer 7-10, Google Chrome, Mozilla Firefox, Apple Safari y Opera.</p>
            <br></br>
            <p className='regular2'>Página de descarga: <a hrefç="https://tools.google.com/dlpage/gaoptout"> https://tools.google.com/dlpage/gaoptout </a></p>
            <br></br>
            <p className='regular2'>Como gestionar / rechazar las cookies</p>
            <br></br>
            <ul className='regular2'> 
            <br></br>
                <li>· Gestión de cookies en Google Chrome.</li>
                <br></br>
                <li>· Gestión de cookies en Firefox.</li>
                <br></br>
                <li>· Gestión de cookies en Internet Explorer.</li>
                <br></br>
                <li>· Gestión de cookies en Safari.</li>
                <br></br>
                <li>· Gestión de cookies en Opera.</li>
                <br></br>
            </ul>
            <br></br>

            
            
        </div>
      </div>
    </MainLayout>
      );
    }
     
    export default Cookies;