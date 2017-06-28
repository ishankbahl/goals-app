import React,{Component} from "react";
import {connect} from "react-redux";
import {completedGoalsRef} from "../firebase";
import {setComplete} from "../actions";

class CompletedGoalList extends Component{
  constructor(){
    super();
    this.clearCompletedGoals=this.clearCompletedGoals.bind(this);
  }

  clearCompletedGoals(){
    completedGoalsRef.set([]);
  }

  componentDidMount(){
    completedGoalsRef.on("value",(snap)=>{
      let completedGoals=[];
      snap.forEach((completedGoal)=>{
        const {email,title}=completedGoal.val();
        completedGoals.push({email,title});
      });
      this.props.setComplete(completedGoals);
    });
  }

  render(){
    return(
      <div>
        {this.props.completedGoals.map((completedGoal,index)=>{
          const {title,email}=completedGoal;
          return (
            <div key={index} style={{margin:"5px"}} >
              <strong> {title} </strong>
              <span> Completed by <em> {email} </em></span>
            </div>
          );
        })}
        <button className="btn btn-danger" onClick={this.clearCompletedGoals} >Clear All</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {completedGoals}=state;
  return {
    completedGoals
  };
}

export default connect(mapStateToProps,{setComplete})(CompletedGoalList);
