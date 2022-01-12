const mongoose = require("mongoose");


const { Schema, model } = mongoose;

const facilitiesSchema = new Schema({
    FacilityId:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    address:{
        type: String,
    }
},
    {
        toJSON: {
          getters: true
        }
      }


)

const Facilities = model("Facilities", facilitiesSchema)

module.exports = Facilities;

