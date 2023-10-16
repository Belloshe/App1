import React, { useState, useEffect } from 'react';

const BabyNames = () => {
  const [names, setNames] = useState<string[]>([]);
  const [tip, setTip] = useState<string>('');
  const [gender, setGender] = useState<string>(''); 

  useEffect(() => {
  
    const girlNames = [
      'Alice',
      'Ella',
      'Grace',
      'Hannah',
    ];

    const boyNames = [
      'Bob',
      'Charlie',
      'David',
      'Frank',
    ];

  
    if (gender === 'girl') {
      setNames(girlNames);
    } else if (gender === 'boy') {
      setNames(boyNames);
    }
  }, [gender]);

  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setTip(names[randomIndex]);
  };


  const selectGender = (selectedGender: string) => {
    setGender(selectedGender);
  };

  return (
    <div className="min-h-screen bg-grey-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Baby Name</h1>
        <div className="mb-4">
          <button
            className={`${
              gender === 'girl' ? 'bg-pink-200' : 'bg-pink-300'
            } hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full cursor-pointer mr-4`}
            onClick={() => selectGender('girl')}
          >
            Flicka
          </button>
          <button
            className={`${
              gender === 'boy' ? 'bg-blue-500' : 'bg-blue-300'
            } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer`}
            onClick={() => selectGender('boy')}
          >
            Pojke
          </button>
        </div>
        <button
          className="bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
          onClick={getRandomName}
        >
          Visa namn
        </button>
        {tip && (
          <div>
            <p className="mt-4 text-lg">Förslag: {tip}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BabyNames;
