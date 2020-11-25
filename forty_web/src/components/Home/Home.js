import React from 'react'; 

import'./Home.scss'

const Home = () => {
    return (
        
        <div className="columns">
        <div className="column1">
          <span className="block1"></span>
          <span className="block2" />
        </div>
        <div className="column2">
          <h1>COMING SOON</h1>
        </div>
        <div className="column1">
          <span className="block3">
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat turpis proin tortor torquent neque semper, vestibulum cum phasellus et malesuada rutrum augue habitasse posuere justo convallis natoque. Netus semper metus urna quisque dui luctus orci interdum, fames aliquam massa ante ac turpis himenaeos, molestie nisi ligula suscipit vivamus tincidunt risus.Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat turpis proin tortor torquent neque semper, vestibulum cum phasellus et malesuada rutrum augue habitasse posuere justo convallis natoque.</p>
            </span>

            <span className="block4">
                <p>hello@whitemoose.tv</p>
                <p>653 05 71 04 / 93 148 36 43</p>
                <p>C/ Pereda 4, Sabadell 08203, Barcelona.</p>
          </span>
          
        </div>
      </div>
    
    )
}   

export default Home;