import mongoose from 'mongoose'
const { Schema, model } = mongoose

const EventSchema = new Schema({
    name: {
        type: String,
        required: [true, "the name is required"],
        minLength: [3, "name must be at least 3 characters"]
    },
    _id: {
        type: Number,
        required: [true, "id is required"]
    },
    description:{
            type: String,
            required: [true, "description is required"]
        }
})
const Event = model('event', EventSchema);

export default Event