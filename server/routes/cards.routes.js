import CardService from '../services/cards.services.js';
import express from 'express'

const cardsRouter = new express.Router()

cardsRouter.get('/', (req, res) => CardService.findAllCards(req, res));
cardsRouter.get('/:id', (req, res) => CardService.findOneSingleCard(req, res));
cardsRouter.post('/', (req, res) => CardService.createNewCard(req, res));
cardsRouter.put('/edit/:id', (req, res) => CardService.updateExistingCard(req, res));
cardsRouter.delete('/delete/:id', (req, res) => CardService.deleteAnExistingCard(req, res));


export default cardsRouter