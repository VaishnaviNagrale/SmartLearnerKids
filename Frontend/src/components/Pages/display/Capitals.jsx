import React, { useState, useEffect } from "react";
import A from "../../../assets/images/capitals/A.png";
import B from "../../../assets/images/capitals/B.png";
import C from "../../../assets/images/capitals/C.png";
import D from "../../../assets/images/capitals/D.png";
import E from "../../../assets/images/capitals/E.png";
import F from "../../../assets/images/capitals/F.png";
import G from "../../../assets/images/capitals/G.png";
import H from "../../../assets/images/capitals/H.png";
import I from "../../../assets/images/capitals/I.png";
import J from "../../../assets/images/capitals/J.png";
import K from "../../../assets/images/capitals/K.png";
import L from "../../../assets/images/capitals/L.png";
import M from "../../../assets/images/capitals/M.png";
import N from "../../../assets/images/capitals/N.png";
import O from "../../../assets/images/capitals/O.png";
import P from "../../../assets/images/capitals/P.png";
import Q from "../../../assets/images/capitals/Q.png";
import R from "../../../assets/images/capitals/R.png";
import S from "../../../assets/images/capitals/S.png";
import T from "../../../assets/images/capitals/T.png";
import U from "../../../assets/images/capitals/U.png";
import V from "../../../assets/images/capitals/V.png";
import W from "../../../assets/images/capitals/W.png";
import X from "../../../assets/images/capitals/X.png";
import Y from "../../../assets/images/capitals/Y.png";
import Z from "../../../assets/images/capitals/Z.png";

import axios from "axios";
import Layout2 from "../../Layout/Layout2";
import RotateImage from "./RotateImage";
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

const Capitals = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [transcribedText, setTranscribedText] = useState(null);
  const [sound, setSound] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupAnimation, setPopupAnimation] = useState(null);

  const images = [
    { id: 1, src: A, audio: AAudio },
    { id: 2, src: B, audio: BAudio },
    { id: 3, src: C, audio: CAudio },
    { id: 4, src: D, audio: DAudio },
    { id: 5, src: E, audio: EAudio },
    { id: 6, src: F, audio: FAudio },
    { id: 7, src: G, audio: GAudio },
    { id: 8, src: H, audio: HAudio },
    { id: 9, src: I, audio: IAudio },
    { id: 10, src: J, audio: JAudio },
    { id: 11, src: K, audio: KAudio },
    { id: 12, src: L, audio: LAudio },
    { id: 13, src: M, audio: MAudio },
    { id: 14, src: N, audio: NAudio },
    { id: 15, src: O, audio: OAudio },
    { id: 16, src: P, audio: PAudio },
    { id: 17, src: Q, audio: QAudio },
    { id: 18, src: R, audio: RAudio },
    { id: 19, src: S, audio: SAudio },
    { id: 20, src: T, audio: TAudio },
    { id: 21, src: U, audio: UAudio },
    { id: 22, src: V, audio: VAudio },
    { id: 23, src: W, audio: WAudio },
    { id: 24, src: X, audio: XAudio },
    { id: 25, src: Y, audio: YAudio },
    { id: 26, src: Z, audio: ZAudio },
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
        <div className="w-1/4 p-4 overflow-y-auto">
          <h2 className="text-lg font-bold mb-4">Capital Letters</h2>
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

export default Capitals;
