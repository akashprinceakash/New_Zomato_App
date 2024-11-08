const mongoose = require('mongoose');

const mealtypeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            requied: true,
        },
        image: {
            type: String,
            requied: true,
        },
        meal_type: {
            type: Number,
            requied: true,
        }
    });
const mealtypes = mongoose.model("mealtypes", mealtypeSchema);
module.exports = mealtypes