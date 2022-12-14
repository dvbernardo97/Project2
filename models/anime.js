const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        comment: String,
    //     user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    }
)
const animeSchema = new Schema(
    {
        name: String,
        comments: [commentSchema]
    }
)

module.exports = mongoose.model("Anime", animeSchema);