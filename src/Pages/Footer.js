import React, {Component} from 'react';
import '../App.css';


const inputStyle ={

    border: '0',
    outline: '0',
    background: 'transparent',
    borderBottom: '1px solid gold'
}

class App extends Component {
  
    constructor(props){
        super(props);
        this.state = {
          
        };
    }
  
  render(){
 
     return (
        <div className="footer">
          <h3 className="heading3">Join the BBeautiandlashes Mailing "BeauTEA" List</h3>
          <div className="email">
            <input style={inputStyle} placeholder="email" type="email"></input>
            <button className="sub">SUBSCRIBE</button>
          </div>
          <div className="icons">Icons</div>
        </div>
        );
    }
}

export default App;