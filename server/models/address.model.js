const mongoose = require('mongoose');
const {toJSON, paginate} = require('./plugins');

const AddressSchema = mongoose.Schema({
    city: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true,
    },
    description: {
        type: String
    }
})

AddressSchema.plugin(toJSON);
AddressSchema.plugin(paginate);

const Address = mongoose.model('Address', AddressSchema);
module.exports = Address;
