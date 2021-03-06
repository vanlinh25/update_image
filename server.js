const express = require("express");
const fileUpload = require("express-fileupload");
// const FormData= require("formdata-node")
var FormData = require("form-data");
var request = require("request");
const axios = require("axios");
const app = express();

const PORT = 8000;

// default options
app.use(fileUpload());

app.get("/", async (req, res) => {
  try {
    var formData = {
      image:
        "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH3SURBVHgB7ZTBahRBEIaruntnDOwGzbjIBGT2FEH05lVYDXrTV/DmI0QSD8FD3HfwCbx40msgkKvrSTzsKYGQgQxrQsZoeqe7y5pZNy7BhN0ZIYekDk1P9T/9dVdXFcCVXbTh+EfyfKnhH8lQO2qMfIqoL6VIZ9c7/TLaAhC3X7WUUPeBKDz7KJgCuq6xbjCptrne6amCjPIp/wDnGvFJCduszeeAhDoDsy1IaCFokEscQiCsDEAMtewaAqYyol2w2L25uRafJUkerbwczacGNDc6n6bRT38DtsPF5YWMZAuBAkt/H1kQ9oONtQ+VAdpxfJ1JDVKsEHsjvxEQnNaWAoCBjwfx0fdbUb1urWtwanpSYWoNbf0fQA0f3Ihm57gGfOCsMo59RR4VWf+uMgAdzFlyPYcutlxYP47toH5Neu7Y+qe1pQD7O4fvOTzRr0zNKwWePyOGCx6lPO5WBly/3XihOSxSgKbMDk4WhFjgsVsZwI/8mcf4vGKrBGhuvv0yqbYUIHmyNO90rVVTEHH/8SjPJhgWGkeOOymVBySPXz8DQ6GQBDbfZ6xHOqS80IJ/34CbmATc+ikpPoi99N63N8Xj7SwuB5KLSaGIOEHvFG36j3YvM9tmf0aPa33NgBqESKJ1svfXu6seTGB77dV68nAlhEtlvwFeqN3xZ05ZwwAAAABJRU5ErkJggg==",
    };
    const url =
      "https://api.imgbb.com/1/upload?key=4f184193b93d21d3bafd6ac1f970ce8e";
    // var form = new FormData();
    // form.append('image', 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH3SURBVHgB7ZTBahRBEIaruntnDOwGzbjIBGT2FEH05lVYDXrTV/DmI0QSD8FD3HfwCbx40msgkKvrSTzsKYGQgQxrQsZoeqe7y5pZNy7BhN0ZIYekDk1P9T/9dVdXFcCVXbTh+EfyfKnhH8lQO2qMfIqoL6VIZ9c7/TLaAhC3X7WUUPeBKDz7KJgCuq6xbjCptrne6amCjPIp/wDnGvFJCduszeeAhDoDsy1IaCFokEscQiCsDEAMtewaAqYyol2w2L25uRafJUkerbwczacGNDc6n6bRT38DtsPF5YWMZAuBAkt/H1kQ9oONtQ+VAdpxfJ1JDVKsEHsjvxEQnNaWAoCBjwfx0fdbUb1urWtwanpSYWoNbf0fQA0f3Ihm57gGfOCsMo59RR4VWf+uMgAdzFlyPYcutlxYP47toH5Neu7Y+qe1pQD7O4fvOTzRr0zNKwWePyOGCx6lPO5WBly/3XihOSxSgKbMDk4WhFjgsVsZwI/8mcf4vGKrBGhuvv0yqbYUIHmyNO90rVVTEHH/8SjPJhgWGkeOOymVBySPXz8DQ6GQBDbfZ6xHOqS80IJ/34CbmATc+ikpPoi99N63N8Xj7SwuB5KLSaGIOEHvFG36j3YvM9tmf0aPa33NgBqESKJ1svfXu6seTGB77dV68nAlhEtlvwFeqN3xZ05ZwwAAAABJRU5ErkJggg==');

    // const response = await axios.post(url,form);
    request.post(
      { url: url, formData: formData },
      function cb(err, httpResponse, body) {
        if (err) {
          res.send(err);
        }
        res.send(body);
      }
    );
  } catch (error) {
    res.send(error);
  }
});
app.post("/upload", async function (req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send("No files were uploaded.");
    return;
  }

  try {
    const sampleFile = req.files.image;
    var base64data = new Buffer.from(sampleFile.data).toString("base64");

    res.send(base64data);
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT, function () {
  console.log("Express server listening on port ", PORT); // eslint-disable-line
});
