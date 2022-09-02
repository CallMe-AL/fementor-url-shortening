import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const ShortenedLink = ({ newLink, oldLink }) => {

  const [copied, setCopied] = useState({ value: '', copied: false });

  const copy = () => {
    setCopied({ value: newLink, copied: true });
    console.log(copied);

    setTimeout(() => {
      setCopied({ value: newLink, copied: false });
    }, 2000);
  }

  return (
    <div className='link-item'>
      <p className="original-link">{oldLink}</p>
      <div className="shortened-container">
        <p>{newLink}</p>
        <CopyToClipboard text={newLink} onCopy={() => copy()}>
          <button 
            className={`copy-btn btn-colors ${copied.copied && 'copied'}`}>
              {copied.copied ? <span className='copied'>Copied!</span> : 'Copy'}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  )
}

export default ShortenedLink