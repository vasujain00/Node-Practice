var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var promotionRouter = express.Router();
promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
.all(function(req,res,next){
	res.wrtieHead(200, { 'Content-Type' : 'Text/Plain' });
})

.get(function(req,res,next){
        res.end('Will send all the Promotions to you!');
})

.post(function(req, res, next){
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);    
})

.delete(function(req, res, next){
        res.end('Deleting all Promotions');
});

dishRouter.route('/:proId')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send details of the Promotion: ' + req.params.proId +' to you!');
})

.put(function(req, res, next){
        res.write('Updating the Promotion: ' + req.params.proId + '\n');
    res.end('Will update the promotion: ' + req.body.name + 
            ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting promotion: ' + req.params.proId);
});

module.exports = promotionRouter;
