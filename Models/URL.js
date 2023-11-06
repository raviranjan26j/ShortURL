const mongoose = require('mongoose');

const URLSchema = mongoose.Schema(
    {
        ShortURL: { type :String,
        required:true,
        Unique:true }, 
        URL : { type: String,
        Required:true},
        visitHistory: [{TimeStamp:{type: Number}}],
        CreatedBy:{ type: mongoose.Schema.Types.ObjectId, ref:'user'}
    }, { timestamps: true}
);

const URL = mongoose.model("URL",URLSchema);
module.exports = URL;
