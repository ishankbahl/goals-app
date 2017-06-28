import React,{Component} from "react";
import {connect} from "react-redux";
import {completedGoalsRef,goalRef} from "../firebase";

class GoalItem extends Component{
  constructor(){
    super();
    this.completeGoal=this.completeGoal.bind(this);
  }

  completeGoal(){
    const {email}=this.props.user;
    const {title,serverKey}=this.props.goal;
    goalRef.child(serverKey).remove();
    completedGoalsRef.push({email,title});
  }

  render(){
    const {email,title}=this.props.goal;
    return(
      <div style={{margin:"5px"}}>
        <strong>{title}</strong>
        <span> submitted by <em> {email} </em></span>
        <button className="btn btm-sm btn-primary" type="button" onClick={this.completeGoal}>Complete</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  const { user }=state;
  return {
    user
  };
}

export default connect(mapStateToProps,null)(GoalItem);
