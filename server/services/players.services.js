import Player from "../model/players.model.js"

class PlayerService{

    static findAllPlayers = async (req, res) => {
    try { 
        const help = await Player.find()
        console.log(help);
        return res.status(200).json(await Player.find())
    } catch (err) {
        return res.status(500).json(err)
    }
}

static findOneSinglePlayer = async (req, res) => {
    
    try {
        return res.json(await Player.find({_id: req.params.id}))
    } catch (err) {
        return res.json({ message: "Player not found", error: err })
    }
}

static createNewPlayer = async (req, res) => {
    try{
        return res.status(201).json(await Player.create(req.body))
    } catch (err) {
        return res.status(422).json({ message: 'Something went wrong', error: err })
    }
}

static updateExistingPlayer = async (req, res) => {
    try {
        return res.json(await Player.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        ))
    } catch (err) {
        return res.status(422).json({ message: 'Something went wrong', error: err })
    }
}

static deleteAnExistingPlayer = async (req, res) => {
    try {
        return res.json(await Player.deleteOne({ _id: req.params.id }))
    } catch (err) {
        return res.json({ message: 'Something went wrong', error: err })
    }
}
}

export default PlayerService