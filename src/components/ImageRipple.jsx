"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

function RippleImage({ src, hover }) {
  const mesh = useRef();
  const texture = new THREE.TextureLoader().load(src);
  const materialRef = useRef();

  useFrame(({ clock }) => {
    if (materialRef.current && hover) {
      materialRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[3, 4, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={{
          uTime: { value: 0 },
          uTexture: { value: texture },
        }}
        vertexShader={`
          varying vec2 vUv;
          uniform float uTime;
          void main() {
            vUv = uv;
            vec3 pos = position;
            pos.z += uTime > 0.0 ? sin(pos.x * 5.0 + uTime) * 0.05 : 0.0;
            pos.z += uTime > 0.0 ? cos(pos.y * 5.0 + uTime) * 0.05 : 0.0;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          uniform sampler2D uTexture;
          void main() {
            vec4 texColor = texture2D(uTexture, vUv);
            gl_FragColor = texColor;
          }
        `}
      />
    </mesh>
  );
}

export default function ImageRipple({ src }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="w-full h-[89vh] rounded-xl overflow-hidden shadow-xl"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <directionalLight position={[2, 2, 5]} />
        <OrbitControls enableZoom={false} enableRotate={false} />
        <RippleImage src={src} hover={hover} />
      </Canvas>
    </div>
  );
}
