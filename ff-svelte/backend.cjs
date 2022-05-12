
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios")

const datastore = require("nedb");
const { json } = require("express/lib/response");
let db = new datastore({filename: 'expressionDB', autoload: true});


app.use(express.json())
app.use(cors())

//Load Attributes from the Geoserver by sending a getFeature request



let describeFeatureTypeWFSUrl = "http://localhost:8080/geoserver/topp/wfs?service=WFS&version=2.0.0&request=DescribeFeatureType&outputFormat=application/json&typeNames=topp:states"
const valueArray = [];
const populateArray = (array, data) => {array.push(data)};

axios.get(describeFeatureTypeWFSUrl).then((res) => {
  res.data.featureTypes[0].properties.forEach((attribute) => {
    if (attribute.name != "the_geom") {
      valueArray.push(attribute.name);
    };
  });
}).catch((err) => {console.log(err)});

//Server route to get attributes for the expression

app.get("/getattributes", (req, res) => {
    res.send(valueArray);
});






app.post("/receiveattributes", (req, res) => {
    db.remove({}, {multi: true}, (err, numRemoved) => {
        db.loadDatabase((err) => {})
    })
    
    let Payload= req.body;
    console.log(Payload)
    // db.remove({}, {multi: true}, function (err, numRemoved){
    //     console.log(err);
    //     db.loadDatabase(function (err) {console.log(err)})});
    db.insert(Payload, (err, newDoc) => {
        if (err) {
            console.error(err)
        }
        else {
            console.log(`${newDoc} received`)
        }
    });
    //res.send("Payload received") 
});

app.get('/sendattributes', (req, res) => {
    db.find({}, (err, docs) => {
        res.send(docs)
    })
})

app.listen(8081, () => {console.log("Server listening")});