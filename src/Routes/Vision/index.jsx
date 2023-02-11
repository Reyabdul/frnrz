import React, { useEffect, useRef } from "react";
import { Engine, Render, Bodies, World, Runner } from "matter-js";
import "./index.css";

const Vision = () => {
    const scene = useRef();
    const engine = useRef(Engine.create());
    const colours = ["#300350", "#94167F", "#E93479", "#F9AC53", "#F62E97", "#153CB4"];

    useEffect(() => {
        console.log(document.getElementById("canvas-holster").offsetWidth, document.getElementById("canvas-holster").offsetHeight)
        const cw = document.getElementById("canvas-holster").offsetWidth;
        const ch = document.getElementById("canvas-holster").offsetHeight;

        const render = Render.create({
            element: scene.current,
            engine: engine.current,
            options: {
                width: cw,
                height: ch,
                wireframes: false,
                background: 'transparent'
            }
        })

        World.add(engine.current.world, [
            Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
            Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
            Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
            Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true })
        ])

        Runner.run(engine.current)
        Render.run(render)

        return () => {
            Render.stop(render)
            World.clear(engine.current.world)
            Engine.clear(engine.current)
            render.canvas.remove()
            render.canvas = null
            render.context = null
            render.textures = {}
        }
    }, []);

    const handleAddCircle = e => {
        const ball = Bodies.circle(e.clientX - 500, e.clientY, 10 + Math.random() * 30, {
              mass: 10,
              restitution: 0.9,
              friction: 0.005,
              render: {
                fillStyle: colours[Math.floor(Math.random() * colours.length)]
              }
            })
          World.add(engine.current.world, [ball])
      }

    return (
        <>
            <main className="vision-container">
                <div className="column">
                    <section className="letter-container">
                        <article>
                            <h1> 2023 Vision </h1>
                            <h3>
                                2023, or A year of magical perception.<br /><br />
                                It is always interesting to form and function in the ‘undergrounds’ of ecosystems and then one day find yourself in a moment of public display, rowing through new currents to find stronger waves. Suddenly, you are moving beneath both a sunlit sky and a full pink moon. 
                                The constellations are always visible, acting like old guides, and somehow the map is in your head (and heart) but the destination is unclear. 
                                It is always hard to see through the mist of this current moment; of great change, growth, ambition, and reckless spirit. You look down and notice the boat you are on can really be anything you want it to be - but what form contains the most magic? 
                                What form takes us into the future with not only clear & fantastic sight, but becomes what is needed of it?<br /><br />
                                We have spent the past few years researching, experimenting, tinkering, and trying; diving head first into all the spaces you have come to find us. 
                                And always, we were trying to create somewhere transitory for our evolution to exist and be documented without fear of retribution. With some level of grace and with some sense of self, and it both being something we offer ourselves without being tied to our consumer base. 
                                We were and are trying to survive.<br /><br />
                                Slowly we have found our way into the worlds that have always made our hearts race; art, film, fashion, music, theatre, the list can go on. 
                                In 2023, we look at the worlds we have been creating through these various disciplines and projects and see that the word of the hour is ‘magic’. 
                                How do we continue to find it? How do we infuse it into our artistic direction, our aesthetic philosophy, our stories, our increasing team of creatives. 
                                How do we spend a year harnessing the surreal, the sensory, the illusory, and form ways of magical thinking to spur new artists and art forms. New modes of thought and new considerations within the spaces we reside.<br /><br />
                                Cultural disruption is a tall order, but we intend to lean into the challenge this year with big dreams and bigger ideas. 
                                We intend to create without repetition, seek out stories that have the capacity to permanently shift spaces, and create art that can be profound and yet new. 
                                New in the way that feels culturally scarce and rare. We are FOREIGNERZ, and our version of new is meant to thrill and liberate. 
                                In this year of magical perception, our vision requires a level of candour and hope; our ideas, the space to form freely. 
                                We expect to meet the chaos and tension this era brings with a firm grasp on why we make art in the first place - to create magic, of course.<br /><br />
                                We hope you are here for the ride.<br /><br />
                                Sincerely,
                                FOREIGNERZ
                            </h3>
                        </article>
                    </section>
                </div>
                <div id="canvas-holster" className="column">
                    <div onMouseMove={(e) => handleAddCircle(e)}>
                        <div ref={scene} style={{"position": "relative"}}/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Vision;