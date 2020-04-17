import React, {Component} from 'react';

const titleStyle = {
    textAlign: 'center',
    margin: '0px',
    fontFamily: 'lulo-clean-w01-one-bold,sans-serif',
    color: 'white',
    letterSpacing:'12px'
}
const titleStyle2 = {
    textAlign: 'center',
    margin: '0px',
    fontFamily: 'cursive',
    color: 'black'
}
const colorStyle ={
 color: 'white'
}


class App extends Component {
  
    constructor(props){
        super(props);
        this.state = {  
         email: " ",
         name: "",
         field: ""
        };
    }

  render(){
 
     return (
        <div className="FAQContainer">
              <div className="FAQ-wrapper"> <h1 style={titleStyle}>EYELASH EXTENSIONS</h1><h1 style={titleStyle2}>  MYTH vs FACT</h1>
                <ol style={colorStyle}>
                <li><span><b>MYTH: </b></span>
                <br></br>
                <span>You can't wash your eyes while wearing lash extensions...</span>
                <br></br>
                <span><b>FACT:!!!!! </b></span>
                <br></br>
                <span>Not only can you wash your lashes, but it is RECOMMENDED! You want to clean your 
                    lashes DAILY. Cleaning your lashes will remove any unwanted dirt, debris, make-up 
                    residue, etc. Cleaning your lashes will also prevent you from getting infections
                     (i.e: Blepharitis, lash mites, etc.) Clean lashes also = BETTER RETENTION! Who wouldn't
                      want longer, lasting lashes?! To better cleanse your lashes, Gorgeous Doll Lashes Foaming 
                      Lash Cleanser is highly recommended, for daily use.</span>
                </li>
                <br></br>
                <li>
                <span><b>MYTH: </b></span>
                <br></br>
                <span>Eyelash Extensions damage your natural lashes.</span>
                <br></br>
                <span><b>FACT: </b></span>
                <br></br>
                <span>When applied CORRECTLY (i.e.: 1:1 ratio or 1 false lash extension per 1 single,
                     isolated natural lash) they should NOT cause any damage to your natural lashes.</span>
                </li>
                <br></br>
                <li>
                <span><b>MYTH: </b></span>
                <br></br>
                <span>Eyelash Extensions damage your natural lashes.</span>
                <br></br>
                <span><b>FACT: </b></span>
                <br></br>
                <span>When applied CORRECTLY (i.e.: 1:1 ratio or 1 false lash extension per 1 single,
                     isolated natural lash) they should NOT cause any damage to your natural lashes.</span>
                </li>
                <br></br>
                <li>
                <span><b>MYTH: </b></span>
                <br></br>
                <span>Eyelash extensions are painful.</span>
                <br></br>
                <span><b>FACT: </b></span>
                <br></br>
                <span>With proper isolation & lash placement lash extensions are pain free.</span>
                </li>
                <br></br>
                <li>
                <span><b>MYTH: </b></span>
                <br></br>
                <span>Any person that is TRAINED/CERTIFIED to do lash extensions is qualified to do them.</span>
                <br></br>
                <span><b>FACT: </b></span>
                <br></br>
                <span>Lash extensions is a PROFESSIONAL service, & should only be performed by a LICENSED 
                    cosmetologist/esthetician, or the technician must have a specialty license in lash
                     extensions. </span>
                </li>
                <br></br>
                <li>
                <span><b>MYTH: </b></span>
                <br></br>
                <span>You can get LONG lengths, regardless of the condition of your natural lashes.</span>
                <br></br>
                <span><b>FACT: </b></span>
                <br></br>
                <span>The health & safety of your natural lashes is the MOST important. Only lengths that your
                     natural lash can healthily support will be used. If you desire a FULLER look, a VOLUME
                      SET is recommended. Please ask Whitney Shardae (Master Lash Stylist), at the time of
                       your appointment
                </span>
                </li>
                <br></br>
                <li>
                <span><b>MYTH: </b></span>
                <span>A full set of eyelash extensions will last a full 6 weeks without a refill.</span>
                <br></br>
                <span><b>FACT: </b></span>
                <span>Our natural lashes shed approx. 2-5 lashes daily (on average about 3 lashes per day, 21
                     lashes per week), so most clients will need a refill every 2-3 weeks to keep your lashes
                      GORGEOUS & FULL. Your lifestyle plays a BIG part of your lash retention. If you have an active 
                    lifestyle (work-out, swim, use sauna, sweat, etc), wear make-up daily, or if you are a wild 
                    sleeper, you might loose more lashes than say a client whose lifestyle is different. 
                    (50% of lashes must be maintained for a refill service. Refills can be booked weekly up
                     to 4 weeks. A fresh FULL SET service must be booked after 4 weeks.) </span>
                </li>
                </ol> 
              </div>
             
        </div>
        );
    }
}

export default App;