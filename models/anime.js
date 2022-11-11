const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const homeSchema = new Schema(
    {
        name: String,
        required: true,
    }
)

module.exports = mongoose.model("Home", homeSchema);