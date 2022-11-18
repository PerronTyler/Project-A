import DeckService from '../services/cards.services.js';
import express from 'express'

const decksRouter = new express.Router()

decksRouter.get('/', (req, res) => DeckService.findAllDecks(res));
decksRouter.get('/:id', (req, res) => DeckService.findOneSingleDeck(req, res));
decksRouter.post('/', (req, res) => DeckService.createNewDeck(req, res));
decksRouter.put('/edit/:id', (req, res) => DeckService.updateExistingDeck(req, res));
decksRouter.delete('/delete/:id', (req, res) => DeckService.deleteAnExistingDeck(req, res));


export default decksRouter