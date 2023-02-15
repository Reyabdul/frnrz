import React, { useEffect } from "react";
import * as THREE from "three";
import { randFloatSpread } from "three/src/math/MathUtils";

import "./index.css";

const Stars = () => {
    const starCount = 2000;
    let star, starArray = [];
    let starGeo = new THREE.OctahedronGeometry(1, 0);
    let starMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true, opacity: 1, transparent: false});
    let mouse = new THREE.Vector3();

    const init = () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;
        const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        setTimeout(() => {
            document.getElementById("canvas-container").appendChild(renderer.domElement);
        }, 1000);
    
        window.addEventListener("resize", () => {
            let width = window.innerWidth;
            let height = window.innerHeight;
    
            renderer.setSize(width, height);
            camera.aspect = width / height;
    
            camera.updateProjectionMatrix();
        });
        
        const addStars = () => {
            for (let i = 0; i < starCount; i++) {
                star = new THREE.Mesh(starGeo, starMaterial);

                star.position.x = randFloatSpread(1000);
                star.position.y = randFloatSpread(1000);
                star.position.z = randFloatSpread(300);
        
                starArray.push(star);
                scene.add(star);
            }
        }

        addStars();

        const onMouseMove = (e) => {

            let mouseX = e.clientX + window.innerWidth / 2;
            let mouseY = e.clientY - window.innerHeight / 2;

            camera.position.x = (mouseX - camera.position.x) * 0.0009;
            camera.position.y = (mouseY - camera.position.y) * 0.0009;

            mouse.x = (e.clientX / window.innerWidth) * 2 + 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 - 1;

            camera.lookAt(scene.position);
            camera.updateMatrixWorld();
        }

        document.addEventListener("mousemove", onMouseMove, false);
    
        const update = () => {
            for (var i = 0; i < starArray.length; i++) {

                starArray[i].rotation.y += 0.005;
                starArray[i].rotation.x += 0.005;
            }
        };
    
        const render = () => {
            renderer.render(scene, camera);
        };
    
        const animate = () => {
            requestAnimationFrame(animate);
            render();
            update();
        };

        animate();
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <>
            <div id="canvas-container"></div>
        </>
    )
}

export default Stars;