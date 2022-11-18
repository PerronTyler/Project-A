import PlayerService from '../services/players.services.js';
import express from 'express'

const playersRouter = new express.Router()

playersRouter.get('/', (req, res) => PlayerService.findAllCards(req, res));
playersRouter.get('/:id', (req, res) => PlayerService.findOneSingleCard(req, res));
playersRouter.post('/', (req, res) => PlayerService.createNewCard(req, res));
playersRouter.put('/edit/:id', (req, res) => PlayerService.updateExistingCard(req, res));
playersRouter.delete('/delete/:id', (req, res) => PlayerService.deleteAnExistingCard(req, res));


export default playersRouter