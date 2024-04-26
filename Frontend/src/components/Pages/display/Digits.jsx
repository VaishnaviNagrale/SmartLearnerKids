import React, { useState, useEffect } from "react";
import Layout2 from "../../Layout/Layout2";
import axios from "axios";
import Lottie from "lottie-react";
import { BsMicFill } from "react-icons/bs"; // Import microphone icon
import congoAnimationData from "../../../assets/animations/congratulations.json";
import tryagainAnimationData from "../../../assets/animations/try_again.json";
import recordingAnimationData from "../../../assets/animations/recoding.json";
import loadingAnimationData from "../../../assets/animations/loading.json";
import zero from "../../../assets/images/digits/ZERO.png";
import one from "../../../assets/images/digits/ONE.webp";
import two from "../../../assets/images/digits/TWO.webp";
import three from "../../../assets/images/digits/THREE.webp";
import four from "../../../assets/images/digits/FOUR.png";
import five from "../../../assets/images/digits/FIVE.webp";
import six from "../../../assets/images/digits/SIX.webp";
import seven from "../../../assets/images/digits/SEVEN.webp";
import eight from "../../../assets/images/digits/EIGHT.webp";
import nine from "../../../assets/images/digits/NINE.png";
import zeroAudio from "../../../assets/sounds/0.mp3";
import oneAudio from "../../../assets/sounds/1.mp3";
import twoAudio from "../../../assets/sounds/2.mp3";
import threeAudio from "../../../assets/sounds/3.mp3";
import fourAudio from "../../../assets/sounds/4.mp3";
import fiveAudio from "../../../assets/sounds/5.mp3";
import sixAudio from "../../../assets/sounds/6.mp3";
import sevenAudio from "../../../assets/sounds/7.mp3";
import eightAudio from "../../../assets/sounds/8.mp3";
import nineAudio from "../../../assets/sounds/9.mp3";

import correctAnsAudio from "../../../assets/sounds/Correct Answer.mp3";
import wrongAnsAudio from "../../../assets/sounds/Wrong answer.mp3";
import pleaseWaitAudio from "../../../assets/sounds/Please wait your voice.mp3";

const Digits = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [transcribedText, setTranscribedText] = useState(null);
  const [sound, setSound] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupAnimation, setPopupAnimation] = useState(null);

  const images = [
    { id: 1, src: zero, audio: zeroAudio },
    { id: 2, src: one, audio: oneAudio },
    { id: 3, src: two, audio: twoAudio },
    { id: 4, src: three, audio: threeAudio },
    { id: 5, src: four, audio: fourAudio },
    { id: 6, src: five, audio: fiveAudio },
    { id: 7, src: six, audio: sixAudio },
    { id: 8, src: seven, audio: sevenAudio },
    { id: 9, src: eight, audio: eightAudio },
    { id: 10, src: nine, audio: nineAudio },
  ];

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

  const handleImageClick = (src, audio) => {
    setSelectedImage(src);
    setTranscribedText(null);
    if (sound) {
      sound.pause();
    }
    setSound(new Audio(audio));
  };

  const handleButtonClick = async () => {
    try {
      setIsLoading(true);
      // Record audio
      setShowPopup(true);
      setPopupAnimation(recordingAnimationData);

      await axios.post(`${import.meta.env.VITE_APP_API_URL}/record-audio`);

      // Hide recording popup after 5 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 5000);

      // Transcribe audio
      setShowPopup(true);
      setPopupAnimation(loadingAnimationData);
      if (sound) {
        sound.pause();
      }
      setSound(new Audio(pleaseWaitAudio));
      setTimeout(() => {
        setShowPopup(false);
      }, 60000);

      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/transcribe-audio`
      );

      // Hide recording popup after 5 seconds

      setTranscribedText(response.data.transcribedText);
      setIsLoading(false);

      // Show congratulations or try again popup based on the result
      const imageName = selectedImage.split("/").pop();
      const expectedAnswer = imageName
        .slice(0, -4)
        .trim()
        .toUpperCase()
        .replace(/\.$/, "");
      const cleanedTranscribedText = response.data.transcribedText
        .trim()
        .toUpperCase()
        .replace(/\.$/, "");
      console.log("Expected", expectedAnswer);
      console.log("Transcribed", cleanedTranscribedText);
      const isCorrectAnswer = cleanedTranscribedText === expectedAnswer;

      setShowPopup(true);
      if (isCorrectAnswer) {
        setPopupAnimation(congoAnimationData);
        if (sound) {
          sound.pause();
        }
        setSound(new Audio(correctAnsAudio));
      } else {
        setPopupAnimation(tryagainAnimationData);
        if (sound) {
          sound.pause();
        }
        setSound(new Audio(wrongAnsAudio));
      }
      // Hide popup after 5 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      setShowPopup(false);
      setIsLoading(false);
    }
  };

  const renderResult = () => {
    if (transcribedText !== null) {
      return (
        <div className="mt-4">
          {showPopup && <Lottie animationData={popupAnimation} />}
        </div>
      );
    } else if (selectedImage !== null) {
      return (
        <div className="mt-4">
          <p>Please record something</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Layout2>
      <div className="flex h-screen overflow-hidden">
        <div className="w-1/4 p-4 overflow-y-auto">
          <h2 className="text-lg font-bold mb-4">Digits</h2>
          <div className="flex flex-wrap">
            {images.map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={`Image ${image.id}`}
                className="w-1/3 cursor-pointer transform transition duration-300 hover:scale-105"
                onClick={() => handleImageClick(image.src, image.audio)}
              />
            ))}
          </div>
        </div>
        <div className="w-3/4 p-4 flex flex-col items-center justify-center">
          {selectedImage && (
            <>
              <div className="mb-4 ml-80">
                <img
                  src={selectedImage}
                  alt="Selected Image"
                  className=" w-1/2 h-auto object-contain"
                />
              </div>
              <div className="mb-4">
                <button
                  onClick={handleButtonClick}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "loading"
                  ) : (
                    <>
                      <BsMicFill className="mr-2" /> Record Audio
                    </>
                  )}
                </button>
              </div>
            </>
          )}
          {renderResult()}
          {!selectedImage && (
            <div className="flex items-center justify-center h-full">
              <p className="text-lg text-gray-600">Select an image</p>
            </div>
          )}
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8">
            {showPopup && <Lottie animationData={popupAnimation} />}
          </div>
        </div>
      )}
    </Layout2>
  );
};

export default Digits;
