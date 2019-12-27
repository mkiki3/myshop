import React, {Component} from 'react';
import '../App.css';
import img1 from '../images/e1.jpg';
import img2 from '../images/e2.jpg';
import img3 from '../images/e3.jpg';
import img4 from '../images/e4.jpg';


   const containerStyle={
    display: 'flex', 
    justifyContent: 'space-between',

    padding: '3%'
    }

    const imgStyle = {
        width: '25%',
        border: 'solid',
       };
    
    
    const titleStyle = {
        color: 'black',
        textAlign: 'center',
        fontSize: 'x-large',
        fontWeight: 'bold',
        letterSpacing: '10px', 
        marginLeft: '20%'
    }

    /*
    const stringStyle = {
        color: 'black',
        textAlign: 'center',
        fontSize: 'medium',
        fontWeight: 'bold',
        letterSpacing: '10px', 
    }*/

    const hashtagStyle = {
        color: 'black',
        textAlign: 'center',
        fontSize: 'x-large',
        fontWeight: 'bold',
        letterSpacing: '10px'
    }

class App extends Component {
  
    constructor(props){
        super(props);
        this.state = {
          
        };
    }
  
  render(){
 
     return (
        <div className="Sec3">
             <div>
                 <span style={titleStyle}>@BBEAUTIANDLASHES</span>
              <span>on all social platforms</span>on all social platforms
              <br></br>
            <div style={hashtagStyle}>#BBeautiAndLashes #BBeautiAndLashes #BBeautiAndLashes</div> </div>
        <div style={containerStyle} >  
           <img style={imgStyle} src={img1} alt="eyelashes"></img>
           <img style={imgStyle} src={img2} alt="eyelashes"></img>
           <img style={imgStyle} src={img3} alt="eyelashes"></img>
           <img style={imgStyle} src={img4} alt="eyelashes"></img>
           </div>
        </div>
        );
    }
}

export default App;