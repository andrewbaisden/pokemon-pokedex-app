import { useState, useEffect } from 'react';
import { getLiveDateTime } from '../../utils/dateUtils';

export default function Header() {
  const [dateTime, setDateTime] = useState(getLiveDateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getLiveDateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <header className="flex row justify-between items-center bg-slate-900 text-white p-4 rounded-lg">
        <div>
          <h1 className="text-5xl uppercase">Pokémon</h1>
        </div>
        <div>
          <p>Date: {dateTime.date}</p>
          <p>Time: {dateTime.time}</p>
        </div>
      </header>
    </>
  );
}
