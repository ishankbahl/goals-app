import {SIGNED_IN,SET_GOALS,SET_COMPLETE} from "../constants";

export function logUser(email){
  const action={
    type:SIGNED_IN,
    email
  }
  return action;
}

export function setGoals(goals){
  const action={
    type:SET_GOALS,
    goals
  }
  return action;
}

export function setComplete(completedGoals){
  const action={
    type:SET_COMPLETE,
    completedGoals
  }
  return action;
}
