
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
room = localStorage.getItem("room");      

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room).push({
            Name : user ,
            Likes : 0 ,
            Message : msg
      });
      document.getElementById("msg").value ="";
}

function getData() { firebase.database().ref("/"+room).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      console.log(firebase_message_id);
      console.log(message_data);
         //Start code

sender = message_data['Name'];
likes = message_data['Likes'];
msg = message_data['Message'];

sender_name = '<h4>'+sender+'<img class="user_tick" src="tick.png"></h4>';
message = '<h3 class="message_h4">'+msg+'</h3>';
button_1 = '<button class="btn btn-warning" id="'+firebase_message_id+'" onclick="update_like(this.id)" value="'+likes+'">';
button_2 = '<span class="glyphicon glyphicon-thumbs-up">Like : '+likes+'</span></button><hr>';

row = sender_name+message+button_1+button_2;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function logout(){
   localStorage.removeItem("user");
   localStorage.removeItem("room");
 window.location = "index.html";
}

function update_like(msg_id){


      like = document.getElementById(msg_id).value;
      like = Number(like) + 1 ;
      console.log(msg_id);
      firebase.database().ref(room).child(msg_id).update({
            Likes :like
      });
}