const mongoose = require("mongoose")

const FacilitiesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    address:{
        type: String,
    }


})

module.exports = mongoose.model("Facilities", FacilitiesSchema)
