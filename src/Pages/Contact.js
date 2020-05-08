import React, { Component } from 'react';
import '../App.css';
//test

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const listStyle = {
    color: 'white'
}

const addresStyle = {
    color: 'grey'
}
const contactStyle = {
    color: 'rgb(187, 163, 25)'
}
const buttonStyle = {
    backgroundColor: 'grey',
    fontSize: 'large',
    width: '25%',
    margin: 'auto',
    marginTop: '5%'
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            msg: '',
            formValues: {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                msg: '',
            }
        };

    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted! ');
        console.log(this.state.firstname + '' + this.state.lastname + '' + this.state.email + '' + this.state.phone + '' + this.state.msg);
    };

    handleChange = (event) => {
        //event.target.value
        //the value of the input field
        //let inputValues = {...this.state}

        let formValues = this.state.formValues;
        const { name, value } = event.target;
        switch (name) {

            case "firstname":
                formValues.firstName =
                    value.length < 3 ? "minimum 4 characters required" : "";
                break;
            case "lastname":
                formValues.lastName =
                    value.length < 3 ? "minimum 3 characters required" : "";
                break;
            case "email":
                formValues.email = emailRegex.test(value) ?
                    "" :
                    "invalid email address";
                break;
            case "phone":
                formValues.phone =
                    value.length < 10 ? "minimum 10 numbers required" : "";
                break;
            case "msg":
                formValues.msg =
                    value.length < 3 ? "minimum 3 characters required" : "";
                break;
            default:
                break;
        }

        //setstate(is asynchronous) doesn't immediately mutate this.state..accessing this.state after calling 
        //this method can potentially return the existing value
        //the second parameter is the callback parameter to guarantee it
        this.setState({ formValues, [name]: value }, () => console.log(this.state));

    };


    render() {
        // const {formValues} = this.state;
        return ( <
            div className = "ContactContainer" >

            <
            div className = "contactForm" >

            <
            div className = "left-contactform" >
            <
            ul className = "list" >
            <
            li className = "x" >
            <
            b style = { listStyle } > Adresss < /b> <
            br > < /br> <
            span style = { addresStyle } > Hair Center 9 th floor, 3618 Elm St. < /span> <
            span style = { addresStyle } > Houston, TX 77026 US < /span> < /
            li > <
            li className = "y" >
            <
            b style = { listStyle } > Lets Talk < /b> <
            br > < /br> <
            span style = { contactStyle } > +1 800 1236879 < /span> < /
            li > <
            li className = "z" >
            <
            b style = { listStyle } > General Support < /b> <
            br > < /br> <
            span style = { contactStyle } > contact @example.com < /span> < /
            li > <
            /ul> < /
            div >



            <
            div className = "right-contactform" >
            <
            div className = "module" >
            <
            span className = "label" > TELL US YOUR NAME * < /span> <
            div className = "inputfield-names" >
            <
            input className = "names"
            placeholder = "First name"
            name = "firstname"
            type = "text"
            onChange = { this.handleChange } >
            <
            /input>

            <
            input className = "names"
            placeholder = "Last name"
            name = "lastname"
            type = "text"
            onChange = { this.handleChange } >
            <
            /input> < /
            div >

            <
            /div>

            <
            div className = "module" >
            <
            span className = "label" > ENTER YOUR EMAIL * < /span> <
            input className = "inputfield"
            placeholder = "Eg.example@email.com"
            name = "email"
            type = "email"
            onChange = { this.handleChange } >
            <
            /input> < /
            div >

            <
            div className = "module" >
            <
            span className = "label" > ENTER PHONE NUMBER < /span> <
            input className = "inputfield"
            placeholder = "Eg.+1 800 000000"
            name = "phone"
            type = "phone"
            onChange = { this.handleChange } >
            <
            /input> < /
            div >

            <
            div className = "module" >
            <
            span className = "label" > MESSAGE * < /span> <
            textarea className = "msg"
            placeholder = "Write us a message"
            name = "msg"
            type = "text"
            onChange = { this.handleChange } >

            <
            /textarea> < /
            div >

            <
            button style = { buttonStyle }
            onClick = { this.onSubmit } > Submit < /button> < /
            div > <
            /div>


            <
            /div>
        );
    }
}

export default App;