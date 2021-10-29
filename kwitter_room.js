
const firebaseConfig = {
      apiKey: "AIzaSyCR9F6moQLIvc7NbRtlGerc8ByIXISauJs",
      authDomain: "kwitter-1a982.firebaseapp.com",
      databaseURL: "https://kwitter-1a982-default-rtdb.firebaseio.com",
      projectId: "kwitter-1a982",
      storageBucket: "kwitter-1a982.appspot.com",
      messagingSenderId: "947075485719",
      appId: "1:947075485719:web:54964ba41bf8bbb00b0c52",
      measurementId: "G-2LCXKSMT4D"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "add room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room Name -"+ Room_names)
      row ="<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
   });});}
getData();

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name",name);
      window.location ="page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}

