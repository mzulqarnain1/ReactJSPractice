import React, {Component} from 'react';
import './app.css'
import Login from './login'
import SignUp from './signup'

class NavBar extends React.Component {
    render() {
        return (
            <ul>
                <li><a onClick="#">Home</a></li>
                <li><a onClick={this.props.onClickLogin}>Login</a></li>
                <li><a onClick={this.props.onClickSignUp}>Sign Up</a></li>
            </ul>
        )
    }
}

class UI extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showLogin: true,
            showSignUp: false,
            showContact: false,
        };
        this.loginShow = this.loginShow.bind(this);
        this.SignUpShow = this.SignUpShow.bind(this);
    }
    loginShow(){
        this.setState({showLogin: true, showSignUp: false});
    }
    SignUpShow(){
        this.setState({showSignUp: true, showLogin: false});
    }
    render() {
        let login = "";
        let signup = "";

        if(this.state.showLogin){
            login = (
                <Login submit='#'/>
            )
        }
        if(this.state.showSignUp){
            signup = (
                <SignUp/>
            )
        }
        return (
            <div>
                <NavBar onClickLogin={this.loginShow} onClickSignUp={this.SignUpShow}/>
                <br/><br/><br/><br/><br/>
                {login}
                {signup}
            </div>
        )
    }
}
export default UI;
