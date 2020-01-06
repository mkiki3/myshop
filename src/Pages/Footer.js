import React, {Component} from 'react';
import '../App.css';
import Insta from '../images/instaicon.png'
import FB from '../images/fbicon.png'
import TW from '../images/twicon.png'

const imgStyle = {
  width: '3%',
 };

const inputStyle = {
    border: '0',
    background: 'transparent',
    borderBottom: '1px solid gold',
    width: '50%',
    fontSize: 'x-large'
 
};


 const buttonStyle = {
   textDecoration: 'none',
   width: '20%',
   marginTop: '-1%',
   };


class App extends Component {
  
    constructor(props){
        super(props);
        this.state = {  
          email: ''
      };
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
        <div className="footer">
          <h3 className="heading3">Join the BBeautiandlashes Mailing "BeauTEA" List</h3>
          
          <div className="email">
            <input 
                    className="inputform" 
                    placeholder="Enter your email here"
                    style={inputStyle} 
                    name="email"
                    type="email"
                    onChange={this.handleChange}
                    ></input>
          <button style={buttonStyle} onClick={this.onSubmit} className="sub">SUBSCRIBE</button>
          </div>
         
          <div className="icons">
          <a href="https://www.instagram.com"><img style={imgStyle} src={Insta} alt="insta"></img></a>
          <a href="https://www.facebook.com"><img style={imgStyle} src={FB} alt="fb"></img></a>
          <a href="https://www.twitter.com"><img style={imgStyle} src={TW} alt="twitter"></img></a>
          </div>
        </div>
        );
    }
}

export default App;

/**
 * a href="https://www.instagram.com"
 * a href="https://www.twitter.com"
 * a href="https://www.facebook.com" */