const mongoose = require("mongoose")

const { Schema, model } = mongoose;

const ProvidersSchema = new Schema({
    Id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },

    FacilityId:{
        type: Number,
    }


})

const Providers = model("Providers", ProvidersSchema)

module.exports = Providers;