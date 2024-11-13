import React from 'react';

export const formatTweetText = (text: string): React.ReactNode[] => {
  const words = text.split(/(\s+)/);
  return words.map((word, index) => {
    if (word.startsWith('@') || word.startsWith('#')) {
      return (
        <span key={index} className="text-[#1d9bf0] hover:underline cursor-pointer">
          {word}
        </span>
      );
    }
    return <span key={index}>{word}</span>;
  });
};