import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
    health: 20,
    training:1,
    kills:0
}

const useGame = (cards, events, enemies) => {
    const navigate = useNavigate()
    const [deck, setDeck] = useState(null)
    const [hand, setHand] = useState([])
    const [selected, setSelected] = useState([])
    const [usedDeck, setUsedDeck] = useState([])
    const [player, setPlayer] = useState(initialState)
    const [foe, setFoe] = useState(null)

// Deck, Card, and Hand functions

    const buildDeck = () => {
        const tempCards = [] 
        for(let i = 0; i < 12; i++){
            const randomCardIndx = Math.floor(Math.random()* cards.length)
            tempCards.push(cards[randomCardIndx])
        }
        return tempCards
    }

    useEffect(() => {
        if(!deck){
            setDeck(buildDeck())
        }
    }, [])

    const getRandomChoices = () => {
        return [cards[Math.floor(Math.random()* cards.length)], cards[Math.floor(Math.random()* cards.length)]]
    }
    const addRandomCardToDeck = () => {
        const randomCardIndx = Math.floor(Math.random()* cards.length)
        setDeck([...deck, cards[randomCardIndx]])
        navigate('/dungeoncrawl')
    }
    const addCardToDeck = (card) => {
        setDeck([...deck, card])
        navigate('/dungeoncrawl')
    }
    const drawCardToHand = () => {
        if (deck !== []){
        const randomCardIndx = Math.floor(Math.random()* deck.length)
        setHand([...hand, deck[randomCardIndx]])
        setUsedDeck([...usedDeck, deck[randomCardIndx]])
        deck.splice(randomCardIndx,1)
        }
    }
    const handleSelected = (card) => {
        setSelected([...selected, card])
        const indx = hand.indexOf(card)
        hand.splice(indx,1)
    }
    const handleHand = (card) => {
        setHand([...hand, card])
        const indx = selected.indexOf(card)
        selected.splice(indx,1)
    }
    const shuffleDeck = () => {
        setDeck(usedDeck)
        setUsedDeck([])
    }

    // event functions
    const getRandomEvent = () => {
        const randomEvent = events[Math.floor(Math.random()* (events.length - 1))]
        navigate(`/dungeoncrawl/${randomEvent.name}/${randomEvent._id}`)
    }
    // player, enemy, boss functions
    const getRandomEnemy = () => {
        const newFoe = enemies[Math.floor(Math.random()* (enemies.length))]
        setFoe(newFoe)
    }
    const sanctuaryHeal = () => {
        if (player.health <= 15){
            const newHp = player.health + 5
            console.log(newHp);
            setPlayer({...player, health: newHp})
            navigate('/dungeoncrawl')
        } else if (player.health > 15){
            setPlayer({...player, health: 20})
            navigate('/dungeoncrawl')
        }
    }
    const sanctuaryTraining = () => {
        const newTrainingLevel = player.training + 1
        setPlayer({...player, training: newTrainingLevel})
        navigate('/dungeoncrawl')
    }
    const mend = () => {
            if (player.health <= 19){
                const newHp = player.health + 1
                player.health = newHp
            }
        }
    const heal = () => {
            if (player.health <= 17){
                const newHp = player.health + 3
                player.health = newHp
            } else {
                player.health = 20
            }
        }
    const miss = () => {
            console.log('You Missed');
            alert('You Missed!')
        }
    const strike = () => {
        if (foe.health > 3){
            const newHp = foe.health - 3
            setFoe({...foe, health: newHp})
        } else {
            alert(`You Killed ${foe.name}`)
            const newKillCount = player.kills + 1
            console.log('new kill count', newKillCount);
            player.kills = newKillCount
            foe.health = 0
            setFoe(null)
            navigate('/dungeoncrawl')
        }
    }
    const poke = () => {
        if (foe.health > 1){
            const newHp = foe.health - 1
            setFoe({...foe, health: newHp})
        } else {
            alert(`You Killed ${foe.name}`)
            const newKillCount = player.kills + 1
            player.kills = newKillCount
            foe.health = 0
            setFoe(null)
            navigate('/dungeoncrawl')
        }
    }
    const handleSubmit = () => {
        console.log('submit pressed');
        const randomCardIndx = Math.floor(Math.random()* selected.length)
        const submitCard = selected[randomCardIndx]
        console.log(submitCard)
        if (submitCard.name === 'strike') {
            alert(`You played Strike ${submitCard.description}`);
            strike()
            setHand([])
            setSelected([])
            if (foe.health != 0 && player.health > foe.magnitude){
                alert(`${foe.name} hit you for ${foe.magnitude} damage`)
                const newHp = player.health - foe.magnitude
                setPlayer({...player, health: newHp})
            } else if (foe.health != 0 && player.health <= foe.magnitude) {
                alert(`you have been slain, better luck next run!`)
                navigate('/')
            }
        } else if (submitCard.name === 'Poke') {
            alert(`You played Poke ${submitCard.description}`);
            poke()
            setHand([])
            setSelected([])
            if (foe.health != 0 && player.health > foe.magnitude){
                alert(`${foe.name} hit you for ${foe.magnitude} damage`)
                const newHp = player.health - foe.magnitude
                setPlayer({...player, health: newHp})
            } else if (foe && player.health <= foe.magnitude) {
                alert(`you have been slain, better luck next run!`)
                navigate('/')
            }
        } else if (submitCard.name === 'Miss') {
            alert(`You played Miss ${submitCard.description}`);
            miss()
            setHand([])
            setSelected([])
            if (foe && player.health > foe.magnitude){
                alert(`${foe.name} hit you for ${foe.magnitude} damage`)
                const newHp = player.health - foe.magnitude
                setPlayer({...player, health: newHp})
            } else if (foe && player.health <= foe.magnitude) {
                alert(`you have been slain, better luck next run!`)
                navigate('/')
            }
        } else if (submitCard.name === 'Heal') {
            alert(`You played Heal ${submitCard.description}`);
            heal()
            setHand([])
            setSelected([])
            if (foe && player.health > foe.magnitude){
                alert(`${foe.name} hit you for ${foe.magnitude} damage`)
                const newHp = player.health - foe.magnitude
                setPlayer({...player, health: newHp})
            } else if (foe && player.health <= foe.magnitude) {
                alert(`you have been slain, better luck next run!`)
                navigate('/')
            }
        }else if (submitCard.name === 'Mend') {
            alert(`You played Mend ${submitCard.description}`);
            mend()
            setHand([])
            setSelected([])
            if (foe && player.health > foe.magnitude){
                alert(`${foe.name} hit you for ${foe.magnitude} damage`)
                const newHp = player.health - foe.magnitude
                setPlayer({...player, health: newHp})
            } else if (foe && player.health <= foe.magnitude) {
                alert(`you have been slain, better luck next run!`)
                navigate('/')
            }
        }
    }
return {
    foe, player, deck, hand, selected, usedDeck, handleSubmit, handleHand, addRandomCardToDeck, addCardToDeck, drawCardToHand, getRandomChoices, handleSelected, shuffleDeck, getRandomEvent, getRandomEnemy, sanctuaryHeal, sanctuaryTraining, mend, heal, miss  
}
}

export default useGame

