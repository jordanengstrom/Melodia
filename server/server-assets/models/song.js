var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId
var SchemaName = "Song";


var schema = new Schema({
trackName: {type: String, required: true},
artistName: {type: String, required: true},
artworkUrl60: {type: String, required: true},
collectionName: {type: String, required: true},
rating: {type: Number, required: true, default: 0},
previewUrl: {type: String, required: true}
});

module.exports = mongoose.model(SchemaName, schema);