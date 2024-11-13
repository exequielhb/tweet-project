import React from 'react';
import { format } from 'date-fns';
import { Tweet } from '../types/tweet';

interface TweetEditorProps {
  tweet: Tweet;
  setTweet: (tweet: Tweet) => void;
  showImageInput: boolean;
  setShowImageInput: (show: boolean) => void;
}

const TweetEditor: React.FC<TweetEditorProps> = ({
  tweet,
  setTweet,
  showImageInput,
  setShowImageInput,
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Editor de Tweet</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            className="bg-gray-700 p-2 rounded"
            placeholder="Nombre"
            value={tweet.username}
            onChange={(e) => setTweet({...tweet, username: e.target.value})}
          />
          <input
            className="bg-gray-700 p-2 rounded"
            placeholder="@usuario"
            value={tweet.handle}
            onChange={(e) => setTweet({...tweet, handle: e.target.value})}
          />
        </div>
        <input
          className="bg-gray-700 p-2 rounded w-full"
          placeholder="URL del avatar"
          value={tweet.avatar}
          onChange={(e) => setTweet({...tweet, avatar: e.target.value})}
        />
        <textarea
          className="bg-gray-700 p-2 rounded w-full min-h-[100px]"
          placeholder="Contenido del tweet"
          value={tweet.content}
          onChange={(e) => setTweet({...tweet, content: e.target.value})}
        />
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showImageInput}
            onChange={(e) => {
              setShowImageInput(e.target.checked);
              if (!e.target.checked) {
                setTweet({...tweet, image: ''});
              }
            }}
          />
          <label>Incluir imagen</label>
        </div>
        {showImageInput && (
          <input
            className="bg-gray-700 p-2 rounded w-full"
            placeholder="URL de la imagen"
            value={tweet.image}
            onChange={(e) => setTweet({...tweet, image: e.target.value})}
          />
        )}
        <input
          className="bg-gray-700 p-2 rounded w-full"
          placeholder="URL del tweet citado (opcional)"
          value={tweet.quotedTweetUrl}
          onChange={(e) => setTweet({...tweet, quotedTweetUrl: e.target.value})}
        />
        <div className="grid grid-cols-4 gap-4">
          <input
            className="bg-gray-700 p-2 rounded"
            placeholder="Me gusta"
            value={tweet.likes}
            onChange={(e) => setTweet({...tweet, likes: e.target.value})}
          />
          <input
            className="bg-gray-700 p-2 rounded"
            placeholder="Retweets"
            value={tweet.retweets}
            onChange={(e) => setTweet({...tweet, retweets: e.target.value})}
          />
          <input
            className="bg-gray-700 p-2 rounded"
            placeholder="Comentarios"
            value={tweet.comments}
            onChange={(e) => setTweet({...tweet, comments: e.target.value})}
          />
          <input
            className="bg-gray-700 p-2 rounded"
            placeholder="Vistas"
            value={tweet.views}
            onChange={(e) => setTweet({...tweet, views: e.target.value})}
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={tweet.verified}
            onChange={(e) => setTweet({...tweet, verified: e.target.checked})}
          />
          <label>Verificado</label>
        </div>
        <input
          type="datetime-local"
          className="bg-gray-700 p-2 rounded w-full"
          value={format(tweet.date, "yyyy-MM-dd'T'HH:mm")}
          onChange={(e) => setTweet({...tweet, date: new Date(e.target.value)})}
        />
      </div>
    </div>
  );
};

export default TweetEditor;