import React,{Component} from "react";
import {firebaseApp} from "../firebase";
import {Link} from "react-router";

class SignIn extends Component{
  constructor(){
    super();
    this.state={
      email:"",
      password:"",
      error:{
        message:""
      }
    };
    this.signIn=this.signIn.bind(this);
  }

  signIn(){
    const {email,password}=this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email,password)
      .catch((error)=>this.setState({error}));
  }

  render(){
    return (
      <div className="form-inline" style={{margin:"5%"}} >
        <h2>Sign In</h2>
        <div className="form-group">
          <input
            style={{marginRight:"5px"}}
            className="form-control"
            type="email"
            placeholder="email"
            onChange={(event)=>this.setState({email:event.target.value})}
          />
          <input
            style={{marginRight:"5px"}}
            className="form-control"
            type="password"
            placeholder="password"
            onChange={(event)=>this.setState({password:event.target.value})}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.signIn}
          >
            Sign In
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={"/signup"}>New User? Instead Sign Up</Link></div>
      </div>
    );
  }
}

export default SignIn;
