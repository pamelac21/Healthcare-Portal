const mongoose = require("mongoose")

const ProvidersSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Providers", ProvidersSchema)