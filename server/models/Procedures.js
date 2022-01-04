const mongoose = require("mongoose")

const ProceduresSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    cpt:{
        type: String,
    },
    price:{
        type: Number,

    },
    specialtyId:{
        type: Number,
    }



})

module.exports = mongoose.model("Facilities", FacilitiesSchema)