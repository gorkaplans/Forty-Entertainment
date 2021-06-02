import React from 'react'; 

import'./Landing.scss'

const Landing = () => {
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
          <h1>OUR WEBSITE</h1>
          <h1>IS 40AU AWAY</h1>
          <p>It'll be here soon</p>
        </div>
        <div className="column1 column3 ">
          <span className="block3">
              <p className="manifest">In 1990, 30 minutes before turning off its’ cameras, after a 13 year trip and more than forty AU (6 billion km) from Planet Earth, the satellite Voyager I, took a photo with a very humble outcome: the image shows a really tiny part of our Solar System, and our beautiful Planet with all our lives and hopes in it is only a fraction of a pixel. This picture gave us a very important tool: perspective.</p>
              <br></br>
              <p className="manifest">Forty wants to be that picture. It’s purpose is to give perspective, lay the table with new and different questions and raise possibilities of change.</p>
              <br></br>
              <p className="manifest">
              Remember: we are just a speck of dust, a beautiful casualty floating around an infinite void. Change the questions and raise new answers.
              </p>
              <br></br>
              <p className="manifest">
              Forty, more than entertainment.
              </p>
            </span>

            <span className="block4">
                <p>-</p>
                <p>hello@forty.tv</p>
                <p>-</p>
                <p>653 05 71 04 / 93 148 36 43</p>
                <p>-</p>
                <p>C/ Pereda 4, Sabadell 08203, Barcelona.</p>
                <p>-</p>
                <section className="svg-container">
                <a href="https://whitemoose.tv/" className="logo-moose">
                
                </a>
                 </section>
          </span>
          
        </div>
      </div>
    
    )
}   

export default Landing;