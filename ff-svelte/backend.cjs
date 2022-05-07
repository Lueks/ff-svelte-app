
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios")


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
    let fullPayload= req.body.value;
    let lastElement = fullPayload[fullPayload.length - 1]
    res.send({message: `${lastElement.category}: ${lastElement.name} gespeichert`})
    console.log(lastElement)
})

app.listen(8081, () => {console.log("Server listening")});