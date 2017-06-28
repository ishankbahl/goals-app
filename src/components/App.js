import React,{Component} from "react";
import {connect} from "react-redux";
import {firebaseApp} from "../firebase";
import AddGoal from "./AddGoal";
import GoalList from "./GoalList";
import CompletedGoalList from "./CompletedGoalList";

class App extends Component{
  constructor(){
    super();
    this.signOut=this.signOut.bind(this);
  }

  signOut(){
    firebaseApp.auth().signOut();
  }

  render(){
    return (
      <div style={{margin:"5px"}} >
      <h3>Goal Coach</h3>
      <hr />
      <AddGoal />
      <hr />
      <GoalList />
      <hr />
      <CompletedGoalList />
      <hr />
      <button className="btn btn-danger" onClick={this.signOut} >Sign Out</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {};
}

export default connect(mapStateToProps,null)(App);
