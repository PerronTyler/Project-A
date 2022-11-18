import Event from "../model/events.model.js"

class EventService{

    static findAllEvents = async (req, res) => {
    try { 
        const help = await Event.find()
        console.log(help);
        return res.status(200).json(await Event.find())
    } catch (err) {
        return res.status(500).json(err)
    }
}

static findOneSingleEvent = async (req, res) => {
    
    try {
        return res.json(await Event.find({_id: req.params.id}))
    } catch (err) {
        return res.json({ message: "Event not found", error: err })
    }
}

static createNewEvent = async (req, res) => {
    try{
        return res.status(201).json(await Event.create(req.body))
    } catch (err) {
        return res.status(422).json({ message: 'Something went wrong', error: err })
    }
}

static updateExistingEvent = async (req, res) => {
    try {
        return res.json(await Event.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        ))
    } catch (err) {
        return res.status(422).json({ message: 'Something went wrong', error: err })
    }
}

static deleteAnExistingEvent = async (req, res) => {
    try {
        return res.json(await Event.deleteOne({ _id: req.params.id }))
    } catch (err) {
        return res.json({ message: 'Something went wrong', error: err })
    }
}
}

export default EventService