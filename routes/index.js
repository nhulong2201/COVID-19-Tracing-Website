var express = require('express');
var router = express.Router();

var argon2i = require('argon2-ffi').argon2i;
var argon2 = require('argon2');
var crypto = require('crypto');

//-------------------------FOR GOOGLE ---------------------------

const CLIENT_ID= '195247369660-khs98ng8dducmrtrm2fqgilrha5nagp0.apps.googleusercontent.com';
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);

//------------------END FOR GOOGLE-----------------------------





//check for duplicates of username & email-----
router.post('/check_for_duplicates_email',function(req,res){
    if('email' in req.body ){
        req.pool.getConnection(function(err,connection){
            if(err){
                console.log(err);
                res.sendStatus(500);
                return;
            }
            //VY add for checking for existed email and username
            var query1= `SELECT * FROM(
            SELECT email FROM individual
            UNION
            SELECT email  FROM manager
            UNION
            SELECT   email FROM admin)  AS U
            WHERE email=?`;

            connection.query(query1,[req.body.email], function(err, rows, fields) {
                connection.release();
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                    return;
                }
                if(rows.length > 0){
                    //can't use DOM in a route!
                    // document.getElementById("Vy_manager_signup_fail2").style.display="block";
                    console.log("yes, there is duplicate");
                    res.sendStatus(500);//yes duplicates
                }else{
                    console.log("no duplicate");
                    res.sendStatus(200);//no duplicate
                }
            });
        });
    }else{
        console.log("failed to get data from client side")
        res.sendStatus(500);
    }

});

router.post('/check_for_duplicates_username',function(req,res){
    if('username' in req.body ){
        req.pool.getConnection(function(err,connection){
            if(err){
                console.log(err);
                res.sendStatus(500);
                return;
            }
            //VY add for checking for existed email and username
            var query1= `SELECT * FROM(
            SELECT username FROM individual
            UNION
            SELECT username  FROM manager
            UNION
            SELECT username FROM admin)  AS U
            WHERE username=?`;

            connection.query(query1,[req.body.username], function(err, rows, fields) {
                connection.release();
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                    return;
                }
                if(rows.length > 0){
                    //can't use DOM in a route!
                    // document.getElementById("Vy_manager_signup_fail2").style.display="block";
                    console.log("yes, there is duplicate");
                    res.sendStatus(500);//yes duplicates
                }else{
                    console.log("no duplicate");
                    res.sendStatus(200);//no duplicate
                }
            });
        });
    }else{
        console.log("failed to get data from client side")
        res.sendStatus(500);
    }

});


//user_signup
router.post('/user_signup',function(req,res){

    if(
        'first_name' in req.body &&
        'last_name' in req.body &&
        'username' in req.body &&
        'email' in req.body &&
        'phone' in req.body &&
        'password' in req.body&&
        'psw_repeat' in req.body&&
        'DOB'in req.body&&
        'address' in req.body){
        //   if(req.body.password !== req.body.psw_repeat){
        //       console.log("Password doesn't match.");
        //       res.sendStatus(400);
        //   }
        crypto.randomBytes(16,  async function(err,salt){
            if(err){
                console.log(err);
                res.sendStatus(500);
                return;
            }
            let hash = await argon2i.hash(req.body.password,salt);

            req.pool.getConnection(function(err,connection){
                if(err){
                    console.log(err);
                    res.sendStatus(500);
                    return;
                }
                 //VY add for checking for existed email and username
                var query1= `SELECT * FROM(
                SELECT indi_id, role,email,password_hash,username FROM individual
                UNION
                SELECT id, role, email,password_hash,username FROM manager
                UNION
                SELECT  username, role,email,password_hash, employeeID FROM admin)  AS U
                WHERE email=? OR username=?`;

                connection.query(query1,[req.body.username,req.body.email], function(err, rows, fields) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                        return;
                    }
                    if(rows.length > 0){
                        // document.getElementById("Vy_user_signup_fail2").style.display="block";
                        res.sendStatus(500);
                    }
                // });
                    // var qery=
                    // union
                    // row.length>0 {
                    //    display error message
                    // } else{dong tiep}
                    // else{
                        var query="INSERT INTO individual (first_name,last_name,email,password_hash,username,phone,role,DOB,address) VALUES (?,?,?,?,?,?,0,?,?);";
                        connection.query(query,[req.body.first_name, req.body.last_name, req.body.email, hash, req.body.username, req.body.phone, req.body.DOB, req.body.address],function(err,rows,fields){
                            connection.release();
                            if(err){
                                console.log(err);
                                res.sendStatus(500);
                                return;
                            }

                    //succuess -- redirect to log in page
                              res.sendStatus(200);
                        });
                    // }
            });

        });
    });
    }else{
        console.log("failed to get info from client side");
        res.sendStatus(500);
    }

});
// //5pm version
// router.post('/user_signup',function(req,res){

//     if(
//         'first_name' in req.body &&
//         'last_name' in req.body &&
//         'username' in req.body &&
//         'email' in req.body &&
//         'phone' in req.body &&
//         'password' in req.body&&
//         'psw_repeat' in req.body&&
//         'DOB'in req.body&&
//         'address' in req.body){

//         crypto.randomBytes(16, async function(err,salt){
//             if(err){
//                 console.log(err);
//                 res.sendStatus(500);
//                 return;
//             }
//             let hash = await argon2i.hash(req.body.password,salt);

//             req.pool.getConnection(function(err,connection){
//                 if(err){
//                     console.log(err);
//                     res.sendStatus(500);
//                     return;
//                 }

//         //         //  var query1=   `SELECT * FROM(
//         //         //                 SELECT indi_id, role,email,password_hash,username,phone FROM individual
//         //         //                 UNION
//         //         //                 SELECT id, role, email,password_hash,username,phone FROM manager
//         //         //                 UNION
//         //         //                 SELECT  username, role,email,password_hash, employeeID,phone FROM admin)  AS U
//         //         //                 WHERE email=? OR username=? or phone=?`;

//         //         //  connection.query(query1,[req.body.email,req.body.username,req.body.phone],  function(err, rows, fields) {
//         //         // // connection.release();
//         //         // if (err) {
//         //         //     console.log(err);
//         //         //     res.sendStatus(500);
//         //         //     return;
//         //         // }
//         //         // if(rows.length > 0){
//         //         //     //can't use DOM in a route!
//         //         //     //both lines of code under here not working -> try with line 531.532 covid.js
//         //         //     // window.alert('Sign-up failed: Email/username/phone number already exists.');
//         //         //     // document.getElementById("Vy_user_signup_fail2").style.display="block";
//         //         //     // console.log("yes, there is duplicate");
//         //         //     // res.send("duplicate");
//         //         //     // if(rows[0].email===req.body.email){

//         //         //     // }
//         //         //     res.sendStatus(502);
//         //         //     // res.sendStatus(420);//yes duplicates
//         //         // }
//         //         // else{
//         //         //     console.log("no duplicate");
//         //         //     res.sendStatus(200);//no duplicate
//         //         // }
//         //     });
//                         var query="INSERT INTO individual (first_name,last_name,email,password_hash,username,phone,role,DOB,address) VALUES (?,?,?,?,?,?,0,?,?);";
//                         connection.query(query,[req.body.first_name, req.body.last_name, req.body.email, hash, req.body.username, req.body.phone, req.body.DOB, req.body.address],function(err,rows,fields){
//                             connection.release();
//                             if(err){
//                                 console.log(err);
//                                 res.sendStatus(500);
//                                 return;
//                             }

//                     //succuess -- redirect to log in page
//                               res.sendStatus(200);

//                       });
//                 // }
//             });
//         });
//     // });
//     }else{
//         console.log("failed to get info from client side");
//         res.sendStatus(500);
//     }
// });
// //end 5pm



// // //new manager_signup
router.post('/manager_signup',function(req,res){

    if(
    'first_name' in req.body &&
    'last_name' in req.body &&
    'username' in req.body &&
    'email' in req.body &&
    'phone' in req.body &&
    'password' in req.body&&
    'psw_repeat' in req.body&&
    'DOB'in req.body&&
    'address' in req.body){
        // console.log(req.body.address);

            //check if the repeated password matches
            // if(req.body.password !== req.body.psw_repeat){
            // console.log("Password doesn't match.");
            // res.sendStatus(400);
            // }
            crypto.randomBytes(16, async function(err,salt){
                if(err){
                    console.log(err);
                    res.sendStatus(500);
                    return;
                }
                let hash = await argon2i.hash(req.body.password,salt);

                req.pool.getConnection(function(err,connection){
                if(err){
                    console.log(err);
                    res.sendStatus(500);
                    return;
                }
                var query1= `SELECT * FROM(
                SELECT indi_id, role,email,password_hash,username FROM individual
                UNION
                SELECT id, role, email,password_hash,username FROM manager
                UNION
                SELECT  username, role,email,password_hash, employeeID FROM admin)  AS U
                WHERE email=? OR username=?`;
                 connection.query(query1,[req.body.username,req.body.email], function(err, rows, fields) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                        return;
                    }
                    if(rows.length > 0){
                        // document.getElementById("Vy_manager_signup_fail2").style.display="block";
                        res.sendStatus(500);
                    }
                 var query="INSERT INTO manager (first_name,last_name,email,password_hash,username,phone,role,DOB,address) VALUES (?,?,?,?,?,?,1,?,?);";
                connection.query(query,[req.body.first_name, req.body.last_name, req.body.email,hash,req.body.username,req.body.phone,req.body.DOB,req.body.address],function(err,rows,fields){
                    connection.release();
                    if(err){
                        console.log(err);
                        res.sendStatus(500);
                        return;
                    }

                    //succuess -- redirect to log in page
                      res.sendStatus(200);
                });
            });
            });
            });//crpto ends

    }else{
        console.log("failed to get info from client side");
        res.sendStatus(500);
    }

});
// }//end of route function
// );//end of route



//route to access the log in page.
router.get("/login",function(req,res){


  res.send(`
        <!DOCTYPE html>
            <html lang="en">
                <head>
                     <title>Covid Tracking | login</title>
                     <meta charset="UTF-8">
                     <link rel="stylesheet" type="text/css" href="stylesheets/java_nhap.css">
                     <script src="https://kit.fontawesome.com/6fa215a695.js" crossorigin="anonymous"></script>
                     <script src="https://apis.google.com/js/platform.js" async defer></script>
                     <meta name="google-signin-client_id" content="195247369660-khs98ng8dducmrtrm2fqgilrha5nagp0.apps.googleusercontent.com">
                     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
                    <script src="javascripts/main.js" defer></script>
                    <link rel="preconnect" href="https://fonts.gstatic.com">
                    <link href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap" rel="stylesheet">
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
                    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js'></script>
                    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css' rel='stylesheet' />
                </head>
         <body id="Vy-whole">
             <div id="app">
                  <div id="Vy-loginpage" v-if="welcome==='login'">
                       <div class="Vy-BACK"><button  type="button" class="BACK1 BACK2" v-on:click="welcome='mainpage'" onclick="window.location.href='https://ide-2b9585f19c4541d4867c07204cbf0f8a-8080.cs50.ws/'"> < BACK </button>
                       </div>
                       <div id="Vy-loginbox"  class="container" >
                           <div id="Vy-logo-login" class="col" class="row justify-content-md-center">
                              <img  src="images/logo1.png" alt="Logo Covid Tracking" class="Vy-logo1"   />
                              <img class="Vy-logo1"  src="/images/covid_tracking_logo.png" alt="covid tracking logo">
                                <br/>
                           </div>

                           <div id="Vy-signin-main_title" class="col-auto">
                               <!--Log in for stopping COVID spread!-->
                           To continue, log in to COVID tracking.
                           </div>
                           <div id="Vy-no_box">
                               <!--<div class="row">-->
                                   <p class="Vy-Usertitle">Log in by using GOOGLE account:</p>
                                   <div class="col-md">
                                          <div id="Vy-Gmail_log_in">
                                              <div id= "Vy-sign_in_google_button" class="g-signin2" data-onsuccess="onSignIn">
                                              </div>
                                          </div>
                                          <pre class="Vy-pre">_______________________or_______________________</pre>
                                          <p class="Vy-Usertitle">Log in by using EMAIL or USERNAME:</p>
                                          <form id="Vy-account">
                                                <!--<div class="container">-->
                                                     <div class="row">
                                                            <div class="col-md-6">
                                                               <label class="Vy-login-lable" for="username" class="Vy-questions">Email address or username</label>
                                                            </div>
                                                            <div class="col-md-6">
                                                               <input name="username" class="Vy-answers" type="text" id="Vy_email_username" placeholder="Email address/username." required onclick="clearMessage2()">
                                                            </div>
                                                    </div>
                                                    <div class="row">
                                                            <div class="col-md">
                                                                <p id="login_fail_message2" style="color: red; display:none;"><i class="fas fa-times-circle"></i> Please enter username or email</p>
                                                            </div>
                                                    </div>

                                                    <div class="row">
                                                          <div class="col-md-6">
                                                              <label class="Vy-login-lable" for="pass" class="Vy-questions">Enter a password</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                             <input name="pass" class="Vy-answers" type="password" id="Vy_password" placeholder="Enter a password." required onclick="clearMessage3()">
                                                          </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md">
                                                            <p id="login_fail_message3" style="color: red;display:none;"><i class="fas fa-times-circle"></i> Please enter password.</p>
                                                        </div>
                                                    </div>

                                                    <button type="button" id="Vy-login_button" onclick="submit_login_form()">Log In</button>
                                                    <div class="row">
                                                       <div class="col-md">
                                                            <p id="login_fail_message" style="color: red; background-color: #ffd1dc;display:none;"><i class="fas fa-times-circle"></i> Login failed: username/email and password don't match.</p>
                                                       </div>
                                                    </div>
                                                    <div class="Vy-agreed">By clicking on sign up, you agreed with all of our Term's and Condition.
                                                    </div>
                                                <!--</div>-->
                                            </form>
                                             <p class="Vy-pre">______________________________________________</p>

                                            <p >Don't have an account? <button id="Vy-signup" onclick="window.location.href='https://ide-2b9585f19c4541d4867c07204cbf0f8a-8080.cs50.ws/#'">SIGN UP</button></p>
                                       </div>
                                   <!--</div>-->
                               </div>
                           </div>
                      </div>
                 </div>
             </body>
         </html>
            `);

});

// <a href="#" onclick="signOut();">Sign out</a> //line 355

router.post('/login', function(req, res, next) {

     if( 'username_or_email' in req.body &&
        'password' in req.body){

        req.pool.getConnection( function(err,connection) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
                var query= `SELECT * FROM(
                            SELECT indi_id, role,email,password_hash,username FROM individual
                            UNION
                            SELECT id, role, email,password_hash,username FROM manager
                            UNION
                            SELECT  username, role,email,password_hash, employeeID FROM admin)  AS U
                            WHERE email=? OR username=?`;

            //union the three table   , select only 5 things id, role, email,username, password_hash
            connection.query(query,[req.body.username_or_email,req.body.username_or_email], async function(err, rows, fields) {
              connection.release(); // release connection
              if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
              }
              if(rows.length > 0){

                  let valid = await argon2.verify(rows[0].password_hash, req.body.password);

                  if (valid) {
                      delete rows[0].password_hash;
                      console.log("here");
                      rows[0].google="false";
                      //check user's role
                      if(rows[0].role === 0){    //individual
                          //redirect to individual's route
                          rows[0].redirectPath = "/dashboard_user.html";
                      }else if(rows[0].role === 1){
                          rows[0].redirectPath = "/dashboard_venue.html";
                      }else if(rows[0].role === 2){
                          rows[0].redirectPath = "/dashboard_admin.html";
                      }else{
                          console.log("roles not defined!");
                          res.sendStatus(401);
                      }
                      //add user info to session token

                      req.session.user = rows[0];
                      console.log(req.session.user);
                      res.json(rows[0]);
                  } else {
                      return res.sendStatus(401);
                  }

              } else {
                  res.sendStatus(401);
              }
            });
        });


    } else if( 'token' in req.body ) {

        async function verify() {
          const ticket = await client.verifyIdToken({
              idToken: req.body.token,
              audience: CLIENT_ID,
          });

        // }
          const payload = ticket.getPayload();
          req.pool.getConnection( function(err,connection) {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                    return;
                }
             var query = `SELECT * FROM(
                            SELECT indi_id, role,email FROM individual
                            UNION
                            SELECT id, role, email FROM manager
                            UNION
                            SELECT  employeeID, role,email FROM admin)  AS U
                            WHERE email=?`;
            connection.query(query,[payload['email']], function(err, rows, fields) {
              connection.release(); // release connection
              if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
              }
              if(rows.length > 0){
                    //   req.session.user = rows[0];
                      rows[0].google="true";
                      if(rows[0].role === 0){    //individual
                          //redirect to individual's route
                          console.log('user');
                          rows[0].redirectPath = "/dashboard_user.html";
                      }else if(rows[0].role === 1){
                          rows[0].redirectPath = "/dashboard_venue.html";
                      }else if(rows[0].role === 2){
                          rows[0].redirectPath = "/dashboard_admin.html";
                      }else{
                          console.log("roles not defined!");
                          res.sendStatus(401);
                      }
                      req.session.user = rows[0];
                      res.json(rows[0]);
              } else {
                  res.sendStatus(401);
              }
            });
            });
        }
        verify().catch(function(){res.sendStatus(401);});

    } else {
        res.sendStatus(400);
    }

});

//for log out
router.post('/logout',function(req,res,next){
  var google=req.session.user.google;
  delete req.session.user;
  res.send(google);
});


router.get('/get_hotspots',function(req,res){
    req.pool.getConnection(function(err,connection){
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }

         var query="SELECT * FROM currentHotspots;";
        connection.query(query,function(err,rows,fields){
            connection.release();
            if(err){
                console.log(err);
                res.sendStatus(500);
                return;
            }

            res.json(rows);
        });
    });
});

module.exports = router;

