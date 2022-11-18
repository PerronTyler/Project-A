import Boss from "../model/bosses.model.js"

class BossService{

static findAllBosses = async (res) => {
    try {
        return res.status(200).json(await Boss.find())
    } catch (err) {
        return res.status(500).json(err)
    }
}

static findOneSingleBoss = async (req, res) => {
    
    try {
        return res.json(await Boss.find({_id: req.params.id}))
    } catch (err) {
        return res.json({ message: "Boss not found", error: err })
    }
}

static createNewBoss = async (req, res) => {
    try{
        return res.status(201).json(await Boss.create(req.body))
    } catch (err) {
        return res.status(422).json({ message: 'Something went wrong', error: err })
    }
}

static updateExistingBoss = async (req, res) => {
    try {
        return res.json(await Boss.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        ))
    } catch (err) {
        return res.status(422).json({ message: 'Something went wrong', error: err })
    }
}

static deleteAnExistingBoss = async (req, res) => {
    try {
        return res.json(await Boss.deleteOne({ _id: req.params.id }))
    } catch (err) {
        return res.json({ message: 'Something went wrong', error: err })
    }
}
}

export default BossService