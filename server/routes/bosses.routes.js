import BossService from '../services/cards.services.js';
import express from 'express'

const bossesRouter = new express.Router()

bossesRouter.get('/', (req, res) => BossService.findAllBosses(res));
bossesRouter.get('/:id', (req, res) => BossService.findOneSingleBoss(req, res));
bossesRouter.post('/', (req, res) => BossService.createNewBoss(req, res));
bossesRouter.put('/edit/:id', (req, res) => BossService.updateExistingBoss(req, res));
bossesRouter.delete('/delete/:id', (req, res) => BossService.deleteAnExistingBoss(req, res));


export default bossesRouter