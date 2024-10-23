import React, { useEffect, useState } from 'react';

const HiddenWordDetector = () => {
  const hiddenWord = 'secret'; 
  const [typedText, setTypedText] = useState('');
  const [found, setFound] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const newText = typedText + event.key; 
      setTypedText(newText);
      if (newText.includes(hiddenWord)) {
        setFound(true);
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [typedText]);

  return (
    <div>
      <h1>Type Something:</h1>
      <p>{typedText}</p>
      {found && <h2>Found the hidden word: {hiddenWord}</h2>}
    </div>
  );
};

export default HiddenWordDetector;
