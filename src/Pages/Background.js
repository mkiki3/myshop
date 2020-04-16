import React, {Component} from 'react';
/*import img1 from '../images/e1.jpg';
import img2 from '../images/e2.jpg';
import img3 from '../images/e3.jpg';
import img4 from '../images/e4.jpg';
import img5 from '../images/e2.jpg';
import img6 from '../images/e3.jpg';
*/
const imgStyle = {
    width: '100%',
    height: '100%'
   };

class App extends Component {
  
    
    constructor(props){
        super(props);
        this.state = {  
           pictures: []
        };
    }


    componentDidMount(){
        fetch('https://randomuser.me/api/?results=500').then(results =>{
            return results.json();
        }).then(data =>{
            let pictures = data.results.map((pic) =>{
                return(
                    <div key={pic.results}>
                        <img src={pic.picture.medium} />
                    </div>
                )
            })
            this.setState({pictures: pictures});
            console.log("state", this.state.pictures);
        })
    }

  render(){
 
     return (
        <div className="container2">
            <div className="container1">     
                {this.state.pictures}
            </div> 
        </div>
        );
    }
}


export default App;