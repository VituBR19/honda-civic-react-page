import React, { useState } from 'react';

// eLIRbV7fncc touring
// PRXzB3pYViw exl
// oitNf2RHeY0 lx

function Iframe({ selected }) {
  return (
    <div className="test-drive-content">
      <iframe 
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${ selected }`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >
      </iframe>
    </div>
  );
}

export default Iframe;