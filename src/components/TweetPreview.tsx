import React from 'react';
import { format } from 'date-fns';
import { 
  MessageCircle, 
  Repeat2, 
  Heart, 
  BarChart2, 
  Bookmark,
  Share,
} from 'lucide-react';
import VerifiedBadge from './VerifiedBadge';
import QuotedTweet from './QuotedTweet';
import { formatTweetText } from '../utils/tweetFormatter';
import { Tweet } from '../types/tweet';

interface TweetPreviewProps {
  tweet: Tweet;
  tweetRef: React.RefObject<HTMLDivElement>;
}

const TweetPreview: React.FC<TweetPreviewProps> = ({ tweet, tweetRef }) => {
  return (
    <div ref={tweetRef} className="bg-black p-4 rounded-xl border border-gray-800">
      <div className="flex items-start gap-3">
        <img 
          src={tweet.avatar} 
          alt="Avatar" 
          className="w-12 h-12 rounded-full"
          crossOrigin="anonymous"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-bold">{tweet.username}</span>
            {tweet.verified && <VerifiedBadge />}
            <span className="text-gray-500">{tweet.handle}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{format(tweet.date, 'MMM d')}</span>
          </div>
          <p className="mt-1 whitespace-pre-wrap">{formatTweetText(tweet.content)}</p>
          {tweet.image && (
            <img 
              src={tweet.image} 
              alt="Tweet image" 
              className="mt-3 rounded-xl w-full object-cover max-h-96"
              crossOrigin="anonymous"
            />
          )}
          {tweet.quotedTweetUrl && <QuotedTweet url={tweet.quotedTweetUrl} />}
          <div className="flex justify-between mt-3 text-gray-500">
            <div className="flex items-center gap-1">
              <MessageCircle className="w-5 h-5" />
              <span>{tweet.comments}</span>
            </div>
            <div className="flex items-center gap-1">
              <Repeat2 className="w-5 h-5" />
              <span>{tweet.retweets}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-5 h-5" />
              <span>{tweet.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <BarChart2 className="w-5 h-5" />
              <span>{tweet.views}</span>
            </div>
            <div className="flex items-center gap-3">
              <Bookmark className="w-5 h-5" />
              <Share className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetPreview;