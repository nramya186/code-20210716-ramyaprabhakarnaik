const express = require("express");
const bodyparser = require("body-parser");

const app = express();
//const port = 3000;
app.use(bodyparser.urlencoded({ extended: true }));


// app.listen(port, () => {
//     console.log('listening on port 3000');

// });

app.get('/BMI_Calculator', function(req, res) {
    res.sendFile(__dirname + "/" + '/bmicalculator.html');

});

app.post('/BMI_Calculator', function(req, res) {
    weight = parseFloat(req.body.Weight);
    height = parseFloat(req.body.Height);
    bmi = weight / (height * height);

    bmi = bmi.toFixed();

    req_name = req.body.Name;

    //res.send('your BMI is: ' + bmi);

    // Condition for BMI
    if (bmi < 18.4) {
        res.send("<h3>hey! " + req_name +
            " your BMI is around: " + bmi +
            "<centre><h1>You are Underweight!malnutrition risk");
    } else if (19 <= bmi && bmi < 24.9) {
        res.send("<h3>hey! " + req_name +
            " your BMI is around: " + bmi +
            "<centre><h1>You are Normalweight! low risk");
    } else if (25 <= bmi && bmi < 29.9) {
        res.send("<h3>hey! " + req_name +
            " your BMI is around: " + bmi +
            "<centre><h1>You are Overweight! Enhanced risk");

    } else if (30 <= bmi && bmi < 34.9) {
        res.send("<h3>hey! " + req_name +
            " your BMI is around: " + bmi +
            "<centre><h1>You are  in Medium risk");

    } else if (35 <= bmi && bmi < 39.9) {
        res.send("<h3>hey! " + req_name +
            " your BMI is around: " + bmi +
            "<centre><h1>You are  in High risk");

    } else {
        res.send("<h3>hey! " + req_name +
            " your BMI is around: " + bmi +
            "<centre><h1>You are in very very high risk");
    }
});

app.listen(7777, function() {
    console.log("port active at 7777");
});