var express =require("express");
var router = express.Router();
const Sequelize = require('sequelize');

db = require('../config/db.js');
router.get("/",function(req,res) {
	res.redirect ("/weeklycalendar");
});


router.get('/calendar', function(req, res){
  db.calendars.findAll({
    attributes: ['listing_id', 'listdate', 'available', 'price'],
  }).then(function(calendarData){
    res.render('index.handlebars', {calendarData : calendarData});
  });
});

router.get('/weeklycalendar', function(req, res){
   db.summaries.findAll({
    attributes: [ 'neighbourhood', 'weekof', 'monthof', 'Min_price','Max_price','Avg_price'],
    where: {weekof: 1800}
  }).then(function(calendarData){
    res.render('index.handlebars', {calendarData : calendarData});
  });
});

router.get('/summaries', function(req, res){
   db.summaries.findAll({
    attributes: [ 'neighbourhood', 'weekof', 'monthof', 'Min_price','Max_price','Avg_price'],
    where: {weekof: 18}
  }).then(function(calendarData){
    res.json(calendarData);
  });
});

router.get('/chart1', function(req, res){
   db.summaries.findAll({
    attributes: [ 'neighbourhood', 
                  [db.summaries.sequelize.fn('avg', db.summaries.sequelize.col('Summary.Avg_price')), 'Avg_price']
                ],
    //where: {weekof: 18}
     group: ['Summary.neighbourhood'],
  }).then(function(calendarData){
    res.json(calendarData);
  });
});


router.get('/chart2', function(req, res){
    db.summaries.findAll({
    attributes: [ 'neighbourhood', 
                  [db.summaries.sequelize.fn('avg', db.summaries.sequelize.col('Summary.Min_price')), 'Min_price']
                ],
    //where: {weekof: 18}
     group: ['Summary.neighbourhood'],
  }).then(function(calendarData){
      res.json(calendarData);
  });
});

router.get('/chart3', function(req, res){
   db.summaries.findAll({
    attributes: [ 'neighbourhood', 
                  [db.summaries.sequelize.fn('avg', db.summaries.sequelize.col('Summary.Max_price')), 'Max_price']
                ],
     group: ['Summary.neighbourhood'],
  }).then(function(calendarData){
    res.json(calendarData);
  });
});

router.get('/chart4', function(req, res){
  console.log(" chart4 ::: chart4 ::: Got call ");
  db.listings.findAll({
    attributes: [ 
                  [db.listings.sequelize.fn('COALESCE', db.listings.sequelize.col('Listing.neighbourhood'), db.listings.sequelize.col('Listing.neighbourhood_cleansed')),  'neighbourhood'],
                  [db.listings.sequelize.fn('count', 1), 'Count']
                ],
    //where: {weekof: 18}
     group: ['Listing.neighbourhood'],
  }).then(function(calendarData){
      res.json(calendarData);
  });
});


router.get('/graph1', function(req, res){
  db.listings.findAll({
    attributes: ['neighbourhood', 
    			  [db.calendars.sequelize.fn('min', db.calendars.sequelize.col('calendars.price')), 'Min_price'],
            [db.calendars.sequelize.fn('max', db.calendars.sequelize.col('calendars.price')), 'Max_price'],
            [db.calendars.sequelize.fn('avg', db.calendars.sequelize.col('calendars.price')), 'Avg_price']
    			],
 	include: [
    	{
        model: db.calendars,
        attributes: []
    	}
    		],
    group: ['listing.neighbourhood'],
    having: db.calendars.sequelize.where(db.calendars.sequelize.fn('min', db.calendars.sequelize.col('calendars.price')), {
            $gte: 0,
          })
  }).then(function(graphData){
    res.render('index.handlebars', {graphData : graphData});
    });
});


 router.post("/location/create",function(req,res){
        var x = 10;
        var y = 10;
        var qDate = new Date();
        if (req.body.Date && req.body.Date.length) {
              qDate = req.body.Date;
        }
        
        db.summaries.findAll({
          attributes: [ 'neighbourhood', 'weekof', 'monthof', 'Min_price','Max_price','Avg_price'],
          where: { neighbourhood:  req.body.Neighbourhood ,
                  room_type:  req.body.RoomType,
                  accommodates: req.body.Guests,
                  weekof: db.listings.sequelize.fn('week', qDate)
                        }
          }).then(function(priceData){
            if (priceData && priceData.length) {
                pData = priceData;
            }
            else{
                pData = [ { neighbourhood: "There is no data Available for " + req.body.Neighbourhood,
                           weekof: 0,
                           monthof: 0,
                           Min_price: '0',
                           Max_price: '0',
                           Avg_price: '0' }];   
            }
          res.render('index.handlebars', {priceData : pData});
        });

    });
router.post("/address",function(req,res){
res.render('index.handlebars', {priceData : ""});
});

module.exports = router;
