import React from 'react';
import { useState, useEffect } from 'react';
import stats from './stats.json';
import StatCard from './StatCard';

const AdvancedStats = () => {

  const [stats_info, setStatsInfo] = useState([]);

  useEffect(() => {
    setStatsInfo(stats.cards);
  }, []);

  return (
    <div className='mw-1500'>
      <div className="center-text">
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>
      <div className="stats-cards">
        {
          stats_info.length > 0 && stats_info.map(stat => {
            let rndm = Math.floor(Math.random() * 10000);
            return <StatCard stat={stat} key={rndm} />
          })
        }
      </div>
    </div>
  )
}

export default AdvancedStats