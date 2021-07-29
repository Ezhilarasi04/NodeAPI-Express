
const express = require('express');
const app = express();



app.get('/add/:n1/:n2', (req, res) => {
    var num1 = Number(req.params.n1);
    var num2 = Number(req.params.n2);
    var sum = num1+num2;
    var result = String(sum);
    var inJs = {"number1" : num1, "number2" : num2, "result" : result};
    var inJson = JSON.stringify(inJs);
    res.send(inJson); 
});

app.get('/subtract/:n1/:n2', (req, res) => {
    var num1 = Number(req.params.n1);
    var num2 = Number(req.params.n2);
    var sub = num1-num2;
    var result = String(sub);
    var inJs = {"number1" : num1, "number2" : num2, "result" : result};
    var inJson = JSON.stringify(inJs);
    res.send(inJson); 
});

app.get('/multiply/:n1/:n2', (req, res) => {
    var num1 = Number(req.params.n1);
    var num2 = Number(req.params.n2);
    var mul = num1*num2;
    var result = String(mul);
    var inJs = {"number1" : num1, "number2" : num2, "result" : result};
    var inJson = JSON.stringify(inJs);
    res.send(inJson); 
});

app.get('/divide/:n1/:n2', (req, res) => {
    var num1 = Number(req.params.n1);
    var num2 = Number(req.params.n2);
    var div = num1/num2;
    var result = String(div);
    var inJs = {"number1" : num1, "number2" : num2, "result" : result};
    var inJson = JSON.stringify(inJs);
    res.send(inJson); 
});


//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port %s..', +port));
