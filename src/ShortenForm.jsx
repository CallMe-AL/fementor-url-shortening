import React, { useState, useEffect } from 'react';
import ShortenedLink from './ShortenedLink';

const ShortenForm = () => {

  const [link, setLink] = useState('');
  const [error, setError] = useState(false);
  const [originalLinks, setOriginalLinks] = useState([]);
  const [shortenedLink, setShortenedLink] = useState('');
  const [shortenedLinks, setShortenedLinks] = useState([]);

  useEffect(() => {

    let shorteneds = JSON.parse(localStorage.getItem('newlinks'));
    let originals = JSON.parse(localStorage.getItem('orglinks'));

    if (shorteneds) {
      setShortenedLinks(shorteneds);
    }

    if (originals) {
      setOriginalLinks(originals);
    }

    console.log('shorts ', shorteneds);
    console.log('originals ', originals);

  }, []);

  const handleLink = (e) => {
    setLink(e.target.value);
    console.log('link: ', e.target.value);
  }

  const shortenLink = (e) => {
    e.preventDefault();

    // checks if there's any input
    if (link.trim() === '') {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    };

    // checks if link begins with https:// first to prevent an api call
    let array = link.slice(0, 8);
    if (array !== 'https://') return;

    // checks if user already send that link before
    let exists = checkLinks(link);
    if (exists) return;

    fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then(res => res.json())
      .then(data => {
        let newLink = data.result.full_short_link3;
        let newObj = {newLink: newLink, oldLink: link};

        setShortenedLink(newLink);

        if (shortenedLinks.length > 0) {
          let newArray = [...shortenedLinks, newObj];
          setShortenedLinks(newArray);
          localStorage.setItem('newlinks', JSON.stringify(newArray));
        } else {
          setShortenedLinks([newObj]);
          localStorage.setItem('newlinks', JSON.stringify([newObj]));
        }
        
      });
  }

  const checkLinks = (origLink) => {
    let exists = false;

    originalLinks.forEach(item => {
      if (item === origLink) {
        exists = true;
        return;
      }
    });

    if (exists) return true;

    if (originalLinks.length > 0) {
      let newArray = [...originalLinks, origLink];
      setOriginalLinks(newArray);
      localStorage.setItem('orglinks', JSON.stringify(newArray));
    } else {
      setOriginalLinks([origLink]);
      localStorage.setItem('orglinks', JSON.stringify([origLink]));
    }
  }

  return (
    <div className='shorten-section'>
      <form className={`shortening-form ${error ? 'error' : ''}`}>
        <label htmlFor="url" className="sr-only">Shorten a link here</label>
        <input 
          type="url" 
          placeholder='Must be an "https://" link...' 
          id='url' 
          name='url' 
          autoComplete='off'
          value={link}
          onChange={(e) => handleLink(e)}
          pattern="https://.*"
          
        />
        <p className={`error-message ${error ? 'error' : ''}`}>Please enter a valid url!</p>
        <button className="shorten-it-btn btn-colors" onClick={(e) => shortenLink(e)}>Shorten it!</button>
      </form>
      <div className="links-container">
        {
          shortenedLinks.length > 0 && shortenedLinks.map(link => {
            return <ShortenedLink newLink={link.newLink} oldLink={link.oldLink}/>;
          })
        }
        
      </div>
      
    </div>
  )
}

export default ShortenForm