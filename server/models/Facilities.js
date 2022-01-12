const mongoose = require("mongoose");


const { Schema } = mongoose;

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


})

const Facilities = mongoose.model("Facilities", facilitiesSchema)

module.exports = Facilities;

