import mongoose from 'mongoose'
const { Schema, model } = mongoose
const cardSchema = new Schema({
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
    type:{
            type: String,
            required: [true, "type is required"]
        },
    description:{
            type: String,
            required: [true, "description is required"]
        }
})
const DeckSchema = new Schema({
    deckName: {type: String},
    cards: [cardSchema]
})

const Deck = model('deck', DeckSchema);

export default Deck