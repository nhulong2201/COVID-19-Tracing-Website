var express = require('express');
var router = express.Router();

router.use('/',function(req,res,next){
    if('user' in req.session) {
        if(req.session.user.role == 1){
            next();
            console.log(req.session.user);
        }else {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
});

// update venue profile
// send_profile function - in covid.js
router.post('/update_profile_venue', function(req, res, next) {
    console.log(req.body);
    req.pool.getConnection(function(err, connection) {
        if (err) {
          console.log(err);
            res.sendStatus(500);
            return;
        }
        var query=`UPDATE manager  SET
                    first_name=?,
                    last_name=?,
                    email=?,
                    phone=?,
                    DOB=?,
                    address=?
                    WHERE id=?`;
        connection.query(query,
            [req.body.first_name,
            req.body.last_name,
            req.body.email,
            req.body.phone,
            req.body.DOB,
            req.body.address,
            req.session.user.indi_id], function(err, rows, fields) {
            connection.release;
            if (err) {
                        console.log(err);

                res.sendStatus(500);
                return;
            }
            // successfully
            res.send('updated successfully');
            console.log('updated successfully');
        });
    });
});

// show venue profile
// get_profile_venue function - in covid.js
router.get('/get_vprofile', function(req, res, next){
    req.pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        var query="SELECT id, first_name, last_name, DOB, email, phone, username, address from manager WHERE id=?";
        connection.query(query, [req.session.user.indi_id],function(err, rows, fields) {
            connection.release;
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
            console.log('received');
            console.log(rows);
            res.json(rows);

        });
    });
});


// manage venue info
// send_venueinfo function - in covid.js
router.post('/update_venueinfo', function(req, res, next) {
  console.log(req.body);
  req.pool.getConnection(function(err, connection){
        if(err) {
          console.log(err);
          res.sendStatus(500);
          return;
        }
    var query = `update venue set
                  name=?,
                  number_venue=?,
                  street=?,
                  suburb=?,
                  postcode=?,
                  city=?,
                  state=?,
                  longitude=?,
                  latitude=?
                  where manager_id=?`;
    connection.query(query,
                [req.body.name,
                req.body.number_venue,
                req.body.street,
                req.body.suburb,
                req.body.postcode,
                req.body.city,
                req.body.state,
                req.body.longitude,
                req.body.latitude,
                req.session.user.indi_id], function(err, rows, fields){
                connection.release;
                    if(err){
                        console.log(err);
                        console.log('fail');
                        res.sendStatus(500);
                        return;
                    }
                      // successfully submit
                          res.send('updated successfully');
                          console.log(rows);
                });
    });
});

// get_venueinfo function - in covid.js
router.get('/get_venueinfo', function(req, res, next){
    req.pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        var query=`SELECT venue_id, name, number_venue, street, suburb, postcode, city, state from venue
                        Where venue_id=(SELECT venue_id FROM venue where manager_id=?)`;
        connection.query(query, [req.session.user.indi_id], function(err, rows, fields) {
            connection.release;
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
            console.log('received');
            console.log(rows);
            res.json(rows);

            //res.send("successfully");

        });
    });
});

// checkin history
// get_checkinhistory - covid.js
router.get('/get_checkin', function(req, res, next){
    req.pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        var query=`SELECT DATE_FORMAT(checkin_date, "%Y-%m-%d") as DatePart,
                          DATE_FORMAT(checkin_date, "%H:%i:%s") as TimePart
                    from checkin
                    INNER JOIN venue ON checkin.venue_id=venue.venue_id
                    WHERE venue.venue_id=(SELECT venue_id FROM venue where manager_id=?)`;
        connection.query(query, [req.session.user.indi_id], function(err, rows, fields) {
            connection.release;
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
            console.log('received');
            console.log(rows);
            res.json(rows);

        });
    });
});

// add hotspots marker on map
// how to add it to map
// router.get('/get_marker', function(req, res, next){
//     req.pool.getConnection(function(err, connection) {
//         if (err) {
//             console.log(err);
//             res.sendStatus(500);
//             return;
//         }
//         var query="SELECT longitude, latitude from venue INNER JOIN hotspots ON hotspots.venue_id=venue.venue_id WHERE hotspots.hotspots_id=1";
//         connection.query(query, function(err, rows, fields) {
//             connection.release;
//             if (err) {
//                 console.log(err);
//                 res.sendStatus(500);
//                 return;
//             }
//             console.log('received');
//             console.log(rows);
//             res.json(rows);

//         });
//     });
// });

// manage by admin
// router.post('/update_marker', function(req, res, next) {
//     console.log(req.body);
//     req.pool.getConnection(function(err, connection) {
//         if (err) {
//           console.log(err);
//             res.sendStatus(500);
//             return;
//         }
//         var query=`UPDATE venue SET
//                     longtitude=?,
//                     latitude=?,
//                     WHERE venue_id=1`;
//         connection.query(query,
//             [req.body.longitude,
//             req.body.latitude
//             ], function(err, rows, fields) {
//             connection.release;
//             if (err) {
//                         console.log(err);
//                 res.sendStatus(500);
//                 return;
//             }
//             res.send('updated successfully');
//             console.log('updated successfully');
//         });
//     });
// });

module.exports = router;