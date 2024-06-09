const mongoose = require('mongoose');
const {toJSON, paginate} = require('./plugins');
const {problemType} = require('./enums/ProblemType');


const ProblemsSchema = mongoose.Schema({
    problemType: {
        type: String,
        enum: problemType,
        required: [true, "The field must be filled"]
    },
    description: {
        type: String,
        required: true
    },
    photos: {
        type: mongoose.Schema.ObjectId,
        ref: 'Photo'
    },
    address: {
        type: mongoose.Schema.ObjectId,
        ref: 'Address'
    },
    contact: {
        type: mongoose.Schema.ObjectId,
        ref: 'Contact'
    }
})

ProblemsSchema.plugin(toJSON);
ProblemsSchema.plugin(paginate);

const Problem = mongoose.model('Problem', ProblemsSchema);
module.exports = Problem;