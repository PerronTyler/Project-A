import React from 'react'
import { useParams } from 'react-router-dom'

const DungeonEvent = ({ foe, hand, selected, shuffleDeck, deck, player, cards, handleSubmit, handleHand, handleSelected, getRandomChoices, getRandomEvent, addRandomCardToDeck, addCardToDeck, getRandomEnemy, sanctuaryHeal, sanctuaryTraining, drawCardToHand }) => {
    const { event } = useParams()
    const { id } = useParams()
    console.log(player);
    let dungeonElements = <h1>Loading...</h1>
    let playerElements = <></>
    let handElements = <></>
    let selectedElements = <></>
    if (event === 'enemy') {
        if (!foe) { getRandomEnemy() }
        playerElements = <p> Loading Player Data... </p>
        handElements = <p>Draw cards until you have 6 in your hand!</p>
        selectedElements = <p>Click cards from your hand to add them to Selected!</p>
    }
    if (!id && !event) {
        dungeonElements =
            <div>
                <div className='flex justify-center m-8 bg-stone-500 outline outline-4 outline-stone-600 border-[4px] sm:rounded-sm border-amber-400'>
                    <h1 className='font-bold text-sky-300 text-2xl p-8'>Choose your fate</h1>
                </div>
                <div className='flex justify-center container container-xl object-center'>
                    <div className='flex justify-evenly w-[80rem]'>
                        <div className='w-[20rem] outline outline-4 outline-stone-600 border-[4px] sm:rounded-sm border-amber-400' onClick={() => getRandomEvent()}>
                            <img className='h-[15rem]' src="https://pbs.twimg.com/media/DZ0hJISX0AAks_i.jpg" alt="left door" />
                        </div>
                        <div className='w-[20rem] outline outline-4 outline-stone-600 border-[4px] sm:rounded-sm border-amber-400' onClick={() => getRandomEvent()}>
                            <img className='h-[15rem]' src="https://pbs.twimg.com/media/EsF4AmRXcAEdru6.jpg" alt="right door" />
                        </div>
                    </div>
                </div>
            </div>
    }
    if (event === 'sanctuary') {
        dungeonElements = <>
            <div>
                <div className='flex justify-center m-8 bg-stone-500 outline outline-4 outline-stone-600 border-[4px] sm:rounded-sm border-amber-400'>
                    <h1 className='font-bold text-sky-300 text-2xl p-8'>Sanctuary</h1>
                </div>
                <div className='flex justify-center container container-xl object-center'>
                    <div className='flex justify-evenly w-[80rem]'>
                        <div className='w-[20rem] outline outline-4 outline-stone-600 border-[4px] sm:rounded-sm border-amber-400'>
                            <img className='w-[20rem] h-[15rem]' src="https://i.pinimg.com/originals/43/bd/0a/43bd0ae68ae7c862a5daebce9e48bc6a.jpg" alt="right door" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
    let foeImageElement = <p>loading foe data...</p>
    let foeMaxHP = 0
    if (foe && foe.name === 'goblin') {
        foeMaxHP = 6
        foeImageElement = <div className='row-span-2 col-span-1 w-[10rem]   outline outline-4 outline-stone-600 border-[4px] sm:rounded-sm border-amber-400 ml-12 my-4'>
            <img className='border-amber-500 border-[4px]' src="http://www.worldanvil.com/media/cache/cover/uploads/images/a5df2533d69a5a3830a264fb1d29893a.jpg" alt="goblin" />
        </div>
    } else if (foe && foe.name === 'ogre') {
        foeMaxHP = 10
        foeImageElement = <div className='row-span-2 col-span-1 w-[10rem]  outline outline-4 outline-stone-600 border-[4px] sm:rounded-sm border-amber-400 ml-12 my-4'>
            <img src="https://i.pinimg.com/736x/df/42/f4/df42f47930a4d7d337cca7372e539c87--fantasy-monster-ogre.jpg" alt="ogre" />
        </div>
    } else if (foe && foe.name === 'bat') {
        foeMaxHP = 4
        foeImageElement = <div className='row-span-2 col-span-1 w-[10rem]  outline outline-4 outline-stone-600 border-[4px] sm:rounded-sm border-amber-400 ml-12 my-4'>
            <img className='h-[10rem]' src="https://cdnb.artstation.com/p/assets/images/images/037/985/257/large/lyubov-semenkova-abyfk.jpg?1621869065" alt="bat" />
        </div>
    }
    if (foe && event === 'enemy') {
        dungeonElements = <>
            <div className='grid grid-rows-2 grid-flow-col gap-2'>
                {foeImageElement}
                <div className='flex flex-col justify-evenly row-span-2 col-span-3'>
                    <div className='outline outline-4 h-[5rem] outline-stone-600 mt-4 mx-4 border-[4px] border-amber-400'>
                        <div className='flex justify-between'>
                            <h2 className='m-2 font-bold text-sky-300 text-lg'>health</h2>
                            <h2 className='m-2 font-bold text-emerald-400 text-xl'>{foe.health}</h2>
                        </div>
                        <progress className='w-[95%] mt-2 mx-2' data-bs-toggle="tooltip" data-bs-placement="top" title={foe.health} id="health" value={foe.health} max={foeMaxHP}></progress>
                    </div>
                    <div className='flex justify-between h-[5rem] outline outline-4 outline-stone-600 mt-4 mx-4 border-[4px] border-amber-400'>
                        <h1 className='m-2 font-bold text-sky-300 text-lg'>{foe.name}</h1>
                        <h2 className='m-2 font-bold text-emerald-400 text-xl'>strength: {foe.magnitude}</h2>
                    </div>
                </div>
            </div>
        </>
    }
    if (event === 'choose') {
        const choices = getRandomChoices()
        console.log(choices);
        dungeonElements = <>
            <div>
                <div className='flex justify-center m-8 bg-stone-500 outline outline-4 outline-stone-600 border-[4px] sm:rounded-sm border-amber-400'>
                    <h1 className='font-bold text-sky-300 text-2xl p-8'>Choose one of two cards OR try your luck at a random card</h1>
                </div>
                <div className='flex justify-center container container-xl object-center'>
                    <div className='flex justify-evenly w-[80rem]'>
                        <div>
                            <div className='outline outline-4 outline-stone-600 border-[12px] xl:rounded-xl border-amber-400 max-w-[11rem] rounded overflow-hidden shadow-lg transition ease-in-out delay-150 bg-emerald-800 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-700 duration-300' onClick={() => addCardToDeck(choices[0])}>
                                <img className='border-[12px] border-outline-black-500 border-amber-500' src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" alt="Image not yet added" />
                                <div className='flex flex-col justify-center border-[12px] border-amber-500 px-6 py-4'>
                                    <div className='font-bold text-sky-300 text-xl mb-2'>{choices[0].name}</div>
                                    <p className='text-white text-xs'>{choices[0].description}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='outline outline-4 outline-stone-600 border-[12px] xl:rounded-xl border-amber-400 max-w-[11rem] rounded overflow-hidden shadow-lg transition ease-in-out delay-150 bg-emerald-800 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-700 duration-300' onClick={() => addCardToDeck(choices[0])}>
                                <img className='border-[12px] border-outline-black-500 border-amber-500' src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" alt="Image not yet added" />
                                <div className='flex flex-col justify-center border-[12px] border-amber-500 px-6 py-4'>
                                    <div className='font-bold text-sky-300 text-xl mb-2'>{choices[1].name}</div>
                                    <p className='text-white text-xs'>{choices[1].description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
    if (deck && deck.length === 0) {
        shuffleDeck()
    }
    if (event === 'enemy' && !hand && selected.length + hand.length != 6) {
        handElements = <></>
    } else if (event === 'enemy' && hand && selected.length + hand.length != 6) {
        handElements = <>
            <div className='inline-grid grid-cols-6 gap-4'>
                {hand.map(card =>
                    <div className='outline outline-4 outline-stone-600 border-[12px] xl:rounded-xl border-amber-400 max-w-[11rem] rounded overflow-hidden shadow-lg transition ease-in-out delay-150 bg-emerald-800 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-700 duration-300' onClick={() => handleSelected(card)}>
                        <img className='border-[12px] border-amber-500' src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" alt="Image not yet added" />
                        <div className='border-[12px] border-amber-500 px-6 py-4'>
                            <div className='font-bold text-sky-300 text-xl mb-2'>{card.name}</div>
                            <p className='text-white text-xs'>{card.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    } else if (event === 'enemy' && hand && selected.length + hand.length === 6) {
        handElements = <>
            <div className='inline-grid grid-cols-6 gap-4'>
                {hand.map(card => <div>
                    <div className='outline outline-4 outline-stone-600 border-[12px] xl:rounded-xl border-amber-400 max-w-[11rem] rounded overflow-hidden shadow-lg transition ease-in-out delay-150 bg-emerald-800 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-700 duration-300' onClick={() => handleSelected(card)}>
                        <img className='border-[12px] border-outline-black-500 border-amber-500' src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" alt="Image not yet added" />
                        <div className='flex flex-col justify-center border-[12px] border-amber-500 px-6 py-4'>
                            <div className='font-bold text-sky-300 text-xl mb-2'>{card.name}</div>
                            <p className='text-white text-xs'>{card.description}</p>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </>
    }
    if (event === 'enemy' && selected && selected.length != 6) {
        selectedElements = <>
            <div className='inline-grid grid-cols-1 gap-4'>
                <h1 className='m-2 font-bold text-sky-300 text-lg'>Selected</h1>
                {selected.map(card =>
                    <div className='outline outline-4 outline-stone-600 border-[6px] sm:rounded-sm border-amber-400 max-w-[5rem] max-h-[4rem] rounded overflow-hidden shadow-lg transition ease-in-out delay-150 bg-emerald-800 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-700 duration-300' onClick={() => handleHand(card)}>
                        <div className='flex justify-center content-center border-[4px] border-amber-500 px-6 py-4'>
                            <div className='font-bold text-sky-300 text-sm mb-2'>{card.name}</div>
                        </div>
                    </div>
                )}
            </div>
        </>
    } else if (event === 'enemy' && selected && selected.length === 6) {
        selectedElements = <>
            <div className='inline-grid grid-cols-1 gap-4'>
                <div>
                    <h1 className='m-2 font-bold text-sky-300 text-lg'>Selected</h1>
                </div>
                {selected.map(card =>
                    <div className='outline outline-4 outline-stone-600 border-[6px] sm:rounded-sm border-amber-400 max-w-[4rem] max-h-[4rem] rounded overflow-hidden shadow-lg transition ease-in-out delay-150 bg-emerald-800 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-700 duration-300' onClick={() => handleHand(card)}>
                        <div className='flex justify-center border-[4px] border-amber-500 p-4'>
                            <div className='font-bold text-sky-300 text-sm '>{card.name}</div>
                        </div>
                    </div>
                )}
            </div>
        </>
    }
    let drawButtonElement =
        <p className='m-2 text-white'>Click on Cards from your hand down below to add them to Selected</p>

    let submitButtonElement =
        <p className='m-2 text-white'>Once you have Selected 6 cards, click submit to fight the enemy at hand</p>

    if (event === 'enemy' && selected.length + hand.length != 6) {
        drawButtonElement =
            <button className='button1' onClick={() => drawCardToHand()}>Draw a card!</button>

    }
    if (event === 'enemy' && selected && selected.length === 6) {
        submitButtonElement =
            <button className='button1' onClick={() => handleSubmit()}> Submit </button>
    }
    if (event === 'enemy' && player && deck) {
        playerElements = <>
            <div className='grid grid-rows-3 grid-flow-col gap-4'>
                <div className='row-span-3 col-span-2 max-w-[12rem] max-h-[18rem] outline outline-4 outline-stone-600 ml-10 my-6 border-[4px] border-amber-400'>
                    <img className='border-[4px] border-outline-black-500 border-amber-500' src="https://i.pinimg.com/550x/ce/7c/fa/ce7cfa8859815a22e843efb9546fc890.jpg" alt="YOU" />
                </div>
                <div className='row-span-1 col-span-2 max-h-[12rem] outline outline-4 outline-stone-600 mt-4 mx-4 border-[4px] border-amber-400'>
                    <div className='flex justify-between'>
                        <h2 className='m-2 font-bold text-sky-300 text-lg'> Health </h2>
                        <h2 className='m-2 font-bold text-emerald-400 text-xl'>{player.health}</h2>
                    </div>
                    <progress className='w-[95%] mt-2 mx-2' data-bs-toggle="tooltip" data-bs-placement="top" title={player.health} id="health" value={player.health} max="20"></progress>
                    <h2 className='mb-2 mt-12 mx-2 font-bold text-sky-300 text-xl text-center'>Cards left in Deck: {deck.length}</h2>
                </div>
                <div className='flex justify-between row-span-1 col-span-2 outline outline-4 outline-stone-600 mx-4 mb-4 border-[4px] border-amber-400'>
                    {drawButtonElement}
                    {submitButtonElement}
                </div>
            </div>
        </>
    }
    let deckElements = <p>Loading Deck...</p>
    let displayElements = <p>Loading Dungeon...</p>
    if (deck) {
        deckElements = <h2 className='mb-2 mt-12 mx-2 font-bold text-sky-300 text-xl text-center'>Cards left in Deck: {deck.length}</h2>
    }
    if (event === 'enemy') {
        displayElements = <div className='flex flex-col'>
            <div className='flex justify-between'>
                <div className='grid grid-cols-6 gap-4 w-[90%] '>
                    <div className='col-start-4 col-span-3 outline outline-4 outline-amber-400 border-[4px] border-amber-500 bg-stone-500 m-2 h-[15rem]'>
                        {dungeonElements}
                    </div>
                    <div className='col-start-1 col-span-3 outline outline-4 outline-amber-400 border-[4px] border-amber-500 bg-stone-500 m-2 h-[24rem]'>
                        {playerElements}
                    </div>
                </div>
                <div className='flex outline outline-4 outline-amber-400 border-[4px] border-amber-500 bg-stone-500 w-[8rem] h-[35rem] p-4'>
                    {selectedElements}
                </div>
            </div>
            <div className='flex justify-center outline outline-4 outline-amber-400 border-[4px] border-amber-500 bg-stone-500 h-[17rem] w-[90%] p-4 m-8'>
                {handElements}
            </div>
        </div>
    } else if (event === 'sanctuary') {
        displayElements = <>
            <div>
                {dungeonElements}
            </div>
            <div className='grid grid-rows-2 grid-flow-col gap-4 bg-stone-500 outline outline-4 outline-stone-600 mx-10 my-6 border-[4px] border-amber-400'>
                <div className='row-span-3 col-span-2 max-w-[12rem] max-h-[18rem] outline outline-4 outline-stone-600 ml-10 my-6 border-[4px] border-amber-400'>
                    <img className='border-[4px] border-outline-black-500 border-amber-500' src="https://i.pinimg.com/550x/ce/7c/fa/ce7cfa8859815a22e843efb9546fc890.jpg" alt="YOU" />
                </div>
                <div className='row-span-1 col-span-2 max-h-[12rem] outline outline-4 outline-stone-600 mt-4 mx-4 border-[4px] border-amber-400'>
                    <div className='flex justify-between'>
                        <h2 className='m-2 font-bold text-sky-300 text-lg'> Health </h2>
                        <h2 className='m-2 font-bold text-emerald-400 text-xl'>{player.health}</h2>
                    </div>
                    <progress className='w-[95%] mt-2 mx-2' data-bs-toggle="tooltip" data-bs-placement="top" title={player.health} id="health" value={player.health} max="20"></progress>
                    {deckElements}
                </div>
                <div className='flex justify-evenly row-span-1 col-span-2 outline outline-4 outline-stone-600 mx-4 mb-4 border-[4px] border-amber-400'>
                    <div>
                        <button className='button1' onClick={() => sanctuaryHeal()}>
                            Heal 5 HP
                        </button>
                    </div>
                    <div>
                        <button className='button1' onClick={() => sanctuaryTraining()}>
                            Train your Strength (not yet implemented)
                        </button>
                    </div>
                </div>
            </div>
        </>
    } else if (event === 'choose') {
        displayElements = <>
            <div>
                {dungeonElements}
            </div>
            <div className='grid grid-rows-2 grid-flow-col gap-4 bg-stone-500 outline outline-4 outline-stone-600 mx-10 my-6 border-[4px] border-amber-400'>
                <div className='row-span-3 col-span-2 max-w-[12rem] max-h-[18rem] outline outline-4 outline-stone-600 ml-10 my-6 border-[4px] border-amber-400'>
                    <img className='border-[4px] border-outline-black-500 border-amber-500' src="https://i.pinimg.com/550x/ce/7c/fa/ce7cfa8859815a22e843efb9546fc890.jpg" alt="YOU" />
                </div>
                <div className='row-span-1 col-span-2 max-h-[12rem] outline outline-4 outline-stone-600 mt-4 mx-4 border-[4px] border-amber-400'>
                    <div className='flex justify-between'>
                        <h2 className='m-2 font-bold text-sky-300 text-lg'> Health </h2>
                        <h2 className='m-2 font-bold text-emerald-400 text-xl'>{player.health}</h2>
                    </div>
                    <progress className='w-[95%] mt-2 mx-2' data-bs-toggle="tooltip" data-bs-placement="top" title={player.health} id="health" value={player.health} max="20"></progress>
                    {deckElements}
                </div>
                <div className='flex justify-evenly row-span-1 col-span-2 outline outline-4 outline-stone-600 mx-4 mb-4 border-[4px] border-amber-400'>
                    <div>
                        <button className='button1' onClick={() => addRandomCardToDeck()}> add random card </button>
                    </div>
                </div>
            </div>
        </>
    } else {
        displayElements = <>
            <div>
                {dungeonElements}
            </div>
            <div className='grid grid-rows-2 grid-flow-col gap-4 bg-stone-500 outline outline-4 outline-stone-600 mx-10 my-6 border-[4px] border-amber-400'>
                <div className='row-span-3 col-span-2 max-w-[12rem] max-h-[18rem] outline outline-4 outline-stone-600 ml-10 my-6 border-[4px] border-amber-400'>
                    <img className='border-[4px] border-outline-black-500 border-amber-500' src="https://i.pinimg.com/550x/ce/7c/fa/ce7cfa8859815a22e843efb9546fc890.jpg" alt="YOU" />
                </div>
                <div className='row-span-1 col-span-2 max-h-[12rem] outline outline-4 outline-stone-600 mt-4 mx-4 border-[4px] border-amber-400'>
                    <div className='flex justify-between'>
                        <h2 className='m-2 font-bold text-sky-300 text-lg'> Health </h2>
                        <h2 className='m-2 font-bold text-emerald-400 text-xl'>{player.health}</h2>
                    </div>
                    <progress className='w-[95%] mt-2 mx-2' data-bs-toggle="tooltip" data-bs-placement="top" title={player.health} id="health" value={player.health} max="20"></progress>
                    {deckElements}
                </div>
                <div className='flex justify-evenly row-span-1 col-span-2 outline outline-4 outline-stone-600 mx-4 mb-4 border-[4px] border-amber-400'>
                    <div>
                        <button className='button1' onClick={() => getRandomEvent()}>
                            Left
                        </button>
                    </div>
                    <div>
                        <button className='button1' onClick={() => getRandomEvent()}>
                            Right
                        </button>
                    </div>
                    <div>
                        <button className='button1' onClick={() => getRandomEvent()}>
                            Flip a Coin!
                        </button>
                    </div>
                </div>
            </div>
        </>
    }
    return (
        <>
            {displayElements}
        </>
    )
}

export default DungeonEvent