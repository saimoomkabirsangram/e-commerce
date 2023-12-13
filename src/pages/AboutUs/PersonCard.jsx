import React from 'react'
import teamData from './teamData.json'
import Card from './Card'

const PersonCard = () => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4  mx-20 mb-20'>
      {
        teamData.map((person) => <Card 
        key={person.id}
        person={person}
        ></Card>)
      }
    </div>
  )
}

export default PersonCard;
