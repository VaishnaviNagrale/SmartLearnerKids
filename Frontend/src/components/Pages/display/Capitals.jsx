import React, { useState } from 'react';
import A from '../../../assets/images/capitals/A.png'
import B from '../../../assets/images/capitals/B.png'
import C from '../../../assets/images/capitals/C.png'
import D from '../../../assets/images/capitals/D.png'
import E from '../../../assets/images/capitals/E.png'
import F from '../../../assets/images/capitals/F.png'
import G from '../../../assets/images/capitals/G.png'
import H from '../../../assets/images/capitals/H.png'
import I from '../../../assets/images/capitals/I.png'
import J from '../../../assets/images/capitals/J.png'
import K from '../../../assets/images/capitals/K.png'
import L from '../../../assets/images/capitals/L.png'
import M from '../../../assets/images/capitals/M.png'
import N from '../../../assets/images/capitals/N.png'
import O from '../../../assets/images/capitals/O.png'
import P from '../../../assets/images/capitals/P.png'
import Q from '../../../assets/images/capitals/Q.png'
import R from '../../../assets/images/capitals/R.png'
import S from '../../../assets/images/capitals/S.png'
import T from '../../../assets/images/capitals/T.png'
import U from '../../../assets/images/capitals/U.png'
import V from '../../../assets/images/capitals/V.png'
import W from '../../../assets/images/capitals/W.png'
import X from '../../../assets/images/capitals/X.png'
import Y from '../../../assets/images/capitals/Y.png'
import Z from '../../../assets/images/capitals/Z.png'

import Layout2 from '../../Layout/Layout2';
import RotateImage from './RotateImage';

const Capitals = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { id: 1, src: A }, 
        { id: 2, src: B },
        { id: 3, src: C },
        { id: 4, src: D },
        { id: 5, src: E },
        { id: 6, src: F },
        { id: 7, src: G },
        { id: 8, src: H },
        { id: 9, src: I },
        { id: 10, src: J },
        { id: 11, src: K },
        { id: 12, src: L },
        { id: 13, src: M },
        { id: 14, src: N },
        { id: 15, src: O },
        { id: 16, src: P },
        { id: 17, src: Q },
        { id: 18, src: R },
        { id: 19, src: S },
        { id: 20, src: T },
        { id: 21, src: U },
        { id: 22, src: V },
        { id: 23, src: W },
        { id: 24, src: X },
        { id: 25, src: Y },
        { id: 26, src: Z },
        // Add more images as needed
    ];

    const handleImageClick = (src) => {
        setSelectedImage(src);
    };

    return (
        <Layout2>
            <div className="flex h-screen overflow-hidden">
                <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto">
                    <h2 className="text-lg font-bold mb-4">Images</h2>
                    <div className="flex flex-wrap">
                        {images.map((image) => (
                            <img
                                key={image.id}
                                src={image.src}
                                alt={`Image ${image.id}`}
                                className="w-1/3 cursor-pointer mb-2"
                                onClick={() => handleImageClick(image.src)}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-3/4 bg-gray-300 p-4 overflow-y-auto">
                {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected Image"
              className="w-full h-full object-contain"
            />
          ): (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-lg text-gray-600">Click on an image to view</p>
                        </div>
                    )}
                </div>
            </div>
        </Layout2>
    );
};

export default Capitals;
