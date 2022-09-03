import React from 'react';
import working from './images/illustration-working.svg';

const Main = () => {
  return (
    <main className='main-section'>
      <div className="main-wrap mw-1500">
        <div className="main-info">
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button className="get-started btn-colors">Get Started</button>
        </div>
        <img className='main-img' src={working} alt="woman working at a desk" />
      </div>
    </main>
  )
}

export default Main