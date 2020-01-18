import React, {Component} from 'react';
import '../App.css';
import BL from '../images/bbal.PNG';
import {Link} from 'react-router-dom';

const listStyle={
    textDecoration: 'none',
    justifyContent: 'space-between'
}
/*
the syle looks out of place
const cursiveStlye={
    textDecoration: 'none',
    justifyContent: 'space-between',
    fontFamily: 'cursive'
}
*/


class App extends Component {
  
    constructor(props){
        super(props);
        this.state = {  
        };
    }
//add shop link
// Frequently ask question FAQ in cursive
///change hashtag to cursive
//foll all social platform reg font
//font can be black or white
//keep link gold wgen on current pg
  render(){
 
     return (
       
        <div> 
        <div className="NavPreContainer"> 
             <img src={BL} alt="" id="logo-pic"></img>
        </div>
        <div className="NavContainer">
            <ul className="nav-links">
                <Link className="L" style={listStyle} to="/"><li >HOME</li></Link>
                <Link className="L" style={listStyle} to="/FAQ"><li >FAQ</li></Link>
                <Link className="L" style={listStyle} to="/Gallery"><li >GALLERY</li></Link>
                <Link className="L" style={listStyle} to="/BookNow"><li>SERVICES</li></Link>
                <Link className="L" style={listStyle} to="/Shop"><li >SHOP</li></Link>
                <Link className="L" style={listStyle} to="/Contact"><li >CONTACT</li></Link>             
            </ul>
        
        </div>
        </div>
        );
    }
}

export default App;

/**
 *            <Link className="L" style={listStyle} to="/"><li >HOME</li></Link>
                <Link className="L" style={listStyle} to="/FAQ"><li >FAQ</li></Link>
                <Link className="L" style={listStyle} to="/Gallery"><li >GALLERY</li></Link>
                <Link className="L" style={listStyle} to="/BookNow"><li>SERVICES</li></Link>
                <Link className="L" style={listStyle} to="/Shop"><li >SHOP</li></Link>
                <Link className="L" style={listStyle} to="/Contact"><li >CONTACT</li></Link>   
 */