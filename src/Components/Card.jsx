import React from 'react';

const Card = ({ data = [] }) => {
  console.log(data)
  const readMore=(url)=>{
    window.open(url)
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {Array.isArray(data) && data.map((curItem, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img src={curItem.urlToImage}/>
          <div className="p-4 space-y-2">
            <h3 onClick={()=>readMore(curItem.url)} className="text-lg font-semibold text-gray-800">{curItem.title}</h3>
            <p className="text-gray-600 text-sm">{curItem.description}</p>
            <button onClick={()=>readMore(curItem.url)}className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
()=>readMore(curItem.url)