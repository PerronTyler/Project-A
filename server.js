import express from 'express'
import "./server/config/mongoose.config.js";
import cors from 'cors'
import decksRouter from './server/routes/decks.routes.js'
import cardsRouter from './server/routes/cards.routes.js'
import bossesRouter from './server/routes/bosses.routes.js';
import enemiesRouter from './server/routes/enemies.routes.js';
import eventsRouter from './server/routes/events.routes.js';
// import playersRouter from './server/routes/players.routes'

const app = express();
const port = 8000
app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

const rootRouter = new express.Router()
rootRouter.use("/api/decks", decksRouter)
rootRouter.use("/api/cards", cardsRouter)
rootRouter.use("/api/enemies", enemiesRouter)
rootRouter.use("/api/bosses", bossesRouter)
rootRouter.use("/api/events", eventsRouter)
// rootRouter.use("/api/players", playersRouter)
app.use(rootRouter)


app.listen(port, () => console.log(`The server is all fired up on port ${port}`));