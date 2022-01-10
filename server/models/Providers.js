const mongoose = require("mongoose")

const { Schema } = mongoose;

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

const Providers = mongoose.model("Providers", ProvidersSchema)

module.exports = Providers;