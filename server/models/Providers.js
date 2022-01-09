const mongoose = require("mongoose")

const { Schema } = mongoose;

const ProvidersSchema = new Schema({
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },

    facilityId:{
        type: Number,
    }


})

const Providers = mongoose.model("Providers", ProvidersSchema)

module.exports = Providers;