import React, {Component} from 'react';
import '../App.css';
import PB from '../images/logo.png';

const txtStyle = {
   textAlign: 'center',
   lineHeight: '1.6',
   fontSize: 'x-large'
  };

  const txtStyle2 = {
    textAlign: 'center',
    lineHeight: '1.6'
   };
  
const titleStyle={
    color: '#BBA319',
    textAlign: 'center'
  
}

const containerStyle={
    backgroundColor: 'black',
    color: 'white',
    padding: '20px'
}

class App extends Component {
  
    constructor(props){
        super(props);
        this.state = {
          
        };
    }
  
  render(){
 
     return (
        <div class="Sec2">
           <div style={containerStyle}>
           <section>
           
           <img src={PB} alt="" id="logo-img"></img>
           </section>
           <article>
           <h2 style={titleStyle}><i>Mission Statement</i></h2>
           <p style={txtStyle}>Wake up a GORGEOUS Doll!</p> 
           <p style={txtStyle2}>Eyelash Extensions and Eyelash Strips are the perfect enhancement for all Queens 
           that love to wake up with GOREGEOUS luxury eyelashes that POP. Whether you're a busy career woman, a
            trendy socialite, an ambitious student, or a super multi-tasking mom on the go, eyelash extensions 
            and eyelash strips are the perfect "go-to", to give you a GORGEOUS set of eyes that will surely make
             a statement! Prisca "Bre" Barnes (Master Lash Artist), can create a lash look that fits any lifestyle or preference.
            Prisca "Bre" Barnes is a Licensed Eyelash Extension Mobile Artist based in Houston, Texas. The artistry of lashing
            is phenomenal! The technique involves attaching a synthetic, silk or mink eyelash extension to an individual natural eyelash
            on the client, with the result of longer, darker and more lavish lashes.</p>
            </article>
        </div>
        </div>
        );
    }
}

export default App;