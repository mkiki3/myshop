import React, {Component} from 'react';
import '../App.css';
import S1 from './Section1';
import S2 from './Section2';
import S3 from './Section3';


const inputStyle ={
  fontSize: 'x-large'
}

const buttonStyle = {
    color: 'white',
    fontFamily: 'Arial',
    backgroundColor: 'transparent',
    fontSize:'28px',
    width: '10%',
    border: 'none',
    marginLeft: '105%'
   
}

class App extends Component {
  
    constructor(props){
        super(props);
        this.state = {  
            popUp: true,
            email: ''
        };
    }

    
     closeWindow = () => {
       
        const{popUp} = {...this.state};
        console.log("button pressed");
       
        if(popUp === true){
            var newsletter = document.getElementsByClassName('mod1')[0];
            newsletter.style.display = 'none';
            this.setState({ popUp: !this.state.popUp}, () => console.log(this.state)) 
            console.log('popup: ',popUp);
        }
     
      }

      handleChange = (event) => {
       
        const {value} = event.target;
        const{email} = {...this.state};
        this.setState({ email: value}, () => console.log(this.state) );
        console.log(email);
      };

      onSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted! ');
       console.log( 'email: ' +this.state.email );
    };


  render(){
 
     return (
        <div>  
             <div className="mod1">
                <button  style={buttonStyle} className="gal-btn" onClick={this.closeWindow}> X </button>
                <h1>ENJOY 10% OFF</h1>
                <p>Take 10% off your first Full Classic Set appointment OR your
                     first purchase of BeauTEA eyelash collection and be the first
                      to know about our latest product releases and offers
                     straight to your inbox.
                </p>
                
                <input 
                    className="inputform" 
                    placeholder="Enter your email here"
                    style={inputStyle} 
                    name="email"
                    type="email"
                    onChange={this.handleChange}
                    ></input>
                <button onClick={this.onSubmit}>SIGN UP</button>   
           </div>
        <S1/>
        <S2/>
        <S3/>
        </div>
        );
    }
}

export default App;