import React, { useState } from 'react';
import { BsShareFill } from 'react-icons/bs';
import { FaRegBookmark, FaRegEye, FaShare, FaStar } from "react-icons/fa";
import { Link } from 'react-router';
const NewsCard = ({news}) => {
    const [expanded, setExpanded] = useState(false);
    const text = news.details;
    return (
        <div>
    <div className="card bg-base-100 shadow-md border rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src={news.author.img}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{news.author.name}</h2>
            <p className="text-xs text-gray-500">{news.author.published_date}</p>
          </div>
        </div>
        <div className='flex gap-3'>
            <FaRegBookmark className="text-gray-500 text-lg cursor-pointer" />
        <BsShareFill></BsShareFill>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pb-2">
        <h3 className="font-bold text-base leading-5">
          {news.title}
        </h3>
      </div>

      {/* Image */}
      <figure>
        <img
          src={news.thumbnail_url}
          alt="News"
          className="w-full object-cover"
        />
      </figure>

      {/* Description */}
      <div className="p-4 pt-3 text-sm text-gray-600">
       <p>
    {news.details.length > 200
      ? news.details.slice(0, news.details.length / 2) + '...'
      : news.details}
    {news.details.length > 200 && (
      <Link to={`/newsDetails/${news.id}`} className="text-orange-500 font-semibold cursor-pointer ml-1">
        Read More
      </Link>
    )}
  </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-3">
        <div className="flex items-center gap-1 text-orange-500">
  {Array.from({ length: 5 }, (_, i) => (
    <FaStar
      key={i}
      className={i < Math.round(news.rating.number) ? "text-orange-500" : "text-gray-300"}
    />
  ))}
  <span className="ml-2 font-semibold text-sm text-gray-700">
    {news.rating.number}
  </span>
</div>

        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <FaRegEye /> <span>{news.total_view}</span>
        </div>
      </div>
    </div>
        </div>
    );
};

export default NewsCard;