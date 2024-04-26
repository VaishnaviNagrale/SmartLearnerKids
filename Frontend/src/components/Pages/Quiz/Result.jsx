import React from 'react';
import img from "../../../assets/images/result.jpg";

const Result = ({ score, totalQuestions }) => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <div className="relative">
        <img
          src={img}
          alt="Quiz Result"
          className=" w-full h-80 object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 mt-8">
    <div className="flex items-center justify-center mb-8">
          <p className="text-5xl font-bold text-indigo-600">{score}</p>
          <span className="text-black text-2xl mx-2">out of</span>
           <p className="text-5xl font-bold text-indigo-600">{totalQuestions}</p>
         </div>
         <p className="text-lg text-center">You scored {score} out of {totalQuestions} questions</p>
      </div>
    </div>

    // <div className="w-full h-full flex flex-col items-center justify-center rounded-lg shadow-lg p-8">
    //   <div className="mb-8 relative">
    //     <img src={img} alt="Quiz" className="w-80 h-80 object-cover rounded-lg shadow-md" />
    //   </div>
    //   <div className=' shadow-lg rounded-lg p-8 mt-8'>
    //     <h2 className="text-3xl font-bold mb-4 text-center">Quiz Result</h2>
    //     <div className="flex items-center justify-center mb-8">
    //       <p className="text-5xl font-bold text-indigo-600">{score}</p>
    //       <span className="text-black text-2xl mx-2">out of</span>
    //       <p className="text-5xl font-bold text-indigo-600">{totalQuestions}</p>
    //     </div>
    //     <p className="text-lg text-center">You scored {score} out of {totalQuestions} questions</p>
    //   </div>
    // </div>
  );
};

export default Result;
