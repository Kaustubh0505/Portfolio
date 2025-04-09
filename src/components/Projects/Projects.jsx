import React from 'react'
import "./Projects.css"

const Projects = () => {
    return (
        <div class="pr" id="projects">
            <p>Projects</p>
            <div class="projects">

                <div className="compo">
                    <h3>Weather App</h3>
                    <p>Gives weather of any city</p>
                    <div className="buttons">
                        <a href="https://github.com/Kaustubh0505/Weather"
                            className="btn">Code</a>

                        <a href="https://kaustubh0505.github.io/Weather/" className="btn">Demo</a>
                    </div>

                </div>

                <div className="compo">
                    <h3>Qr-code generator</h3>
                    <p>Generates Qr-code of any text or url</p>
                    <div className="buttons">
                        <a href="https://github.com/Kaustubh0505/Qr-code-generator"
                            className="btn">Code</a>

                        <a href="https://kaustubh0505.github.io/Qr-code-generator/" className="btn">Demo</a>
                    </div>

                </div>

                <div className="compo">
                    <h3>Password generator</h3>
                    <p>Generates password of any length</p>
                    <div className="buttons">
                        <a href="https://github.com/Kaustubh0505/Password_Generator"
                            className="btn">Code</a>

                        <a href="https://password-generator-ruby-psi.vercel.app/" className="btn">Demo</a>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Projects;