const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Park = new Schema(
    {
        id: { type: Number, required: true, unique: true },
        name: { type: String, required: true },
        address: { type: String, required: true },
        parkType: { type: String, required: true },
        parkTypeDescription: { type: String, required: true },
        capacity: { type: Number, required: true },
        workingHours: { type: String, required: true },
        district: { type: String, required: true },
        longitude: { type: Number, required: true },
        latitude: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('park', Park)