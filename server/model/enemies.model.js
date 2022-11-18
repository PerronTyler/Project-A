import mongoose from 'mongoose'
const { Schema, model } = mongoose

const EnemySchema = new Schema({
    name: {
        type: String,
        required: [true, "the name is required"],
        minLength: [3, "name must be at least 3 characters"]
    },
    _id: {
        type: Number,
        required: [true, "id is required"]
    },
    magnitude: {
        type: Number,
        required: [true, "magnitude is required"]
    },
    training:{
            type: String,
            required: [true, "training level is required"]
        },
    health:{
            type: String,
            required: [true, "health is required"]
        }
})
const Enemy = model('enemy', EnemySchema);

export default Enemy