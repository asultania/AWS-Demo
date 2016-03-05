var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var multer = require('multer');
var fs = require('fs');
var mongo = require('mongodb');
var _ = require('lodash');

var app = express();

app.set('port',8081);
app.use(express.static(__dirname + '/public', { maxAge: 31557600000 }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
   res.header("Cache-Control", "public, max-age=31557600000");
  next();
});

mongoose.connect('mongodb://localhost/AWSDemo');
mongoose.connection.once('open', function() {
app.models = require('./modelBundle');
	
var Features = mongoose.models.Feature;	
app.post("/addfeature", function (req, res) {
	var myDoc = { title: req.body.title, description: req.body.description,client:req.body.client,priority:req.body.priority,date:req.body.date,url:req.body.url,product:req.body.product};
        Features(myDoc).save(function (err, suc) {
		
		Features.findOneAndUpdate({client:req.body.client,priority:{$gte: req.body.priority}},
		{
			priority:req.body.priority+1
		}
		,function (err, suc) {
            if (err) { console.log(req.body.title); }
            else
            {
                if (!suc)
                { res.json({message:"sucess"}); }
                else
                return res.json(suc);
            }
        });
		});
    });
app.get("/viewfeature", function (req, res) {
        Features.find(function (err, suc) {
            if (err) { console.log(err); }
                else
                {                 
                   return res.json(suc);
                }
        });
    });	
	
var User = mongoose.models.User;	
app.get("/checkuser", function (req, res) {
User.findOne({ email: req.body.email,password:req.body.password }, function (err, suc) {
            if (err) { console.log(req.body.title); }
            else
            {
                if (!suc)
                { res.json({message:"success"}); }
                else
                    return res.json(suc);
            }
        });
    });
app.listen('8081');


});
 

