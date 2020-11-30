import React from 'react'; 

import'./Home.scss'

const Home = () => {
    return (
        
        <div className="columns">
        <div className="column1">
          <span className="block1"></span>
          <span className="block2">
            <p className="teatre">KRÀMPACK - TEATRE AQUITANIA</p>
            <p className="teatre">Des del 22 de desembre</p>
          </span>
        </div>
        <div className="column2">
          <h1>COMING SOON</h1>
        </div>
        <div className="column1 column3 ">
          <span className="block3">
              <p className="manifest">In 1990, 30 minutes before turning off its’ cameras, after a 13 year trip and more than forty AU (6 billion km) from Planet Earth, the satellite Voyager I, took a photo with a very humble outcome: the image shows a really tiny part of our Solar System, and our beautiful Planet with all our lives and hopes in it is only a fraction of a pixel. This picture gave us a very important tool: perspective.</p>
              <br></br>
              <p className="manifest">Forty wants to be THAT picture. It’s purpose is to give perspective, lay the table with new and different questions and raise possibilities of change. Forty wants to be more than entertainment.</p>
              <br></br>
              <p className="manifest">
              Remember: we are just a speck of dust, a beautiful casualty floating around an infinite void. Change the questions and raise new answers.Forty, more than entertainment.
              </p>
            </span>

            <span className="block4">
                <p>-</p>
                <p>hello@whitemoose.tv</p>
                <p>-</p>
                <p>653 05 71 04 / 93 148 36 43</p>
                <p>-</p>
                <p>C/ Pereda 4, Sabadell 08203, Barcelona.</p>
                <p>-</p>
                <section className="svg-container">
                <a href="https://whitemoose.tv/">
                <svg data-v-4b94b59e=""  viewBox="0 0 326 200" xmlns="http://www.w3.org/2000/svg"><path d="M163 146.17a26.89 26.89 0 0126.76 27.16c-.187 14.774-12.289 26.614-27.064 26.479-14.775-.136-26.657-12.196-26.574-26.971.084-14.775 12.102-26.7 26.878-26.668zM212.76.2v190.42h53.99V.2h58.66v199.48H203.04V.2h9.72zM59.14.2v190.42h53.99V.2h9.72v199.48H.48V.2h58.66z" fill="#292927" fill-rule="nonzero"></path>
                </svg>
                </a>
                 </section>
          </span>
          
        </div>
      </div>
    
    )
}   

export default Home;