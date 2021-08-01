
const express = require('express');
const app = express();

const cors = require('cors');
app.use (cors());
/*app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});*/

app.get('/add/:n1/:n2', (req, res) => {
    var num1 = Number(req.params.n1);
    var num2 = Number(req.params.n2);
    var sum = num1+num2;
    var result = String(sum);
    var inJs = {"res" : result};
    var inJson = JSON.stringify(inJs);
    //res.json({inJson}); 
    res.send(inJson);
});

app.get('/subtract/:n1/:n2', (req, res) => {
    var num1 = Number(req.params.n1);
    var num2 = Number(req.params.n2);
    var sub = num1-num2;
    var result = String(sub);
    var inJs = {"res" : result};
    var inJson = JSON.stringify(inJs);
    res.send(inJson); 
});

app.get('/multiply/:n1/:n2', (req, res) => {
    var num1 = Number(req.params.n1);
    var num2 = Number(req.params.n2);
    var mul = num1*num2;
    var result = String(mul);
    var inJs = {"res" : result};
    var inJson = JSON.stringify(inJs);
    res.send(inJson); 
});

app.get('/divide/:n1/:n2', (req, res) => {
    var num1 = Number(req.params.n1);
    var num2 = Number(req.params.n2);
    var div = num1/num2;
    var result = String(div);
    var inJs = {"res" : result};
    var inJson = JSON.stringify(inJs);
    res.send(inJson); 
});


//PORT
const port = process.env.PORT || 8000;
app.listen(port, () => console.log('Listening on port %s..', +port));
