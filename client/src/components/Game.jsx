import React from 'react'
import DungeonEvent from '../components/DungeonEvent'
import useGame from '../hooks/useGame'

const Game = ({cards, events, enemies}) => {
    const {
        foe, player, deck, hand, selected, usedDeck, handleSubmit, handleHand, addRandomCardToDeck, addCardToDeck, drawCardToHand, getRandomChoices, handleSelected, shuffleDeck, getRandomEvent, getRandomEnemy, sanctuaryHeal, sanctuaryTraining
    } = useGame(cards, events, enemies)

console.log(deck);
    return (
        <div>
        <DungeonEvent foe={ foe } deck = { deck } usedDeck = { usedDeck } selected = { selected } hand = { hand } player = { player } cards = { cards } shuffleDeck = { shuffleDeck } handleSelected = { handleSelected } drawCardToHand = { drawCardToHand } getRandomEvent = { getRandomEvent } getRandomChoices = { getRandomChoices } addRandomCardToDeck = { addRandomCardToDeck } addCardToDeck = { addCardToDeck } getRandomEnemy = { getRandomEnemy } sanctuaryHeal = { sanctuaryHeal } sanctuaryTraining = { sanctuaryTraining } handleHand = { handleHand } handleSubmit = { handleSubmit } />
        </div>
    )
}

export default Game