// src/components/Earth.jsx
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Earth = () => {
  const mountRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    // ===== Scene setup =====
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#ffffff"); // white background

    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 2000);
    camera.position.set(0, 0, 3.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    mountRef.current.appendChild(renderer.domElement);

    // ===== Lights =====
    const sunLight = new THREE.DirectionalLight(0xffffff, 1.4);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    const backLight = new THREE.DirectionalLight(0x224466, 0.4);
    backLight.position.set(-5, -2, -3);
    scene.add(backLight);

    scene.add(new THREE.AmbientLight(0x223344, 0.5));
    scene.add(new THREE.HemisphereLight(0x4477aa, 0x112233, 0.3));

    // ===== Earth + Clouds =====
    const earthGroup = new THREE.Group();
    scene.add(earthGroup);

    const loader = new THREE.TextureLoader();
    let texturesLoaded = 0;
    const totalTextures = 4;

    const onTexLoad = () => {
      texturesLoaded++;
      if (texturesLoaded === totalTextures) {
        setTimeout(() => setLoading(false), 500);
      }
    };

    const texEarth = loader.load(
      "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg",
      onTexLoad
    );
    const texSpec = loader.load(
      "https://threejs.org/examples/textures/planets/earth_specular_2048.jpg",
      onTexLoad
    );
    const texNormal = loader.load(
      "https://threejs.org/examples/textures/planets/earth_normal_2048.jpg",
      onTexLoad
    );
    const texCloud = loader.load(
      "https://threejs.org/examples/textures/planets/earth_clouds_1024.png",
      onTexLoad
    );

    // Earth surface
    const earthGeo = new THREE.SphereGeometry(1, 128, 128);
    const earthMat = new THREE.MeshPhongMaterial({
      map: texEarth,
      specularMap: texSpec,
      normalMap: texNormal,
      normalScale: new THREE.Vector2(0.9, 0.9),
      shininess: 18,
      specular: new THREE.Color(0x333333),
    });
    const earth = new THREE.Mesh(earthGeo, earthMat);
    earthGroup.add(earth);

    // Clouds
    const cloudsGeo = new THREE.SphereGeometry(1.01, 128, 128);
    const cloudsMat = new THREE.MeshLambertMaterial({
      map: texCloud,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    const clouds = new THREE.Mesh(cloudsGeo, cloudsMat);
    earthGroup.add(clouds);

    // ===== Interactions (drag + zoom) =====
    let isDragging = false;
    let last = { x: 0, y: 0 };
    const rot = { x: 0, y: 0 };
    const targetRot = { x: 0, y: 0 };
    let targetZoom = camera.position.z;

    const posFromEvent = (e) =>
      e.touches?.length
        ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
        : { x: e.clientX, y: e.clientY };

    const onPointerDown = (e) => {
      isDragging = true;
      last = posFromEvent(e);
    };
    const onPointerUp = () => {
      isDragging = false;
    };
    const onPointerMove = (e) => {
      if (!isDragging) return;
      const { x, y } = posFromEvent(e);
      const dx = (x - last.x) * 0.005;
      const dy = (y - last.y) * 0.005;
      targetRot.y += dx;
      targetRot.x += dy; // free rotation (no clamp)
      last = { x, y };
    };

    const onWheel = (e) => {
      if (renderer.domElement.contains(e.target)) {
        targetZoom = Math.max(1.6, Math.min(8, targetZoom + e.deltaY * 0.002));
        e.preventDefault();
      }
    };

    const onResize = () => {
      const { clientWidth, clientHeight } = mountRef.current;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };

    // events
    renderer.domElement.addEventListener("mousedown", onPointerDown);
    renderer.domElement.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);
    renderer.domElement.addEventListener("touchstart", onPointerDown, {
      passive: true,
    });
    renderer.domElement.addEventListener("touchmove", onPointerMove, {
      passive: true,
    });
    window.addEventListener("touchend", onPointerUp);
    renderer.domElement.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", onResize);
    onResize();

    // ===== Animation loop =====
    const animate = () => {
      requestAnimationFrame(animate);

      rot.y += (targetRot.y - rot.y) * 0.08;
      rot.x += (targetRot.x - rot.x) * 0.08;

      earthGroup.rotation.y = rot.y;
      earthGroup.rotation.x = rot.x;

      // Auto slow spin (optional, can remove if you want pure manual control)
      targetRot.y += 0.0008;

      camera.position.z += (targetZoom - camera.position.z) * 0.1;
      clouds.rotation.y += 0.0015;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();

      renderer.domElement.removeEventListener("mousedown", onPointerDown);
      renderer.domElement.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      renderer.domElement.removeEventListener("touchstart", onPointerDown);
      renderer.domElement.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
      renderer.domElement.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="relative w-full h-full rounded-xl">
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-50 transition-opacity duration-700">
          <div className="w-12 h-12 border-4 border-slate-300 border-t-cyan-400 rounded-full animate-spin mb-4"></div>
          <p className="text-sm opacity-70">Loading Earth textures...</p>
        </div>
      )}
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};

export default Earth;
