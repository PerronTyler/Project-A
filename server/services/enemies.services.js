import Enemy from "../model/enemies.model.js"

class EnemyService{

static findAllEnemies = async (res) => {
    try {
        return res.status(200).json(await Enemy.find())
    } catch (err) {
        return res.status(500).json(err)
    }
}

static findOneSingleEnemy = async (req, res) => {
    
    try {
        return res.json(await Enemy.find({_id: req.params.id}))
    } catch (err) {
        return res.json({ message: "Enemy not found", error: err })
    }
}

static createNewEnemy = async (req, res) => {
    try{
        return res.status(201).json(await Enemy.create(req.body))
    } catch (err) {
        return res.status(422).json({ message: 'Something went wrong', error: err })
    }
}

static updateExistingEnemy = async (req, res) => {
    try {
        return res.json(await Enemy.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        ))
    } catch (err) {
        return res.status(422).json({ message: 'Something went wrong', error: err })
    }
}

static deleteAnExistingEnemy = async (req, res) => {
    try {
        return res.json(await Enemy.deleteOne({ _id: req.params.id }))
    } catch (err) {
        return res.json({ message: 'Something went wrong', error: err })
    }
}
}

export default EnemyService