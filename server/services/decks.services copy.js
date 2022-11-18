import Deck from "../model/decks.model.js"

class DeckService{

static findAllDecks = async (res) => {
    try {
        return res.status(200).json(await Deck.find())
    } catch (err) {
        return res.status(500).json(err)
    }
}

static findOneSingleDeck = async (req, res) => {
    
    try {
        return res.json(await Deck.find({_id: req.params.id}))
    } catch (err) {
        return res.json({ message: "Deck not found", error: err })
    }
}

static createNewDeck = async (req, res) => {
    try{
        return res.status(201).json(await Deck.create(req.body))
    } catch (err) {
        return res.status(422).json({ message: 'Something went wrong', error: err })
    }
}

static updateExistingDeck = async (req, res) => {
    try {
        return res.json(await Deck.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        ))
    } catch (err) {
        return res.status(422).json({ message: 'Something went wrong', error: err })
    }
}

static deleteAnExistingDeck = async (req, res) => {
    try {
        return res.json(await Deck.deleteOne({ _id: req.params.id }))
    } catch (err) {
        return res.json({ message: 'Something went wrong', error: err })
    }
}
}

export default DeckService