import React, { useEffect } from "react";

import $ from "jquery";
import "jquery-ui-bundle";

import "./index.css";

const PhysicsEngine = () => {
    let deviceOrientation = "";
    let isStopped = false;

    useEffect(() => {
        $(".service-accordion-wrapper").draggable({delay: 0,});
        init();
    }, []);

    const init = () => {
        if (window.innerWidth <= 500) {
            deviceOrientation = "mobile";
            console.log(deviceOrientation)
        } else {
            deviceOrientation = "desktop";
            console.log(deviceOrientation)
            physicsEngine();
        }
    }

    const physicsEngine = () => {

        const canvas = document.querySelector('canvas');

        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');

        class Ball {
            constructor(x, y, velx, vely, size, color) {
            this.x = x; 
            this.y = y; 
            this.velx = velx; 
            this.vely = vely; 
            this.size = size; 
            this.color = color; 
            }

            // create draw func
            drawBall() {
                ctx.beginPath(); 
                ctx.fillStyle = this.color; 
                ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                ctx.fill();
            }

            // create update func
            updateBall() {

                if (this.x + this.size >= width || this.x - this.size <= 0) {
                    this.velx = -this.velx;
                }

                if (this.y + this.size >= height || this.y - this.size <= 0) {
                    this.vely = -this.vely;
                }

                this.x += this.velx;
                this.y += this.vely;
            }
        }

        //   create random number generator func
        function random(min, max) {
            const num = Math.floor(Math.random() * (max - min + 1)) + min;
            return num;
        }

        const balls = [];
        const domElements = document.querySelectorAll(".service-accordion-wrapper");

        while (balls.length < domElements.length) {
            let size = random(10, 20);

            const ball = new Ball(
                random(size, width - size),
                random(size, height - size),
                random(-1, 1),
                random(-1, 1),
                size,
                `transparent`
            );

            balls.push(ball);
        }

        //   create loop func
        function loop() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
            ctx.fillRect(0, 0, width, height);

            // run necessary func
            for (let i = 0; i < balls.length; i++) {
                balls[i].drawBall();
                balls[i].updateBall();
                domElements[i].style.setProperty("top", `${balls[i].y}px`)
                domElements[i].style.setProperty("left", `${balls[i].x}px`)
            }

            if (!isStopped && deviceOrientation === "desktop") {
                requestAnimationFrame(loop);
            }
        }

        for (let i = 0; i < domElements.length; i++) {
            if (deviceOrientation === "desktop") {
                domElements[i].addEventListener("mousedown", (e) => {
                    let accordions = document.querySelectorAll(".accordion-item");
                    accordions.forEach((el) => {
                       el.classList.remove("collapsed");
                    });

                    e.target.classList.add("stop-animation");
                    if (e.target.classList.contains("stop-animation")) {
                        isStopped = true;
                        cancelAnimationFrame(loop);
                    }
                })
            }
        }

        loop();
    }

    return (
        <>
            <canvas></canvas>
        </>
    )
}

export default PhysicsEngine;