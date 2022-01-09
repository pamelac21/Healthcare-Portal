const mongoose = require("mongoose")

const { Schema } = mongoose;

const facilitiesSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    address:{
        type: String,
    }


})

module.exports = mongoose.model("Facilities", FacilitiesSchema)

