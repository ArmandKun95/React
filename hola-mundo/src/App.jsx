import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'QueenWillRock',
        name: 'Queen',
        isFollowing: true,
    },
    {
        userName: 'acdc',
        name: 'AC/DC',
        isFollowing: false,
    },
    {
        userName: 'gunsnroses',
        name: 'Guns N\' Roses',
        isFollowing: true,
    },
    {
        userName: 'RockstarGames',
        name: 'Rockstar Games',
        isFollowing: true,
    },
]

export function App () {
    return <div className='div-app'>
        <h1>A quién seguir</h1>
        <section className="App">
            {
                users.map (({userName, name, isFollowing}) => (
                    <TwitterFollowCard 
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )                  
                )
            }
        </section>   
    </div>
}