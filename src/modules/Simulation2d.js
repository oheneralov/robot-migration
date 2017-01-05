import React from 'react';
import Parser from './Parser'

class Simulation2d extends React.Component {

    render(){
        return (
            <div>
              <h2>it is 2d simulation</h2>
              <Parser type = "parrot2d"/>
            </div>
        );
    }
}

export default Simulation2d;
