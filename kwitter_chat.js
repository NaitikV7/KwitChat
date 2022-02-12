//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDLXK28ZHkM_ZUnFLfTbEG55lgUHuGyBq8",
    authDomain: "kwitchat.firebaseapp.com",
    projectId: "kwitchat",
    storageBucket: "kwitchat.appspot.com",
    messagingSenderId: "305079848186",
    appId: "1:305079848186:web:7c9909dca6bf2affb2cd43",
    measurementId: "G-F9Y8BM597D"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
  
   //End code
   });});}
getData();