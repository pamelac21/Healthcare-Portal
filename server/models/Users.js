const mongoose = require("mongoose")

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const usersSchema = new Schema({
/*username:{
  type: String,
  required: true
},*/
email:{
    type: String,
    required: true,
    unique: true,
    //match: [/.+@.+\..+/, 'Must match an email address!']
},
password:{
    type:String,
    required: true,
    minlength: 5
}

});

  // hash user password
usersSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

  // custom method to compare and validate password for logging in
usersSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

/* if you want to save something associated with the user (add toJSON: {virtuals: true}) in new Schema ^^
userSchema.virtual('blankCount').get(function () {
  return this.savedBlanks.length;
});
*/

const Users = mongoose.model("Users", usersSchema)

module.exports = Users;