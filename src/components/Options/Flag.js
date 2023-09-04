import React from 'react';

const Flag = () => {
  const parentContainerStyle = {
    maxWidth: '200px',
    margin: '10px',
  };

  const flagContainerStyle = {
    backgroundColor: 'green',
    borderRadius: '0.25rem',
    padding: '0.25rem',
    display: 'flex',
    alignItems: 'center',
  };

  const flagTextStyle = {
    color: 'white',
    fontSize: '0.75rem',
    marginRight: '0.5rem',
  };

  const flagEmojiStyle = {
    fontSize: '1rem',
  };

  return (
    <div style={parentContainerStyle} id='flag'>
      <div style={flagContainerStyle}>
        <p style={flagTextStyle}>Flag</p>
        <span style={flagEmojiStyle}>🚩</span>
      </div>
    </div>
  );
};

export default Flag;
