import React, {Component} from 'react';
import '../App.css';


const greyFont={
  color: 'grey',
  fontSize: '45px',
  fontFamily: 'snell roundhand'
}

const goldFont={
  color: '#BBA319',
}


class App extends Component {
  
    constructor(props){
        super(props);
        this.state = {
          
        };
    }
  
  render(){
 
     return (
        <div class="Sec1">
          <div>
            <h2 style={greyFont}>BRING OUT THE <span style={goldFont}>BEAUTI</span> IN YOU</h2>
            <button class="book-btn">Book Now</button>
            </div>
        </div>
        );
    }
}

export default App;