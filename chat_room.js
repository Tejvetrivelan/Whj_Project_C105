const firebaseConfig = {
    apiKey: "AIzaSyASoVHF7h6_kfv7Eu4Nt-PBZgyRZQmWpfw",
    authDomain: "c100-let-s-chat-app.firebaseapp.com",
    databaseURL: "https://c100-let-s-chat-app-default-rtdb.firebaseio.com",
    projectId: "c100-let-s-chat-app",
    storageBucket: "c100-let-s-chat-app.appspot.com",
    messagingSenderId: "549419092129",
    appId: "1:549419092129:web:30c12f5458a34872bb48e0",
    measurementId: "G-JLY0QRH1E4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });


      localStorage.setItem("room_name", room_name);


      window.location = "chat_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "chat_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
       window.location = "index.html";
}