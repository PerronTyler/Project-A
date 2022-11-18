import EnemyService from '../services/enemies.services.js';
import express from 'express'

const enemiesRouter = new express.Router()

enemiesRouter.get('/', (req, res) => EnemyService.findAllEnemies(res));
enemiesRouter.get('/:id', (req, res) => EnemyService.findOneSingleEnemy(req, res));
enemiesRouter.post('/', (req, res) => EnemyService.createNewEnemy(req, res));
enemiesRouter.put('/edit/:id', (req, res) => EnemyService.updateExistingEnemy(req, res));
enemiesRouter.delete('/delete/:id', (req, res) => EnemyService.deleteAnExistingEnemy(req, res));


export default enemiesRouter