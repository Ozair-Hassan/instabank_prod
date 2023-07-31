import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'

const SpinningSphere = ({ size, spinx, spiny }) => {
  const sphereRef = useRef()

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += spinx
      sphereRef.current.rotation.y += spiny
    }
  })

  return (
    <Sphere
      ref={sphereRef}
      args={[size, 32, 32]}
    >
      {/* Apply the gradient background */}
      <shaderMaterial
        attach="material"
        vertexShader={`
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `}
        fragmentShader={`
        varying vec2 vUv;

        void main() {
          vec3 colorA = vec3(0.0, 0.0, 0.0);
          vec3 colorB = vec3(1.0, 0.85, 0.0);

          vec3 gradientColor = mix(colorA, colorB, vUv.y);

          gl_FragColor = vec4(gradientColor, 1.0);
        }
      `}
      />
    </Sphere>
  )
}

export default SpinningSphere

// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Sphere } from '@react-three/drei';

// const SpinningSphere = ({ size }) => {
//   const sphereRef = useRef();

//   useFrame(() => {
//     // This function will be called every frame to update the sphere's rotation
//     if (sphereRef.current) {
//       sphereRef.current.rotation.x += 0.01;
//       sphereRef.current.rotation.y += 0.01;
//     }
//   });

//   return (
//     <Sphere ref={sphereRef} args={[size, 32, 32]}>
//       {/* Apply the gradient background */}
//       <shaderMaterial
//         attach="material"
//         vertexShader={`
//           varying vec2 vUv;
//           void main() {
//             vUv = uv;
//             gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//           }
//         `}
//         fragmentShader={`
//           varying vec2 vUv;

//           void main() {
//             vec3 colorA = vec3(169.0/255.0, 160.0/255.0, 107.0/255.0); // #A9A06B (25% darker golden)
//             vec3 colorB = vec3(245.0/255.0, 231.0/255.0, 127.0/255.0); // #F5E77F
//             vec3 colorC = vec3(240.0/255.0, 219.0/255.0, 95.0/255.0);  // #F0DB5F
//             vec3 colorD = vec3(235.0/255.0, 207.0/255.0, 63.0/255.0);  // #EBCF3F
//             vec3 colorE = vec3(230.0/255.0, 195.0/255.0, 31.0/255.0);  // #E6C31F
//             vec3 colorF = vec3(209.0/255.0, 185.0/255.0, 51.0/255.0);  // #D1B933

//             // Calculate the distance from the center of the sphere
//             float distance = distance(vUv, vec2(0.5));

//             // Interpolate between colors based on distance
//             vec3 gradientColor;
//             if (distance < 0.0089) {
//               gradientColor = colorA;
//             } else if (distance < 0.1723) {
//               gradientColor = mix(colorA, colorB, smoothstep(0.0089, 0.1723, distance));
//             } else if (distance < 0.4204) {
//               gradientColor = mix(colorB, colorC, smoothstep(0.1723, 0.4204, distance));
//             } else if (distance < 0.5512) {
//               gradientColor = mix(colorC, colorD, smoothstep(0.4204, 0.5512, distance));
//             } else if (distance < 0.7154) {
//               gradientColor = mix(colorD, colorE, smoothstep(0.5512, 0.7154, distance));
//             } else {
//               gradientColor = mix(colorE, colorF, smoothstep(0.7154, 1.0, distance));
//             }

//             gl_FragColor = vec4(gradientColor, 1.0);
//           }
//         `}
//       />
//     </Sphere>
//   );
// };

// export default SpinningSphere;
