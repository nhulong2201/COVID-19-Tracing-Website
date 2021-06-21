// ------------Log in start------------------

function submit_login_form(){
    //clear all error messages
     clearMessage();
     clearMessage2();
     clearMessage3();
    var info = {};
    info.username_or_email = document.getElementById("Vy_email_username").value;
    info.password = document.getElementById("Vy_password").value;
    if(info.username_or_email.length <1 || info.password.length <1){
        if(info.username_or_email.length <1){
            document.getElementById("login_fail_message2").style.display = "inline";
        }
        if(info.password.length < 1){
            document.getElementById("login_fail_message3").style.display = "inline";
        }
        return;
        //will come back and further implement it
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){

        if(this.readyState ==4 && this.status < 400){
            // console.log("done");
            console.log(this.response);
            window.location.href = JSON.parse(this.response).redirectPath;

        }else if(this.readyState ==4 && this.status == 401){
            // document.getElementById("login_fail_message").innerText = "Login failed: username/email and password don't match.";
            document.getElementById("login_fail_message").style.display = "block";
        }
    };

    xhttp.open("POST","/login",true);
    //set content type to JSON
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(info));
}


function clearMessage2(){
    clearMessage();
    document.getElementById("login_fail_message2").style.display="none";

}
function clearMessage3(){
    clearMessage();
    document.getElementById("login_fail_message3").style.display="none";

}

function clearMessage(){
    document.getElementById("login_fail_message").style.display = "none";
}



//-------------log in finish-----------------



//-------------log out start-----------------
function log_out(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // var auth2 = gapi.auth2.getAuthInstance();
        // auth2.signOut().then(function () {
        //   console.log('User signed out.');
        // });
        window.location.href="/index.html";
    }
  };
  xhttp.open("POST", "/logout", true);
  xhttp.send();

}
//-------------log out finish----------------





// for GOOGLE log in
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    // Prepare to send the TOKEN to the server for validation
    var id_token = { token: googleUser.getAuthResponse().id_token };

    // Create AJAX Request
    var xmlhttp = new XMLHttpRequest();

    // Define function to run on response
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.response);
            window.location.href = JSON.parse(this.response).redirectPath;
        } else if (this.readyState == 4 && this.status >= 400) {
            alert("Login failed");
        }
    };

    // Open connection to server & send the token using a POST request
    xmlhttp.open("POST", "/login", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(id_token));
}



// //for GOOGLE sign out put in html if needed

//   function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       console.log('User signed out.');
//     });
//   }
function signOut() {
    // debugger
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      window.location.href="/index.html";
    });
  }
function logout(){

    // Create AJAX Request
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data=JSON.parse(this.responseText);
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
            console.log(data);
            if (data ==="true" || data) {
                console.log("google logout implemented");
                signOut();
            } else {
                console.log("something else");
                window.location.href="/index.html";
            }

        }
    };

    // Open connection to server & send the post data using a POST request
    // We will cover POST requests in more detail in week 8
    xmlhttp.open("POST", "/logout", true);
    xmlhttp.send();

}


// Admin sign up ----------------------
function adminSignup(){

    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let id = document.getElementById("id").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let rp = document.getElementById('rep_password').value;

    if(password.length < 8 ){
        window.alert("Password needs to have at least 8 charactors.");
        return;
    }
    if(password !== rp){
        window.alert("Password doesn't match.");
        return;
    }

    let info = {};
    info.first_name = first_name;
    info.last_name = last_name;
    info.id = id;
    info.email = email;
    info.phone = phone;
    info.password = password;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){

        if(this.readyState ==4 && this.status == 200){
            document.getElementsByTagName('BODY')[0].innerHTML = `<h1>New admin successfully added!</h1>
                    <button onclick="location.href = '/dashboard_admin.html';">go back to dashboard</button>`;

        }else if(this.readyState ==4 && this.status == 500){
            window.alert('Sign-up failed: id/email already exists.');
        }
        // console.log("done");
    };

    xhttp.open("POST","/admin/signup",true);
    //set content type to JSON
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(info));



}

// ----------Admin sign up finish---------
