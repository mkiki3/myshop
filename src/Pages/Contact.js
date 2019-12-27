import React, {Component} from 'react';
import '../App.css';
import EL from '../images/eyel.PNG';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

const inputStyle ={
    border: '0',
    outline: '0',
    background: 'transparent',
    borderBottom: '1px solid gold',
}

class App extends Component {
  
    constructor(props){
        super(props);
        this.state = {  
            fullname: '',
            email: '',
            phone: '',
            msg: '',
 formValues: {
            fullname: '',
            email: '',
            phone: '',
            msg: '',
            }
        };
    
    }

    onsubmit = (event) => {
        event.preventDefault();
        console.log('Submitted! ');
       console.log(this.state.fullname + '' + this.state.email + ''+ this.state.phone + ''+ this.state.msg);
    };

      handleChange = (event) => {
          //event.target.value
          //the value of the input field
          //let inputValues = {...this.state}
          
          let formValues = this.state.formValues;
          const {name,value} = event.target;
          switch(name){

            case "fullname":
                formValues.firstName =
                  value.length < 3 ? "minimum 3 characters required" : "";
                break;
            case "email":
                formValues.email = emailRegex.test(value)
                  ? ""
                  : "invalid email address";
                break;
            case "phone":
                formValues.password =
                  value.length < 10 ? "minimum 10 numbers required" : "";
                break;
            case "msg":
                formValues.lastName =
                  value.length < 3 ? "minimum 3 characters required" : "";
                break;
            default:
                break;
          }
          
        //setstate(is asynchronous) doesn't immediately mutate this.state..accessing this.state after calling 
        //this method can potentially return the existing value
        //the second parameter is the callback parameter to guarantee it
        this.setState({ formValues,[name]: value}, () => console.log(this.state) );
     
    };

        
  render(){
   // const {formValues} = this.state;
     return (
        <div className="ContactContainer">
            <div className="EL"> <img src={EL} alt="eyelashes"></img></div> 
            <div className="contactform">
                <label className="inputform-label"> Full Name:
                    <input 
                    className="inputform" 
                    style={inputStyle}
                    name="fullname"
                    type="text"
                    onChange={this.handleChange}>    
                    </input>
                </label>
                <label className="inputform-label"> Email:
                    <input 
                    className="inputform" 
                    style={inputStyle}
                    name="email"
                    type="email"
                    onChange={this.handleChange}
                    ></input>
                </label>

                <label className="inputform-label"> Phone:
                    <input 
                    className="inputform" 
                    style={inputStyle} 
                    name="phone"
                    type="phone"
                    onChange={this.handleChange}
                    ></input>
                </label>
                <label className="inputform-label"> Message:
                    <input 
                    className="inputform" 
                    style={inputStyle}
                    name="msg" 
                    type="text"
                    onChange={this.handleChange}
                    ></input>
                </label>
                
                <button onClick={this.onsubmit}> Submit</button>
            </div>
            
        </div>
        );
    }
}

export default App;