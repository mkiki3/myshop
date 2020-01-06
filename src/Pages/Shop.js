import React, {Component} from 'react';
//import { connect } from 'react-redux'
import Item1 from '../images/item1.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/item3.jpg'
import Item4 from '../images/item4.jpg'
import Item5 from '../images/item5.jpg'
import Item6 from '../images/item6.jpg'
import Addcart from '../images/addcart.png'

const posts = [
    {id: 1, title: 'Natural Eye', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',img:Item1,icon: Addcart},
    {id: 2, title: 'Open Eye', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',img: Item2,icon: Addcart},
    {id: 3, title: 'Cat Eye', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',img: Item3,icon: Addcart},
    {id: 4, title: 'Doll Eye', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',img:Item4,icon: Addcart},
    {id: 5, title: 'Squirell Eye', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',img:Item5,icon: Addcart},
    {id: 6, title: 'Classic Eyelashes', content: '.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!',img:Item6,icon: Addcart},
    {id: 7, title: 'Hybrid Eyelashes', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',img:Item2,icon: Addcart},
    {id: 8, title: 'Volume Eyelashes', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img:Item3,icon: Addcart},
    {id: 9, title: 'Regular Eyelashes', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',img:Item4,icon: Addcart}
  ];

  const imgStyle = {
    width: '100%',
    height: '100%',
    border: 'solid'
   };
 const iconStyle ={
    width: '10%',
    height: '10%',
    marginLeft: '90%',

 }
   const marginStyle = {
       marginBottom: '15%'
   }



  function Blog(props) {

    const onSubmit = (event) => {
        event.preventDefault();
        alert('added to the cart! ');
    };

    const content = props.posts.map((post) =>
      <div  key={post.id}>
         <img style={imgStyle} src={post.img} alt=""></img>
         <img onClick={onSubmit} style={iconStyle} src={post.icon} alt=""></img>
        <h4>{post.title}</h4>
        <p style={marginStyle}>{post.content}</p>
      </div>
    );
    return (
      <div >
        {content}
      </div>
    );
  }


class App extends Component {
  
    constructor(props){
        super(props);
        this.state = {  
   
        };   
    }

    
  
  render(){
 
     return (
        <div  className="ShopContainer">
            <div className="shopGallery">
               <Blog  posts={posts} />   
            </div>  
        </div>
        );
    }
}

export default App;