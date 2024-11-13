import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import TweetEditor from './components/TweetEditor';
import TweetPreview from './components/TweetPreview';
import { Tweet } from './types/tweet';

function App() {
  const [tweet, setTweet] = useState<Tweet>({
    username: 'ElTrumpista',
    handle: '@ElTrumpista',
    content: 'boludo el afiche q saco la campora ?????? ajajajajaj no la defiendan tanto',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    verified: true,
    image: '',
    likes: '3.6K',
    retweets: '528',
    comments: '123',
    views: '32K',
    date: new Date(),
    quotedTweetUrl: '',
  });

  const [showImageInput, setShowImageInput] = useState(false);
  const tweetRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (tweetRef.current) {
      const canvas = await html2canvas(tweetRef.current, {
        backgroundColor: '#000000',
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      });
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'tweet.png';
      link.href = url;
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <TweetEditor
          tweet={tweet}
          setTweet={setTweet}
          showImageInput={showImageInput}
          setShowImageInput={setShowImageInput}
        />
        <TweetPreview tweet={tweet} tweetRef={tweetRef} />
        <button
          onClick={handleDownload}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Descargar Tweet
        </button>
      </div>
    </div>
  );
}

export default App;