const mongoose = require("mongoose")

const { Schema } = mongoose;

const proceduresSchema = new Schema({
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

const Procedures = mongoose.model("Procedures", proceduresSchema)

module.exports = Procedures;