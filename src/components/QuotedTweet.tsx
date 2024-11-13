import React from 'react';

interface QuotedTweetProps {
  url: string;
}

const QuotedTweet: React.FC<QuotedTweetProps> = ({ url }) => {
  // Extraer el último segmento de la URL como ID del tweet
  const tweetId = url.split('/').pop() || '';

  return (
    <div className="mt-3 border border-gray-700 rounded-xl p-3 hover:bg-gray-900/50 cursor-pointer">
      <div className="flex items-center gap-2 text-gray-500">
        <img
          src="https://abs.twimg.com/favicons/twitter.ico"
          alt="Twitter"
          className="w-4 h-4"
        />
        <span>twitter.com</span>
      </div>
      <div className="mt-2 text-sm text-gray-400">
        Ver en Twitter
      </div>
    </div>
  );
};

export default QuotedTweet;