import {SET_COMPLETE} from "../constants";

export default (state=[],action)=>{
  switch(action.type){
    case SET_COMPLETE:
      const {completedGoals}=action;
      return completedGoals;
    default:
      return state;
  }
}
