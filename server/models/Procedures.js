const mongoose = require("mongoose")
const facilitiesSchema = require('./Facilities')
const { Schema, model } = mongoose;

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
    },
    facility: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Facilities'
        }
      ],
},
{
    toJSON: {
      getters: true
    }



})

const Procedures = model("Procedures", proceduresSchema)

module.exports = Procedures;
