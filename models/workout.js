const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  
  exercises: {
    type: Array 
  },
  day: {
    type: Date,
    default:new Date(new Date().setDate(new Date().getDate() )),
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
