import React,{Component} from "react";
import {firebaseApp} from "../firebase";
import {Link} from "react-router";

class SignUp extends Component{
  constructor(){
      super();
      this.state={
        email:"",
        password:"",
        error:{
          message:""
        }
      }
      this.signUp=this.signUp.bind(this);
  }

  signUp(){
    const {email,password}=this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email,password)
      .catch(error=>{
        this.setState({error});
      });
  }

  render(){
    return(
      <div className="form-inline" style={{margin:"5%"}} >
        <h2>Sign Up</h2>
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
            className="btn btn-primary"
            type="button"
            onClick={this.signUp}
          >
            Sign Up
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={"/signin"} >Already a User? Instead Sign In</Link></div>
      </div>
    );
  }
}

export default SignUp;
