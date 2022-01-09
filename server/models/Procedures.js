const mongoose = require("mongoose")

const { Schema } = mongoose;

const proceduresSchema = new Schema({
    id:{
        type: Number,
        required: true,
    },
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
    facilityId:{
        type: Number,
    }



})

const Procedures = mongoose.model("Procedures", proceduresSchema)

module.exports = Procedures;
