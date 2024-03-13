import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const RotateImage = ({ imageUrl }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const controls = new OrbitControls(camera, renderer.domElement);

        const image = new Image();
        image.crossOrigin = 'anonymous'; // Enable CORS if necessary
        image.onload = () => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0, image.width, image.height);
            const imageData = context.getImageData(0, 0, image.width, image.height);

            const geometry = new THREE.PlaneGeometry(10, 10, image.width - 1, image.height - 1);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            geometry.vertices.forEach((vertex, index) => {
                const x = index % image.width;
                const y = Math.floor(index / image.width);
                const grayscale = imageData.data[(y * image.width + x) * 4] / 255;
                vertex.z = grayscale * 2 - 1; // Map grayscale value to the range [-1, 1]
            });
        };
        image.src = imageUrl;

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            // Cleanup code if necessary
        };
    }, [imageUrl]);

    return (
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
    );
};

export default RotateImage;
