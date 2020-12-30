import './Privacy.scss'

import Menu from '../components/Menu';
import MainLayout from '../components/MainLayout'

const Privacy = () => {


  const menu = ['MANIFEST', 'PROJECTS', 'CONTACT']

    return (
      <MainLayout>
      <div className='privacy-container'>
          <Menu titles={menu}></Menu>
        <div className='privacy-text'>
            <h1 className='bold5'> POLÍTICA DE PRIVACIDAD </h1>
            <br></br>
            <br></br>
            <p className='regular2'> Denominación social: Cristina Herrea Oliva </p>
            <br></br>
            <p className='regular2'> Nombre comercial: Forty Entertainment</p>
            <br></br>
            <p className='regular2'> Domicilio social: Camí a Teia 70, Premia de Dalt 08338</p>
            <br></br>
            <p className='regular2'> CIF / NIF: 54000026M</p>
            <br></br>
            <p className='regular2'> Teléfono: +34 653 05 71 04</p>
            <br></br>
            <p className='regular2'> E-Mail: hello@forty.tv</p>
            <br></br>
            <p className='regular2'> Nombre de dominio: www.forty.tv</p>
            <br></br>
            <p className='regular2'>
            De conformidad con lo dispuesto en la Ley Orgánica 15/1999, de Protección de Datos de Carácter Personal (LOPD) y la normativa de desarrollo, el responsable del sitio web, en cumplimiento de lo dispuesto en el art. 5 y 6 de la LOPD, informa a todos los usuarios del sitio web que faciliten o vayan a facilitar sus datos personales, que estos serán incorporados en un fichero automatizado que se encuentra debidamente inscrito en la Agencia Española de Protección de Datos con fecha de registro 21-02-2018 a las 10:43:20, número de envío 41005599A2022018154836, y código de inscripción 2180651748.   
            </p>
            <br></br>
            <p className='regular2'>Los usuarios, mediante la marcación de la casilla, aceptan expresamente y de forma libre e inequívoca que sus datos personales sean tratados por parte del prestador para realizar las siguientes finalidades:</p>
            <br></br>
            <ul className='regular2'> 
            <br></br>
                <li>·Remisión de comunicaciones comerciales publicitarias por correo electrónico, fax, SMS, MMS, comunidades sociales o cualesquiera otro medio electrónico o físico, presente o futuro, que posibilite realizar comunicación comerciales. Dichas comunicaciones comerciales serán relacionadas sobre productos o servicios ofrecidos por el prestador, así como por parte de los colaboradores o partners con los que éste hubiera alcanzado algún acuerdo de promoción comercial entre sus clientes. En este caso, los terceros nunca tendrán acceso a los datos personales. En todo caso las comunicaciones comerciales serán realizadas por parte del prestador y serán de productos y servicios relacionados con el sector del prestador.</li>
                <br></br>
                <li>·Realizar estudios estadísticos.</li>
                <br></br>
                <li>·Tramitar encargos, solicitudes o cualquier tipo de petición que sea realizada por el usuario a través de cualquiera de las formas de contacto que se ponen a disposición del usuario en el sitio web de la compañía.</li>
                <br></br>
                <li>·Remitir el boletín de noticias de la página web.</li>
            </ul>
            <br></br>
            <p className='regular2'>
            El prestador informa y garantiza expresamente a los usuarios que sus datos personales no serán cedidos en ningún caso a terceras compañías, y que siempre que fuera a realizar algún tipo de cesión de datos personales, de forma previa, se solicitaría el consentimiento expreso, informado, e inequívoco por parte de los titulares.
            </p>
            <br></br>
            <p className='regular2'> 
            Todos los datos solicitados a través del sitio web son obligatorios, ya que son necesarios para la prestación de un servicio óptimo al usuario. En caso de que no sean facilitados todos los datos, el prestador no garantiza que la información y servicios facilitados sean completamente ajustados a sus necesidades.           
            </p>
            <br></br>
            <p className='regular2'> 
            El prestador garantiza en todo caso al usuario el ejercicio de los derechos de acceso, rectificación, cancelación, información y oposición, en los términos que dispone la legislación vigente. Por ello, de conformidad con lo dispuesto en la Ley Orgánica 15/1999, de Protección de Datos de Carácter Personal (LOPD) podrá ejercer sus derechos enviando una solicitud expresa, junto con una copia de su DNI, a través de los siguientes medios:           
            </p>
            <br></br>
            <ul className='regular2'> 
            <br></br>
                <li>·E-Mail: hello@forty.tv</li>
                <br></br>
                <li>·Fax: NO</li>
                <br></br>
                <li>·Correo postal: Carrer Pereda 4, Sabadell 08203</li>
            </ul>
            <br></br>
            <p className='regular2'>
            Del mismo modo, el usuario podrá darse de baja de cualquiera de los servicios de suscripción facilitados haciendo clic en el apartado darse de baja de todos los correos electrónicos remitidos por parte del prestador.  
            </p>
            <br></br>
            <p className='regular2'>
            Del mismo modo, el prestador ha adoptado todas las medidas técnicas y de organización necesarias para garantizar la seguridad e integridad de los datos de carácter personal que trate, así como para evitar su pérdida, alteración y / o acceso por parte de terceros no autorizados. 
            </p>
            <br></br>
            <p className='regular3'>Dirección IP</p>
            <br></br>
            <p className='regular2'>
            Los servidores del sitio web podrán detectar de manera automática la dirección IP y el nombre de dominio utilizados por el usuario. Una dirección IP es un número asignado automáticamente a un ordenador cuando ésta se conecta a Internet. Toda esta información es registrada en un fichero de actividad del servidor debidamente inscrito que permite el posterior procesamiento de los datos con el fin de obtener mediciones únicamente estadísticas que permitan conocer el número de impresiones de páginas, el número de visitas realizadas a los servicios web, el orden de visitas, el punto de acceso, etc.  
            </p>
            <br></br>
            <p className='regular3'>Seguridad</p>
            <br></br>
            <p className='regular2'>
            El sitio web utiliza técnicas de seguridad de la información generalmente aceptadas en la industria, tales como firewalls, procedimientos de control de acceso y mecanismos criptográficos, todo ello con el objeto de evitar el acceso no autorizado a los datos. Para lograr estos fines, el usuario / cliente acepta que el prestador obtenga datos para efectos de la correspondiente autenticación de los controles de acceso.
            </p>
            <br></br>
            <p className='regular2'>
            Todo proceso de contratación o que conlleve la introducción de datos personales de carácter alto (salud, ideología, ...) serán siempre transmitidos mediante protocolo de comunicación segura (https: // ...), de tal forma que ningún tercero tenga acceso a la información transmitida vía electrónica.   
            </p>
            <br></br>
            <p className='regular3'>Google Analytics</p>
            <br></br>
            <p className='regular2'>
            Esta página web utiliza Google Analytics, un servicio analítico de web prestado por Google, Inc., una compañía de Delaware cuya oficina principal está en 1600 Amphitheatre Parkway, Mountain View (California), CA 94043, Estados Unidos ( “Google”). Google Analytics utiliza “cookies”, que son archivos de texto ubicados en su ordenador, para ayudar al website a analizar el uso que hacen los usuarios del sitio web. La información que genera la cookie acerca de su uso del website (incluyendo su dirección IP) será directamente transmitida y archivada por Google en los servidores de Estados Unidos. Google usará esta información por cuenta nuestra con el propósito de seguir la pista de su uso del website, recopilando informes de la actividad del website y prestando otros servicios relacionados con la actividad del website y el uso de Internet. Google podrá transmitir dicha información a terceros cuando así lo requiera la legislación, o cuando dichos terceros procesen la información por cuenta de Google. Google no asociará su dirección IP con ningún otro dato del que disponga Google. Usted puede rechazar el tratamiento de los datos o la información rechazando el uso de cookies mediante la selección de la configuración apropiada de su navegador, sin embargo, debe saber que si lo hace puede ser que no pueda usar la plena funcionalidad de este website . Al utilizar este website Usted consiente el tratamiento de información acerca de Usted por Google en la forma y para los fines arriba indicados.  
            </p>

        </div>
      </div>
    </MainLayout>
      );
    }
     
    export default Privacy;