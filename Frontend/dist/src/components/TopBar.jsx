import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import axios from 'axios';

const TopBar = () => {

  const [indices, setIndices] = useState(null);

  const fetchIndices = async() => {
    try {
      const res = await axios.get("https://herodha-backend.onrender.com/api/indices");
      setIndices(res.data);
    } catch (err) {
      console.error("Index fetch failed");
    }
  }

  useEffect(() => {
    fetchIndices();
    const interval = setInterval(fetchIndices, 10000);
    return () => clearInterval(interval);
  }, []);

  const renderIndex = (label, data) => {
    if (!data) return null;

    const isUp = data.change >= 0;
    const color = isUp ? "text-green-600" : "text-red-500";

    return (
      <div className="flex gap-3 items-center">
        <p className="font-medium">{label}</p>
        <p className={color}>{data.price.toFixed(2)}</p>
        <p className={color}>
          {isUp ? "▲" : "▼"}
        </p>
      </div>
    );
  };

  return (
    <div className="flex h-10 items-center border-b border-gray-200 shadow-sm">
      <div className="flex w-[30%] px-8 gap-10 border-r border-gray-200">
        {indices && (
          <>
            {renderIndex("NIFTY 50", indices.nifty)}
            {renderIndex("SENSEX", indices.sensex)}
          </>
        )}
      </div>
      <Menu />
    </div>
  );
};

export default TopBar