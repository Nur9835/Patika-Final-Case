import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import starImg from "../img/star/star3.png"


function disposeObject(obj) {
  if (obj.geometry) {
    obj.geometry.dispose();
  }
  if (obj.material) {
    if (obj.material instanceof THREE.MeshStandardMaterial ||
        obj.material instanceof THREE.MeshBasicMaterial) {
      obj.material.materials.forEach(function(mtrl) {
        if (mtrl.map) mtrl.map.dispose();
        if (mtrl.lightMap) mtrl.lightMap.dispose();
        if (mtrl.bumpMap) mtrl.bumpMap.dispose();
        if (mtrl.normalMap) mtrl.normalMap.dispose();
        if (mtrl.specularMap) mtrl.specularMap.dispose();
        if (mtrl.envMap) mtrl.envMap.dispose();
        mtrl.dispose();               
      });
    } else {
      if (obj.material.map) obj.material.map.dispose();
      if (obj.material.lightMap) obj.material.lightMap.dispose();
      if (obj.material.bumpMap) obj.material.bumpMap.dispose();
      if (obj.material.normalMap) obj.material.normalMap.dispose();
      if (obj.material.specularMap) obj.material.specularMap.dispose();
      if (obj.material.envMap) obj.material.envMap.dispose();
      obj.material.dispose();
    }
  }
}


const Animation = () => {
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 10;
    camera.position.x = Math.PI / 2;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth*8, window.innerHeight*8);

    // DOM elemanı referansını oluşturun
    const container = document.createElement("div");
    container.appendChild(renderer.domElement);

    // container elemanını rendererRef.current değişkenine atayın
    rendererRef.current = container;

    const starGeometry = new THREE.BufferGeometry();
    const starPositions = [];
    for (let i = 0; i < 8000; i++) {
      starPositions.push(
        Math.random() * 800 - 300,
        Math.random() * 800 - 300,
        Math.random() * 800 - 300
      );
    }
    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starPositions, 3)
    );
    const starMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size:0.5,
      map: new THREE.TextureLoader().load(starImg),
    });


    const stars = new THREE.Points(starGeometry, starMaterial);


     stars.position.set(-250, 0, 0);
    // stars2.position.set(200, 0, 0);

    scene.add(stars);

    const animate = () => {
      const positions = starGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const z = positions[i + 2];
        if (y < -200) {
          positions[i + 1] = y + 600;
        } else {
          positions[i + 1] = y - 1;
        }
      }
      starGeometry.attributes.position.needsUpdate = true;
      stars.rotation.y += 0.005;
      stars.rotation.x = -1.5;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    sceneRef.current.appendChild(renderer.domElement);

    return () => {
      scene.traverse(disposeObject);
      renderer.dispose();
    };
  }, []);

  return (
<>


    <div

      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
      ref={sceneRef} // sceneRef.current'a doğrudan referans verin
   

      />
 


 </>
      );
};

export default Animation;
