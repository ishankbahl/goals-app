import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBXozZcmlqT7iW1gyZGDmg0khcsM1VQL-o",
  authDomain: "goals-app-a983a.firebaseapp.com",
  databaseURL: "https://goals-app-a983a.firebaseio.com",
  projectId: "goals-app-a983a",
  storageBucket: "",
  messagingSenderId: "22171748253"
};

export const firebaseApp=firebase.initializeApp(config);
export const goalRef=firebase.database().ref("goals");
export const completedGoalsRef=firebase.database().ref("completed-goals");
