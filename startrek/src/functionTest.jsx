import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = 50;

    const typeText = () => {
      if (charIndex < text.length) {
        setDisplayText(text.substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typeText, typingInterval);
      }
    };

    typeText();
  }, [text]);

  return <p>{displayText}</p>;
};

export default TypingEffect;
