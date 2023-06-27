const mongoose = require("mongoose")

const schholSchema = new mongoose.Schema({

  name: {
    type: String
  },

})

schholSchema.set("timestamps", true)
schholSchema.set("toJSON", { virtuals: true })
schholSchema.set("toObject", { virtuals: true })



module.exports = mongoose.model("School", schholSchema)
