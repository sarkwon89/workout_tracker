const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true
});


//Routes

//render exercise html page with this route so user can see that page when he or she clicks "new workout"
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

//grab work ids
app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(data => {
        res.json(data)
    })

})

//route to update
app.put("/api/workouts/:id", (req, res) => {
    db.Workout.update(req.body, {
        where: {
            _id: req.params.id
        }
    }).then(data => res.json(data));
})

//route to create to post aka create an exercise
app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercises: req.body } }, { new: true }))
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });


// app.post("/api/workouts", (req, res) => {
//     console.log(req.body)

//     db.Workout.create({}).then((data) => {

//         console.log(data._id)

//         db.Workout.findOneAndUpdate({
//             where: {
//                 _id: data._id
//             }
//         }, {
//             $push: 
//                 {exercises: req.body}
//         }, {
//             new: true
//         });
//         console.log(data)
//         res.json(data)
//     })
// });


//render stats html page with this route so user can see that page when he or she clicks "new workout"
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"));
});

//this route display 
// app.get("/api/workouts/range", (req, res) => {

// })


app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`);
});