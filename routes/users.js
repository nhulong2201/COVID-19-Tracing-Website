var express = require('express');
var router = express.Router();




/* GET users listing. */
//security check

router.use('/',function(req,res,next){
    if('user' in req.session) {
        if(req.session.user.role == 0){
            next();
            console.log(req.session.user);
        }else {
            res.sendStatus(401);
        }

    } else {
        res.sendStatus(401);
    }
});


// router.use('/',function(req,res,next){
//     if('user' in req.session) {
//         next();
//         console.log(req.session.user);
//     } else {
//         res.sendStatus(401);
//     }
// });




///////////////LONG///////////////////////////////////////////////////////////////////////

router.get('/get_history_individual', function(req, res, next){
    req.pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;

        }
        var query=`SELECT DATE_FORMAT(checkin.checkin_date, "%Y-%m-%d %H:%i:%s") as Date, venue.name, venue.number_venue, venue.street, venue.suburb,
                        venue.postcode, venue.city, venue.state, venue.longitude, venue.latitude, currentHotspots.id
                        FROM checkin
                        INNER JOIN venue ON checkin.venue_id=venue.venue_id
                        LEFT JOIN currentHotspots ON currentHotspots.venue_id=venue.venue_id
                        WHERE checkin.indi_id=?
                        `;
        connection.query(query, [req.session.user.indi_id], function(err, rows, fields) {
            connection.release;
            if (err) {
                res.sendStatus(500);
                return;
            }
            console.log(rows);
            res.json(rows);
        });
    });
});


// middleware
// req.user_id = id;

router.get('/get_profile_user', function(req, res, next){
    req.pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        // console.log(req.session.user.indi_id);
        var query="SELECT indi_id, first_name, last_name, DOB, email, phone, username, address from individual WHERE indi_id=?";
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
            req.session.user.indi_id],function(err, rows, fields) {
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

router.get('/get_code_type', function (req, res, next) {
    var code_type=parseInt(req.query.code);
    console.log(code_type);
    req.pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        var query=`SELECT venue_id, name, number_venue, street, suburb, postcode, city, state, code FROM venue`;
        var check=false;
        var i=0;
        var checkin={};
        connection.query(query, function(err, rows, fields) {
            // connection.release;
            if (err) {
                console.log('query');
                res.sendStatus(500);
                return;
            }
            while (check===false && i<rows.length) {
                if (rows[i].code===code_type) {
                    var d=new Date();
                    checkin={
                                // checkin_date: d.toLocaleString(),
                                checkin_date: d,
                                indi_id: req.session.user.indi_id,
                                venue_id: rows[i].venue_id,
                    };
                    // http
                    check=true;

                }
                i++;
            }
            if (check===false){
                console.log('fail');
                res.send("failed");
            } else {

            // second query to ..
                query=`INSERT INTO checkin (checkin_date, indi_id, venue_id) VALUES (?,?,?)`;
                connection.query(query, [checkin.checkin_date, checkin.indi_id, checkin.venue_id], function(err, rows, fields) {
                connection.release;
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                        return;
                    }



                    console.log(rows);
                    res.send("successfully checkin");


                });
            }

        });
    });
});

// -----------VY-GPS-----------------




router.post ('/getgps',function(req,res,next){
  console.log('check');
  req.pool.getConnection(function(err,connection){
    if (err){
        console.log(err);
      res.sendStatus(500);
    }
    console.log(req.body);
    // curr_position is an object from sendPosition function in vue method VY part
      var curr_lat =req.body.latitude;
      var curr_long=req.body.longitude;

      var query= `SELECT  venue_id, longitude, latitude FROM venue
                  WHERE ABS(longitude-?)<=? AND ABS(latitude-?)<=?`;
      var d=new Date();
      connection.query(query, [curr_long, 0.15, curr_lat, 0.01], function(err,rows,fields){
        // connection.release();
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }

        if (rows.length<1) {
            res.send("failed");
        } else {
            var checkin={
                                // checkin_date: d.toLocaleString(),
                                checkin_date: d,
                                indi_id: req.session.user.indi_id,
                                venue_id: rows[0].venue_id
                    };
            query=`INSERT INTO checkin (checkin_date, indi_id, venue_id) VALUES (?,?,?)`;
                connection.query(query, [checkin.checkin_date, checkin.indi_id, checkin.venue_id], function(err, rows, fields) {
                connection.release;
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                        return;
                    }
                    console.log(rows);
                    res.send("successfully checkin");
                });
        }

        // res.json(rows);
      });

  });
});

module.exports = router;
