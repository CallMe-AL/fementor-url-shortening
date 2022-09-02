import React from 'react'

const StatCard = ({ stat }) => {

  return (
    <div className='stat-card'>
      <img src={stat.image} alt={stat.title} />
      <div className="stat-info">
        <h2>{stat.title}</h2>
        <p>{stat.info}</p>
      </div>
    </div>
  )
}

export default StatCard