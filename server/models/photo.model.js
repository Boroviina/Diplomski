const mongoose = require('mongoose');
const {toJSON, paginate} = require('./plugins');

const photoSchema = mongoose.Schema({
    uri: {
        type: String,
        required: true
    }
})

photoSchema.plugin(toJSON);
photoSchema.plugin(paginate);

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;