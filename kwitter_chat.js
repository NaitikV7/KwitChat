
//ADD YOUR FIREBASE LINKS HERE


var firebaseConfig = {
      apiKey: "AIzaSyCnXS8Fn8Y7WaMXSbAacvF8R-38kwFqq2M",
      authDomain: "kwitter-webapp---project.firebaseapp.com",
      databaseURL: "https://kwitter-webapp---project-default-rtdb.firebaseio.com",
      projectId: "kwitter-webapp---project",
      storageBucket: "kwitter-webapp---project.appspot.com",
      messagingSenderId: "624110386371",
      appId: "1:624110386371:web:c1c560a12882f41e0e7676"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    document.getElementById("user_name").innerHTML="Welcome" + user_name + "!"

  function addRoom()
  {
      room_name =document.getElementById("room_name").value;
  
      firebaseConfig.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
  
      window.location ="kwitter_login.html";
  };
  function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
  console.log("Room Name - " + Room_names);
      row -"<div class='room_name'  id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
  //End code
  });});}
  getData();
  function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location ="kwitter_login.html";
}


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="kwitter_login.html"
}

    
