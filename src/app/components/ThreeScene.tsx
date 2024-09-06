"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (containerRef?.current?.children && containerRef.current.children.length > 0) {
        // Already rendered Three.js scene
        // console.log("Already rendered Three.js scene");
        return;
      }

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer();

      // renderer.setSize(window.innerWidth, window.innerHeight);
      // Set the size of the renderer to the size of half the window
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 5;

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // Render the scene and camera
      renderer.render(scene, camera);

      // console.log("Rendering Three.js scene");
    }
  }, []);

  return <div ref={containerRef} />;
};
export default ThreeScene;
