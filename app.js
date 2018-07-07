
const express = require('express'),
    bodyParser = require('body-parser'),
    check = require('./checker.js');

const app = express();
app.use(bodyParser.json());


app.set('port', (process.env.PORT || 5000));

app.post('/check', function(req,res) {
	//check('https://localhost:5000/count', {"lato1":5, "lato2":7}, {"count": 3}, 200)
	console.log(req.body.url);
	console.log(req.body.invocationParameters);
	console.log(req.body.expectedResultData);
	console.log(req.body.expectedResultStatus);
	check(req.body.url, req.body.invocationParameters, req.body.expectedResultData, req.body.expectedResultStatus)
	.then(result => {
		res.status(200).json(result)
	});
});


// a useless function that returns a fixed object. you can use it, if you want, for testing purposes
app.get('/count',function (req, res) {
    res.json({count: 3})
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
