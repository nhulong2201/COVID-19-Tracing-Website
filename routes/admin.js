//route module for admin
//mysql --host=127.0.0.1
var express = require('express');
var router = express.Router();

var argon2i = require('argon2-ffi').argon2i;
var crypto = require('crypto');

router.use('/',function(req,res,next){
    if('user' in req.session ) {
        if(req.session.user.role === 2){
            next();
            // console.log(req.session.user);
        }else {
            res.sendStatus(401);
        }

    } else {
        res.sendStatus(401);
    }
});



// router.get('/',function(req,res){
//     var login_form=`
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <title>Covid tracking | Admin login</title>
//             <meta charset="utf-8">
//             <link rel="stylesheet" type="text/css" href="stylesheets/java_nhap.css" />
//         </head>
//         <body>

//             <form action="/admin/login" method="post" class="admin_login_form_container">
//                 <div id="admin_login_heading">
//                     <img id="admin_login_logo" src="images/covid_tracking_logo.png" alt="covid tracking logo">
//                     <div id="admin_login_form_heading">Admin Login</div>
//                 </div>
//                 <label for="username"><div class="admin_login_form_label">Employee ID</div></label><br>
//                 <input class="admin_login_form" type="text" placeholder="Enter employee ID" name="username" required><br><br><br>

//                 <label for="password"><div class="admin_login_form_label">Password</div></label><br>
//                 <input class="admin_login_form" type="password" placeholder="Enter Password" name="password" required><br><br><br>

//                 <button type="submit" id="admin_login_button">Login</button>

//             </form>
//         </body>
//     `;

//     res.send(login_form);
// });




// router.post('/login',
//   passport.authenticate('local', { successRedirect: '/dashboard_admin.html',
//                                   failureRedirect: '/admin',
//                                   failureFlash: true })
// );

// router.get('/login', passport.initialize(), passport.authenticate('local', { scope: [ 'user:email' ], session: false }), function(req, res){ /* Leave empty */ });

// router.get('/login/callback', passport.initialize(), passport.authenticate('local', { failureRedirect: '/login', session: false }), function(req, res, next) {

//   // successful login
//   // req.user contains login details
//   console.log(req.user);

//   res.redirect('/dashboard_admin.html');

// });


module.exports = router;

router.get('/get_admin_profile',function(req,res){
    let adminProfile = {};
    adminProfile.email = req.session.user.email;
    adminProfile.employeeID = req.session.user.username;
    // adminProfile.name
    // console.log(req.session.user);
    req.pool.getConnection(function(err,connection){
        if(err){
            console.log(err);
            res.sendStatus(500);

        }

         var query="SELECT first_name,last_name,phone FROM admin WHERE employeeID=?;";
        connection.query(query,[adminProfile.employeeID],function(err,rows,fields){
            connection.release();
            if(err){
                console.log(err);
                res.sendStatus(500);

            }

            //succuess -- redirect to log in page
            if(rows.length>0){
                adminProfile.first_name = rows[0].first_name;
                adminProfile.last_name = rows[0].last_name;
                adminProfile.phone = rows[0].phone;
                res.send(adminProfile);
            }else{
                res.sendStatus(500);
            }
        });
    });


});




router.get("/signup", function(req,res){
    var signup_form=`
       <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Covid tracking | Admin signup</title>
            <meta charset="utf-8">
            <link rel="stylesheet" type="text/css" href="/stylesheets/java_nhap.css" />
            <script src="/javascripts/main.js" defer></script>
        </head>
        <body>
                <div id="admin_login_heading">
                    <img id="admin_login_logo" src="/images/covid_tracking_logo.png" alt="covid tracking logo">
                    <div id="admin_login_form_heading">Admin Sign-up</div>
                </div>

                <label ><div class="admin_login_form_label">First name</div></label><br>
                <input class="admin_login_form" type="text" placeholder="Enter first name" id="first_name" required><br><br><br>
                <label ><div class="admin_login_form_label">Last name</div></label><br>
                <input class="admin_login_form" type="text" placeholder="Enter last name"  id="last_name" required><br><br><br>

                <label ><div class="admin_login_form_label">Employee ID</div></label><br>
                <input class="admin_login_form" type="text" placeholder="Enter employee ID" id="id" required><br><br><br>

                <label ><div class="admin_login_form_label">Email</div></label><br>
                <input class="admin_login_form" type="email" placeholder="Enter email"  id="email" required><br><br><br>

                <label ><div class="admin_login_form_label">Phone</div></label><br>
                <input class="admin_login_form" type="tel" placeholder="Enter phone number" id="phone" required><br><br><br>

                <label ><div class="admin_login_form_label">Password</div></label><br>
                <input class="admin_login_form" type="password" placeholder="Enter password" id="password" required><br><br><br>
                <label ><div class="admin_login_form_label">Repeat password</div></label><br>
                <input class="admin_login_form" type="password" placeholder="Enter password" id="rep_password" required><br><br><br>

                <button onclick="adminSignup()" type="submit" id="admin_login_button">confirm</button>


        </body>
    `;

    res.send(signup_form);
});


router.post('/signup',function(req,res){
    if('id' in req.body && 'email' in req.body && 'phone' in req.body && 'password' in req.body){
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
                var query="INSERT INTO admin (role,employeeID,first_name,last_name,phone,email,password_hash) VALUES (2,?,?,?,?,?,?);";
                connection.query(query,[req.body.id,req.body.first_name,req.body.last_name,req.body.phone,req.body.email,hash,],function(err,rows,fields){
                    connection.release();
                    if(err){
                        console.log(err);
                        res.sendStatus(500);
                        return;
                    }

                     res.sendStatus(200);
                });
            });

        });

    }else{
        console.log("failed to get data from client side");
        res.sendStatus(500);
    }

});


router.post('/update_profile',function(req,res){
    if('employeeID' in req.body && 'email' in req.body && 'phone' in req.body && 'password' in req.body && 'first_name' in req.body && 'last_name' in req.body){
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
                var query="UPDATE admin SET first_name=?,last_name=?,phone=?,email=?,password_hash=? WHERE employeeID =?;";
                connection.query(query,[req.body.first_name,req.body.last_name,req.body.phone,req.body.email,hash,req.body.employeeID],function(err,rows,fields){
                    connection.release();
                    if(err){
                        console.log(err);
                        res.sendStatus(500);
                        return;
                    }

                     res.sendStatus(200);
                });
            });

        });

    }else{
        console.log("failed to get data from client side");
        res.sendStatus(500);
    }

});



router.post('/extend_timeframe',function(req,res){
    req.pool.getConnection(function(err,connection){
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }

         var query="UPDATE hotspots SET hotspots.start_date =? , hotspots.end_date = ? WHERE hotspots.id= ?;";
        connection.query(query,[req.body.start_date,req.body.end_date, req.body.exID],function(err,rows,fields){
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




router.post('/add_venue',function(req,res){
    req.pool.getConnection(function(err,connection){
                if(err){
                    console.log(err);
                    res.sendStatus(500);
                    return;
                }

                 var query="INSERT INTO venue  (name,number_venue,street,suburb,postcode,state,code,longitude,latitude) VALUES (?,?,?,?,?,'SA',floor(RAND()*(200000-100000)+100000),?,?);";
                connection.query(query,[req.body.name, req.body.number_venue, req.body.street,req.body.suburb,req.body.postcode,req.body.longitude,req.body.latitude],function(err,rows,fields){
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

router.get('/venue_info',function(req,res){
    req.pool.getConnection(function(err,connection){
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }

         var query="SELECT * FROM venue WHERE name = ?;";
        connection.query(query,[req.query.businessName],function(err,rows,fields){
            connection.release();
            if(err){
                console.log(err);
                res.sendStatus(500);
                return;
            }

            if(rows.length > 0){
                console.log(rows[0]);
                res.send(rows[0]);
            }else{
                res.sendStatus(500);
            }
        });
    });
});




router.get('/get_venues',function(req,res){
    req.pool.getConnection(function(err,connection){
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }

         var query="SELECT venue_id,name,number_venue,street,suburb,postcode,state, manager.id AS manager_id,last_name,first_name,email,phone,username,longitude,latitude,code FROM venue LEFT JOIN manager ON venue.manager_id = manager.id;";
        connection.query(query,function(err,rows,fields){
            connection.release();
            if(err){
                console.log(err);
                res.sendStatus(500);
                return;
            }

            if(rows.length > 0){
                // console.log(rows[0]);
                res.send(rows);
            }else{
                res.sendStatus(500);
            }
        });
    });
});

router.post('/add_new_hotspot',function(req,res){
    req.pool.getConnection(function(err,connection){
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }

         var query="INSERT INTO hotspots (venue_id,start_date,end_date) VALUES (?,?,?);";
         connection.query(query,[req.body.id, req.body.start_date, req.body.end_date],function(err,rows,fields){
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


router.get('/get_all_hotspots',function(req,res){
    req.pool.getConnection(function(err,connection){
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }

         var query="SELECT * FROM  allHotspots;";
        connection.query(query,function(err,rows,fields){
            connection.release();
            if(err){
                console.log(err);
                res.sendStatus(500);
                return;
            }

            if(rows.length > 0){
                console.log(rows[0]);
                res.send(rows);
            }else{
                res.sendStatus(500);
            }
        });
    });
});

router.post('/delete_venue',function(req,res){
     req.pool.getConnection(function(err,connection){
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }

         var query= "DELETE FROM venue WHERE venue_id = ?;";
         connection.query(query,[req.body.id],function(err,rows,fields){
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


router.post('/delete_hotspot',function(req,res){
     req.pool.getConnection(function(err,connection){
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }

         var query= "DELETE FROM hotspots WHERE id=?;";
         connection.query(query,[req.body.id],function(err,rows,fields){
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



router.get('/get_managers',function(req,res){
    req.pool.getConnection(function(err,connection){
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }

        //  var query="SELECT id AS manager_id,first_name,last_name, email,username,phone FROM manager;";
        var query="SELECT id AS manager_id,first_name,last_name, DOB, email,username,phone, venue.name AS venue, venue.venue_id FROM manager LEFT JOIN venue ON manager.id = venue.manager_id;";
        connection.query(query,function(err,rows,fields){
            connection.release();
            if(err){
                console.log(err);
                res.sendStatus(500);
                return;
            }

            if(rows.length > 0){
                // console.log(rows[0]);
                res.send(rows);
            }else{
                res.sendStatus(500);
            }
        });
    });


});


router.post('/add_manager',function(req,res){
    // console.log(req.body.managerID);
    // console.log(req.body.venueID);
    req.pool.getConnection(function(err,connection){
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }

         var query= "UPDATE venue SET manager_id = ? WHERE venue_id =?;";
         connection.query(query,[req.body.managerID,req.body.venueID],function(err,rows,fields){
            connection.release();
            if(err){
                // console.log(err);
                res.sendStatus(500);
                return;
            }

            //succuess -- redirect to log in page
              res.sendStatus(200);
        });
    });
});


router.post('/remove_manager_from_venue',function(req,res){
    req.pool.getConnection(function(err,connection){
        if(err){
            // console.log(err);
            res.sendStatus(500);
            return;
        }

         var query= "UPDATE venue SET manager_id = null WHERE venue_id =?;";
         connection.query(query,[req.body.venueID],function(err,rows,fields){
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

router.get('/getPeople',function(req,res){
   req.pool.getConnection(function(err,connection){
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }

         var query= "SELECT  indi_id AS id,CONCAT(first_name,' ', last_name) AS name,DOB,email,phone,address FROM individual;";
         connection.query(query,[req.body.venueID],function(err,rows,fields){
            connection.release();
            if(err){
                console.log(err);
                res.sendStatus(500);
                return;
            }

            if(rows.length > 0){
                // console.log(rows[0]);
                res.send(rows);
            }else{
                res.sendStatus(500);
            }
        });
    });
});

router.post('/get_history_person',function(req,res){
    req.pool.getConnection(function(err,connection){
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }

         var query= "SELECT checkin.checkin_id, DATE_FORMAT(checkin.checkin_date,'%Y-%m-%d %H:%i:%s') AS checkin_date,venue.name,(checkin.checkin_date between hotspots.start_date and hotspots.end_date) AS isHotspot, venue.number_venue, venue.street, venue.suburb, venue.postcode FROM checkin INNER JOIN  venue ON checkin.venue_id = venue.venue_id INNER JOIN hotspots ON hotspots.venue_id = venue.venue_id WHERE indi_id=?;";
         connection.query(query,[req.body.id],function(err,rows,fields){
            connection.release();
            if(err){
                console.log(err);
                res.sendStatus(500);
                return;
            }

            if(rows.length > 0){
                // console.log(rows[0]);
                res.send(rows);
            }else{
                res.sendStatus(500);
            }
        });
    });
});

router.post('/get_history_venue',function(req,res){
    req.pool.getConnection(function(err,connection){
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }

         var query= "SELECT checkin.checkin_id, DATE_FORMAT(checkin.checkin_date,'%Y-%m-%d %H:%i:%s') AS checkin_date, individual.indi_id, (checkin.checkin_date between hotspots.start_date and hotspots.end_date) AS isHotspot FROM checkin INNER JOIN  venue ON checkin.venue_id = venue.venue_id INNER JOIN hotspots ON hotspots.venue_id = venue.venue_id INNER JOIN individual ON individual.indi_id = checkin.indi_id WHERE venue.venue_id=?;";
         connection.query(query,[req.body.id],function(err,rows,fields){
            connection.release();
            if(err){
                console.log(err);
                res.sendStatus(500);
                return;
            }

            if(rows.length > 0){
                // console.log(rows[0]);
                res.send(rows);
            }else{
                res.sendStatus(500);
            }
        });
    });
});



router.post('/delete_person',function(req,res){
    req.pool.getConnection(function(err,connection){
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }

         var query= "DELETE FROM individual WHERE indi_id = ?";
         connection.query(query,[req.body.id],function(err,rows,fields){
            connection.release();
            if(err){
                console.log(err);
                res.sendStatus(500);
                return;
            }


              res.sendStatus(200);
        });
    });
});


router.post('/delete_manager',function(req,res){
    req.pool.getConnection(function(err,connection){
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }

         var query= "DELETE FROM manager WHERE id = ?;";
         connection.query(query,[req.body.id],function(err,rows,fields){
            connection.release();
            if(err){
                console.log(err);
                res.sendStatus(500);
                return;
            }

              res.sendStatus(200);
        });
    });
})


router.post('/update_user', function(req, res, next) {
    console.log(req.body);
    req.pool.getConnection(function(err, connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query=`UPDATE individual  SET
                    first_name=?,
                    last_name=?,
                    DOB=?,
                    email=?,
                    phone=?,
                    address=?
                    WHERE indi_id=?`;
        connection.query(query,
            [req.body.first_name,
            req.body.last_name,
            req.body.DOB,
            req.body.email,
            req.body.phone,
            req.body.address,
            req.body.id],function(err, rows, fields) {
            connection.release;
            if (err) {
                res.sendStatus(500);
                console.log('fail');
                return;
            } else {
                res.send('updated successfully');
            }
            console.log('updated successfully');
        });
    });
});


router.post('/update_manager',function(req,res){
    console.log(req.body);
    req.pool.getConnection(function(err, connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query=`UPDATE manager  SET
                    first_name=?,
                    last_name=?,
                    DOB=?,
                    email=?,
                    phone=?
                    WHERE id=?`;
        connection.query(query,
            [req.body.first_name,
            req.body.last_name,
            req.body.DOB,
            req.body.email,
            req.body.phone,
            req.body.id],function(err, rows, fields) {
            connection.release;
            if (err) {
                res.sendStatus(500);
                console.log('fail');
                return;
            } else {
                res.send('updated successfully');
            }
            console.log('updated successfully');
        });
    });
});



// //get hotspot workspace html
// router.get('/hotspot',function(req,res){
//     res.send(
//         `
//         <!--hotspot dash -->
//           <nav>
//             <li>view map</li>
//             <li>view list</li>
//           </nav>

//              <div id='map'></div>
//   <script>
//   mapboxgl.accessToken = 'pk.eyJ1IjoicmFuMTYiLCJhIjoiY2twbXloOGs4MDZqcjMxcDRvc3BqNWdydCJ9.KuXfM_zr8oLcmqoqQb_aNQ';
//   var map = new mapboxgl.Map({
//     container: 'map', // Container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // Map style to use
//     center: [138.599503, -34.921230], // Starting position [lng, lat]
//     zoom: 8, // Starting zoom level
//   });

//   var marker = new mapboxgl.Marker() // initialize a new marker
//   .setLngLat([138.599503, -34.921230]) // Marker [lng, lat] coordinates
//   .addTo(map); // Add the marker to the map

//   var geocoder = new MapboxGeocoder({ // Initialize the geocoder
//   accessToken: mapboxgl.accessToken, // Set the access token
//   mapboxgl: mapboxgl, // Set the mapbox-gl instance
//   marker: false, // Do not use the default marker style
// //   placeholder: 'Search for places in Berkeley',
// //   bbox: [129, -38, -26, 141], // Boundary for Berkeley
// //     proximity: {
// //         longitude: 138,
// //         latitude: -34
// //     } // Coordinates of UC Berkeley
// });

// // Add the geocoder to the map
// map.addControl(geocoder);

// // After the map style has loaded on the page,
// // add a source layer and default styling for a single point
// map.on('load', function() {
//   map.addSource('single-point', {
//     type: 'geojson',
//     data: {
//       type: 'FeatureCollection',
//       features: []
//     }
//   });

//   map.addLayer({
//     id: 'point',
//     source: 'single-point',
//     type: 'circle',
//     paint: {
//       'circle-radius': 10,
//       'circle-color': '#448ee4'
//     }
//   });


//   var ecoordinates;
//   geocoder.on('result', function(e) {
//     map.getSource('single-point').setData(e.result.geometry);
//     ecoordinates = e.result.geometry;
//     console.log(ecoordinates);
//   });

//   map.on('click', 'point', function (e) {
// // var coordinates = e.features[0].geometry.coordinates.slice();
// // var description = e.features[0].properties.description;

// // // Ensure that if the map is zoomed out such that multiple
// // // copies of the feature are visible, the popup appears
// // // over the copy being pointed to.
// // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
// // coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
// // }

// new mapboxgl.Popup()
// .setLngLat(ecoordinates.coordinates)
// .setHTML('<strong>Truckeroo</strong><p><a href="http://www.truckeroodc.com/www/" target="_blank">Truckeroo</a> brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>')
// .addTo(map);
// });


// });

// </script>
//           <!--hotspot dash finish-->
//         `
//         );
// });


// router.get('/get_hotspots',function(req,res){


// });