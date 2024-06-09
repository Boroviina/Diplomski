const mongoose = require('mongoose');
const {toJSON, paginate} = require('./plugins');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
    },
    phoneNumber: {
        type: String
    }
})

contactSchema.plugin(toJSON);
contactSchema.plugin(paginate);

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;