import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Game from '../components/Game';


const Main = () => {
    const [cards, setCards] = useState(null)
    const [events, setEvents] = useState(null)
    const [enemies, setEnemies] = useState(null)

    useEffect(() => {
        if(!cards){
        axios.get('http://localhost:8000/api/cards')
            .then(res => setCards(res.data))
            .catch(res => console.log(res))}
    }, [])
    useEffect(() => {
        if(!events){
        axios.get('http://localhost:8000/api/events')
            .then(res => setEvents(res.data))
            .catch(res => console.log(res))}
    }, [])
    useEffect(() => {
        if(!enemies){
        axios.get('http://localhost:8000/api/enemies')
            .then(res => setEnemies(res.data))
            .catch(res => console.log(res))}
    }, [])

    return cards && events ? (
            <Game cards = { cards } events = { events } enemies = { enemies } />
    ) : (<p> Loading...</p>)
}

export default Main;