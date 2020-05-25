var firebaseConfig = {
    apiKey: "AIzaSyC0aXdmCvhIxy8mTeZacqv31HrJwOPzjHc",
    authDomain: "anonymous-1eb60.firebaseapp.com",
    databaseURL: "https://anonymous-1eb60.firebaseio.com",
    projectId: "anonymous-1eb60",
    storageBucket: "anonymous-1eb60.appspot.com",
    messagingSenderId: "810419476916",
    appId: "1:810419476916:web:f7d6c0b02f9d4ed07fbae1",
    measurementId: "G-HCDX2YK90M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  $('#btn-signup').click(function(){
    var userName = $("#signupname").val();
    var email = $('#signupemail').val();
    var password = $('#signuppass').val();




        if(email != "" && password != ""){
        var result = firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
            var rootRef = firebase.database().ref().child("Users");
            var userID = firebase.auth().currentUser.uid;
            var usersRef = rootRef.child(userID);
            

            var userData= {
                "UserName" : userName
            };
            JSON.parse( JSON.stringify(userData ) );

            usersRef.set(userData, function(error){
                if(error){
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                }
            });
        });

        result.catch(function(error){
            console.log(error)
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            window.alert("Message : "+ errorMessage);
        });

    }else{
        window.alert("Please fill all fields.");
    } 
});


  $('#btn-signin').click(function(){
    var email = $('#signinemail').val();
    var password = $('#signinpass').val();

    if(email != "" && password != ""){
      var result = firebase.auth().signInWithEmailAndPassword(email, password);


      result.catch(function(error){
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          window.alert("Message : "+ errorMessage);
      });

    }else{
        window.alert("Please fill all fields.");
    }

    firebase.auth().onAuthStateChanged(function(user){
        if(user)
        {
            window.location.href = "home";
        }
    });
});


$('#btn-logout').click(function(){
    firebase.auth().signOut().then(function() {
        window.location.href = "index.html";
      }, function(error) {
        // An error happened.
      });
});







