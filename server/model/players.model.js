import mongoose from 'mongoose'
const { Schema, model } = mongoose

const PlayerSchema = new Schema({
    _id: {
        type: Number,
        required: [true, "id is required"]
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
const Player = model('player', PlayerSchema);

export default Player