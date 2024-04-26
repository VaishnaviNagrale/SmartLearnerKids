import React, { useState, useEffect } from "react";
import img from "../../../assets/images/Quizimg.png";

const Question = ({ audio, options, handleAnswer }) => {
  const [sound, setSound] = useState(null);

  useEffect(() => {
    if (sound) {
      sound.play();
    }
    return () => {
      if (sound) {
        sound.pause();
      }
    };
  }, [sound]);

  useEffect(() => {
    const audioSource = `/src/assets/sounds/${audio}`;
    const newSound = new Audio(audioSource);
    setSound(newSound);
    if (sound) {
      sound.play();
    }

    return () => {
      if (sound) {
        sound.pause();
      }
    };
  }, [audio]); 

  const handleClick = (option) => {
    handleAnswer(option);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <div className="relative">
        <img
          src={img}
          alt="Quiz"
          className="w-80 h-80 object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 mt-8">
        <div className="grid grid-cols-2 gap-4">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleClick(option)}
              className="bg-pink-500 hover:bg-violet-600 text-white py-3 px-6 rounded-lg focus:outline-none transition duration-300"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
