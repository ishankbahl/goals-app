import React,{Component} from "react";
import {connect} from "react-redux";
import {goalRef} from "../firebase";

class AddGoal extends Component{
  constructor(){
    super();
    this.state={
      title:""
    }
    this.addGoal=this.addGoal.bind(this);
  }

  addGoal(){
    const {title}=this.state;
    const {email}=this.props.user;
    goalRef.push({title,email});
  }

  render(){
    return(
      <div className="form-inline">
        <div className="form-group">
          <input
            style={{marginRight:"5px"}}
            className="form-control"
            type="text"
            placeholder="Add a Goal"
            onChange={(event)=>this.setState({title:event.target.value})}
          />
          <button className="btn btn-success" onClick={this.addGoal} type="button" >Submit</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {user}=state;
  return {
    user
  }
}

export default connect(mapStateToProps,null)(AddGoal);
