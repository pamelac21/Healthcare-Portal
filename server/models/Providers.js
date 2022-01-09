const mongoose = require("mongoose")

const { Schema } = mongoose;

const ProvidersSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    title:{
        type: String,

    },
    facilityId:{
        type: Number,
    }


})

const Providers = mongoose.model("Providers", ProvidersSchema)

module.exports = Providers;