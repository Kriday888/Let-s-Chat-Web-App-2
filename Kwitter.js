var firebaseConfig = {
    apiKey: "AIzaSyDBpi1PRIX-oG0040u3vfEXf93Uahh9Dw4",
    authDomain: "let-s-chat-web-app-5b813.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-5b813-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-5b813",
    storageBucket: "let-s-chat-web-app-5b813.appspot.com",
    messagingSenderId: "841377945465",
    appId: "1:841377945465:web:cbdf7b234edbd063d741a8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}