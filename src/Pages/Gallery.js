import React, {Component} from 'react';
import img1 from '../images/e1.jpg';
import img2 from '../images/e2.jpg';
import img3 from '../images/e3.jpg';
import img4 from '../images/e4.jpg';
import img5 from '../images/e2.jpg';
import img6 from '../images/e3.jpg';

const imgStyle = {
    width: '100%',
    height: '100%'
   };

class App extends Component {
  
    constructor(props){
        super(props);
        this.state = {  
           
        };
    }

  render(){
 
     return (
        <div className="GalleryContainer">
            <div className="ImGallery">
                <div className="row">
                    <img style={imgStyle} src={img1} alt="photo1"></img>
                    <span className="description">Description: Eyelashes $500</span>
                </div>

                <div className="row">
                    <img style={imgStyle} src={img2} alt="eyelashes"></img>
                    <span className="description">Description: Eyelashes $500</span>
                </div>
                
                <div className="row">
                    <img style={imgStyle} src={img3} alt="eyelashes"></img>
                    <span className="description">Description: Eyelashes $500</span>
                </div>

                <div className="row">
                    <img style={imgStyle} src={img4} alt="eyelashes"></img>
                    <span className="description">Description: Eyelashes $500</span>
                </div>

                <div className="row">
                    <img style={imgStyle} src={img5} alt="eyelashes"></img>
                    <span className="description">Description: Eyelashes $500</span>
                </div>

                <div className="row">
                    <img  style={imgStyle} src={img6} alt="eyelashes"></img>
                    <span className="description">Description: Eyelashes $500</span>
                    </div>
            </div>
            
        </div>
        );
    }
}

export default App;