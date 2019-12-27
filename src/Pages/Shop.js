import React, {Component} from 'react';

const bStyle ={
    backgroundColor: 'rgb(187, 163, 25)'
}


class App extends Component {
  
    constructor(props){
        super(props);
        this.state = {  
        };
    }

  render(){
 
     return (
        <div   style={bStyle} class="AboutContainer">
              <h1>COMING SOON!</h1>
        </div>
        );
    }
}

export default App;