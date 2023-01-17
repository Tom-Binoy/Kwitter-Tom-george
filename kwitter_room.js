
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
  apiKey: "AIzaSyADZYutZfRsddi0o53Wz0iB5LOonbCRxiI",
    authDomain: "kwitter-eceef.firebaseapp.com",
    databaseURL: "https://kwitter-eceef-default-rtdb.firebaseio.com",
    projectId: "kwitter-eceef",
    storageBucket: "kwitter-eceef.appspot.com",
    messagingSenderId: "364326429302",
    appId: "1:364326429302:web:ccec88e1d2c5d519cdf557"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  user = localStorage.getItem("user");
  document.getElementById("wel").innerHTML = "Welcome "+user+" !";

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) 
      {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot){
       childKey  = childSnapshot.key;
       Room_names = childKey;
       //Start code

console.log(Room_names);
row = "<div class='room_name' id='"+Room_names+"' onclick='to_room(this.id)' >#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData(); 

function add_room(){
  room = document.getElementById("room").value;
  console.log("add : "+room)
  firebase.database().ref("/").child(room).update({
    purpose : "Creating room"
  });
localStorage.setItem("room",room);
window.location = "kwitter_page.html";
}

function to_room(rn){
  localStorage.setItem("room",rn);
  window.location = "kwitter_page.html";  
}

function logout(){
  localStorage.removeItem("user");
  localStorage.removeItem("room");
  window.location = "index.html";
}