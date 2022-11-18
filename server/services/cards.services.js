import Card from "../model/cards.model.js"

class CardService{

    static findAllCards = async (req, res) => {
    try { 
        const help = await Card.find()
        console.log(help);
        return res.status(200).json(await Card.find())
    } catch (err) {
        return res.status(500).json(err)
    }
}

static findOneSingleCard = async (req, res) => {
    
    try {
        return res.json(await Card.find({_id: req.params.id}))
    } catch (err) {
        return res.json({ message: "Card not found", error: err })
    }
}

static createNewCard = async (req, res) => {
    try{
        return res.status(201).json(await Card.create(req.body))
    } catch (err) {
        return res.status(422).json({ message: 'Something went wrong', error: err })
    }
}

static updateExistingCard = async (req, res) => {
    try {
        return res.json(await Card.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        ))
    } catch (err) {
        return res.status(422).json({ message: 'Something went wrong', error: err })
    }
}

static deleteAnExistingCard = async (req, res) => {
    try {
        return res.json(await Card.deleteOne({ _id: req.params.id }))
    } catch (err) {
        return res.json({ message: 'Something went wrong', error: err })
    }
}
}

export default CardService