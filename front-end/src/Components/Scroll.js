import React from 'react';

const Scroll = (props) => {
  return (
    <div className = 'scroll'>
      <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
        {props.children}
      </div>
    </div>
  );
};

export default Scroll;