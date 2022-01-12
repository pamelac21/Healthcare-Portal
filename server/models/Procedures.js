const mongoose = require("mongoose")

const { Schema } = mongoose;

const proceduresSchema = new Schema({
    Id:{
        type: Number,
        required: true,
    },
    Procedure:{
        type: String,
        required: true,
    },
    CPTCode:{
        type: String,
    },
    Price:{
        type: Number,

    },
    FacilityId:{
        type: Number,
    },
    bodypart:{
        type: String
    }



})

const Procedures = mongoose.model("Procedures", proceduresSchema)

module.exports = Procedures;
