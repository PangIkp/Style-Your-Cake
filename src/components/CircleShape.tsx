import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const CircleShape = ({ color }: { color: number }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const cakeRef = useRef<THREE.Mesh>(); // ใช้ ref เพื่อเก็บอ้างอิงของ cake

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(38, 16 / 9, 0.1, 1000);
    camera.position.set(0, 4, 5);
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth * 0.45, window.innerHeight * 0.5);
    renderer.shadowMap.enabled = true;
    mountRef.current?.appendChild(renderer.domElement);

    // Geometry and material for cake
    const geometry = new THREE.CylinderGeometry(2, 2, 1.5, 45);
    const material = new THREE.MeshStandardMaterial({
      color: color,
    //   roughness: 0.0,
    //   metalness: 0.75,
    });

    const cake = new THREE.Mesh(geometry, material);
    cake.castShadow = true;
    cake.scale.x = 1;
    cake.scale.y = 0.9;
    scene.add(cake);

    cakeRef.current = cake; // เก็บ cake ใน ref

    // Light setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0);
    directionalLight.position.set(5, 5, 0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const spotLight = new THREE.SpotLight(0xffffff, 10);
    spotLight.position.set(0, 5, 0);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.5;
    spotLight.decay = 2;
    spotLight.distance = 10;
    scene.add(spotLight);

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (mountRef.current) {
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // เปลี่ยนสีของ cake เมื่อ color เปลี่ยน
    if (cakeRef.current) {
      (cakeRef.current.material as THREE.MeshStandardMaterial).color.setHex(color);
    }
  }, [color]); // ทำงานเมื่อค่า color เปลี่ยน

  return <div ref={mountRef} className="w-full h-full" />;
};


export default CircleShape;
