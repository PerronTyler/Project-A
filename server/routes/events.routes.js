import EventService from '../services/events.services.js';
import express from 'express'

const eventsRouter = new express.Router()

eventsRouter.get('/', (req, res) => EventService.findAllEvents(req, res));
eventsRouter.get('/:id', (req, res) => EventService.findOneSingleEvent(req, res));
eventsRouter.post('/', (req, res) => EventService.createNewEvent(req, res));
eventsRouter.put('/edit/:id', (req, res) => EventService.updateExistingEvent(req, res));
eventsRouter.delete('/delete/:id', (req, res) => EventService.deleteAnExistingEvent(req, res));


export default eventsRouter