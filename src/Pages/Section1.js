import React, {Component} from 'react';
import '../App.css';


const greyFont={
  color: 'grey',
  fontSize: '45px',
  fontFamily: 'snell roundhand'
}

const goldFont = {
  color: '#BBA319',
}

const backgroundStyle={
  backgroundColor: 'white',
  opacity: '0.6',
  maxWidth: '750px',
}

const booknowStyle = {
  backgroundColor: 'rgb(187, 163, 25)',
  border: 'none',
  color: 'white',
  textAlign: 'center',
  padding: '13px 30px',
  fontWeight: 'bold',
  display: 'inline-block',
  fontSize: '17px',

}

class App extends Component {
  
    constructor(props){
        super(props);
        this.state = {
          
        };
    }
  
  render(){
 
     return (
        <div className="Sec1">
          <div className="intro">
            <div id="header-bg" style={backgroundStyle}><h2 style={greyFont}>BRING OUT THE <span style={goldFont}>BEAUTI</span> IN YOU</h2></div>
            <button style={booknowStyle}>Book Now!</button>
            </div>
        </div>
        );
    }
}

export default App;