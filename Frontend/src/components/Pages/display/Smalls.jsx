import React, { useState, useEffect } from "react";
import a from "../../../assets/images/small/a.png";
import b from "../../../assets/images/small/b.png";
import c from "../../../assets/images/small/c.png";
import d from "../../../assets/images/small/d.png";
import e from "../../../assets/images/small/e.png";
import f from "../../../assets/images/small/f.png";
import g from "../../../assets/images/small/g.png";
import h from "../../../assets/images/small/h.png";
import i from "../../../assets/images/small/i.png";
import j from "../../../assets/images/small/j.png";
import k from "../../../assets/images/small/k.png";
import l from "../../../assets/images/small/l.png";
import m from "../../../assets/images/small/m.png";
import n from "../../../assets/images/small/n.png";
import o from "../../../assets/images/small/o.png";
import p from "../../../assets/images/small/p.png";
import q from "../../../assets/images/small/q.png";
import r from "../../../assets/images/small/r.png";
import s from "../../../assets/images/small/s.png";
import t from "../../../assets/images/small/t.png";
import u from "../../../assets/images/small/u.png";
import v from "../../../assets/images/small/v.png";
import w from "../../../assets/images/small/w.png";
import x from "../../../assets/images/small/x.png";
import y from "../../../assets/images/small/y.png";
import z from "../../../assets/images/small/z.png";

import axios from "axios";
import Layout2 from "../../Layout/Layout2";
// import RotateImage from "./RotateImage";
import AAudio from "../../../assets/sounds/a.mp3";
import BAudio from "../../../assets/sounds/b.mp3";
import CAudio from "../../../assets/sounds/c.mp3";
import DAudio from "../../../assets/sounds/d.mp3";
import EAudio from "../../../assets/sounds/e.mp3";
import FAudio from "../../../assets/sounds/f.mp3";
import GAudio from "../../../assets/sounds/g.mp3";
import HAudio from "../../../assets/sounds/h.mp3";
import IAudio from "../../../assets/sounds/i.mp3";
import JAudio from "../../../assets/sounds/j.mp3";
import KAudio from "../../../assets/sounds/k.mp3";
import LAudio from "../../../assets/sounds/l.mp3";
import MAudio from "../../../assets/sounds/m.mp3";
import NAudio from "../../../assets/sounds/n.mp3";
import OAudio from "../../../assets/sounds/o.mp3";
import PAudio from "../../../assets/sounds/p.mp3";
import QAudio from "../../../assets/sounds/q.mp3";
import RAudio from "../../../assets/sounds/r.mp3";
import SAudio from "../../../assets/sounds/s.mp3";
import TAudio from "../../../assets/sounds/t.mp3";
import UAudio from "../../../assets/sounds/u.mp3";
import VAudio from "../../../assets/sounds/v.mp3";
import WAudio from "../../../assets/sounds/w.mp3";
import XAudio from "../../../assets/sounds/x.mp3";
import YAudio from "../../../assets/sounds/y.mp3";
import ZAudio from "../../../assets/sounds/z.mp3";

import Lottie from "lottie-react";
import { BsMicFill } from "react-icons/bs"; // Import microphone icon
import congoAnimationData from "../../../assets/animations/congratulations.json";
import tryagainAnimationData from "../../../assets/animations/try_again.json";
import recordingAnimationData from "../../../assets/animations/recoding.json";
import loadingAnimationData from "../../../assets/animations/loading.json";

import correctAnsAudio from "../../../assets/sounds/Correct Answer.mp3";
import wrongAnsAudio from "../../../assets/sounds/Wrong answer.mp3";
import pleaseWaitAudio from "../../../assets/sounds/Please wait your voice.mp3";

const Smalls = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [transcribedText, setTranscribedText] = useState(null);
  const [sound, setSound] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupAnimation, setPopupAnimation] = useState(null);

  const images = [
    { id: 1, src: a, audio: AAudio },
    { id: 2, src: b, audio: BAudio },
    { id: 3, src: c, audio: CAudio },
    { id: 4, src: d, audio: DAudio },
    { id: 5, src: e, audio: EAudio },
    { id: 6, src: f, audio: FAudio },
    { id: 7, src: g, audio: GAudio },
    { id: 8, src: h, audio: HAudio },
    { id: 9, src: i, audio: IAudio },
    { id: 10, src: j, audio: JAudio },
    { id: 11, src: k, audio: KAudio },
    { id: 12, src: l, audio: LAudio },
    { id: 13, src: m, audio: MAudio },
    { id: 14, src: n, audio: NAudio },
    { id: 15, src: o, audio: OAudio },
    { id: 16, src: p, audio: PAudio },
    { id: 17, src: q, audio: QAudio },
    { id: 18, src: r, audio: RAudio },
    { id: 19, src: s, audio: SAudio },
    { id: 20, src: t, audio: TAudio },
    { id: 21, src: u, audio: UAudio },
    { id: 22, src: v, audio: VAudio },
    { id: 23, src: w, audio: WAudio },
    { id: 24, src: x, audio: XAudio },
    { id: 25, src: y, audio: YAudio },
    { id: 26, src: z, audio: ZAudio },
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
      setShowPopup(true);
      setPopupAnimation(recordingAnimationData);

      await axios.post(`${import.meta.env.VITE_APP_API_URL}/record-audio`);

      setTimeout(() => {
        setShowPopup(false);
      }, 5000);

      setShowPopup(true);
      setPopupAnimation(loadingAnimationData);
      setSound(new Audio(pleaseWaitAudio));

      setTimeout(() => {
        setShowPopup(false);
      }, 60000);

      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/transcribe-audio`
      );

      setTranscribedText(response.data.transcribedText);
      setIsLoading(false);

      const imageName = selectedImage.split("/").pop();
      let cleanedAlphabetCharacter = imageName
        .slice(0, -4)
        .trim()
        .toUpperCase()
        .replace(/\.$/, "");
      const cleanedTranscribedText = response.data.transcribedText
        .trim()
        .toUpperCase()
        .replace(/\.$/, "");
        switch (cleanedAlphabetCharacter) {
            case "A":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "A for apple.";
              break;
            case "B":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "B for baseball.";
              break;
            case "C":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "C for clock.";
              break;
            case "D":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "D for Donkey.";
              break;
            case "E":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "E for Elephant.";
              break;
            case "F":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "F for Father.";
              break;
            case "G":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "G for Grandmother.";
              break;
            case "H":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "H for Hungry.";
              break;
            case "I":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "I for Internet.";
              break;
            case "J":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "J for justice.";
              break;
            case "K":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "K for Kangaroo.";
              break;
            case "L":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "L for london.";
              break;
            case "M":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "M for Mokey.";
              break;
            case "N":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "N for norway.";
              break;
            case "O":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "O for overtime.";
              break;
            case "P":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "P for pillow.";
              break;
            case "Q":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "Q for question.";
              break;
            case "R":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "R for Rabbit.";
              break;
            case "S":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "S for superman.";
              break;
            case "T":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "T for telephone.";
              break;
            case "U":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "U for underware.";
              break;
            case "V":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "V for Vaccinate.";
              break;
            case "W":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "W for world wide web.";
              break;
            case "X":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "X for xylophone.";
              break;
            case "Y":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "Y for yogurt.";
              break;
            case "Z":
              cleanedAlphabetCharacter = "";
              cleanedAlphabetCharacter += "Z for zebra.";
              break;
            default:
              break;
          }
          const isCorrectAnswer =
          cleanedTranscribedText ===
          cleanedAlphabetCharacter.trim().toUpperCase().replace(/\.$/, "");
          console.error("cleanedTranscribedText:", cleanedTranscribedText);
          console.error("cleanedAlphabetCharacter:", cleanedAlphabetCharacter.trim().toUpperCase().replace(/\.$/, ""));
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
  <div className="w-1/4 p-4 overflow-y-auto ">
    <h2 className="text-lg font-bold mb-4">Small Letters</h2>
    <div className="flex flex-wrap justify-center">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={`Image ${image.id}`}
          className="w-1/4 cursor-pointer mb-4 mx-2 transform transition duration-300 hover:scale-105"
          onClick={() => handleImageClick(image.src, image.audio)}
        />
      ))}
    </div>
  </div>
  <div className="w-3/4 p-4 flex flex-col items-center justify-center">
    {selectedImage && (
      <>
        <div className="m-4">
          <img
            src={selectedImage}
            alt="Selected Image"
            className="w-1/5 h-auto object-contain ml-96"
            style={{ zIndex: 1 }}
          />
        </div>
        <div className="mb-4">
          <button
            onClick={handleButtonClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
            disabled={isLoading}
          >
            {isLoading ? (
              "Loading..."
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

export default Smalls;
