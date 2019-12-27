import React, {Component} from 'react';
import '../App.css';
//Arnoldboecklin, fantasy
/**
 * Impact, fantasy;
Arnoldboecklin, fantasy;
Oldtown, fantasy;
Blippo, fantasy;
Brushstroke, fantasy;
fantasy;
 */

const titleStyle={
    fontFamily: 'belinda',
    fontSize:' 55px',
    textAlign:'center',
    margin: '0px'
}

const titleStyle2={
    fontFamily: 'lulo-clean-w01-one-bold,sans-serif',
    color: 'pink',
    fontSize:' 50px',
    textAlign:'center',
    margin: '0px'
}

const titleStyle3={
    fontSize:' 13px',
    textAlign:'center',
    margin: '0px',
    marginBottom: '8px'
}

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
        <div style={bStyle}  className="BookContainer">
          <div className="book-wrapper">
            <h2 style={titleStyle}>Pre-Booking</h2>
            <h2 style={titleStyle2}>INFORMATION</h2>
            <p style={titleStyle3}>*PLEASE READ BEFORE BOOKING*</p>
            <div className="appt">
                <ul>
                    <li><span>" A DEPOSIT IS <b>REQUIRED</b> TO BOOK YOUR APPOINTMENT. (your deposit goes towards your service.)"</span></li>
                    <li><span><b>24hr cancellation notice required.</b> All cancellations made 24hrs (or less) will forfeit original deposit.
                    (See confirmation email for in depth cancellation, re-scheduling, no-show policy)</span></li>
                    <li><span>Please arrive no more than <b>5 minutes</b> early for your appointment.</span></li>
                    <li><span>Arrive to your appointment <b>MAKE-UP FREE.</b> Time spent cleaning your lashes takes away from your total lash time & may be subject to an additional fee.</span></li>
                    <li><span>Limit additional guests. Please no small children/infants.</span></li>
                    <li><span>Download the <b>(Orange)</b> Genbook app to manage your upcoming appointment, & also view your past appointment history.</span></li>
                    <li><span>Read your <b>confirmation e-mail </b>for pre-appointment prep & contact/location information.</span></li>
                    <li><span>Come to your appointment ready to <b>RELAX</b> & wake up with <b>GORGEOUS</b> lashes</span></li>
                </ul>
                <button className="appt-btn"><a href="https://www.styleseat.com/m/v/priscabreshaybarnes"><b>CLICK HERE TO BOOK</b></a></button>
              </div>
              
              </div> 
       
        </div>
        );
    }
}

export default App;