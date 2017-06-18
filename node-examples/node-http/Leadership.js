var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var Leadership = express.Router();
Leadership.use(bodyParser.json());

Leadership.route('/')
.all(function(req,res,next){
	res.wrtieHead(200, { 'Content-Type' : 'Text/Plain' });
})

.get(function(req,res,next){
        res.end('Will send all the leaders to you!');
})

.post(function(req, res, next){
    res.end('Will add the Leader: ' + req.body.name + ' with details: ' + req.body.description);    
})

.delete(function(req, res, next){
        res.end('Deleting all Leaders');
});

dishRouter.route('/:lId')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send details of the Leader: ' + req.params.lId +' to you!');
})

.put(function(req, res, next){
        res.write('Updating the Info of Leader: ' + req.params.lId + '\n');
    res.end('Will update the leader: ' + req.body.name + 
            ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting Leader: ' + req.params.lId);
});

module.exports = Leadership;
