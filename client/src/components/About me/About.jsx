import React from 'react'
import pic from '../../images/Me.jpeg'
import "./About.css"

function About() {
    return (
        <>
            <div className="about-wrapper">
                <div className="about-left">
                    <div className="about-left-content">
                        <div>
                            <div className="shadow">
                                <div className="about-img">
                                    <img src={pic} alt="about" />
                                </div>
                            </div>

                            <h2 className="text-light">Ayush Pathania</h2>
                            <h3 className="text-light">Web Developer</h3>
                        </div>

                        <ul className="icons">
                            <a href="https://www.linkedin.com/in/ayush-pathania-573804231/" rel="noreferrer" target="_blank"><li><i className="fab fa-linkedin"></i></li></a>
                            <a href="https://www.instagram.com/ayushxpathania/" rel="noreferrer" target="_blank"><li><i className="fab fa-instagram"></i></li></a>
                        </ul>
                    </div>
                </div>

                <div className="about-right">
                    <h1>hi<span>!</span></h1>
                    <h2>Here's who I am & what I do</h2>
                    <div className="about-btns">
                        <button type="button" className="btn btn-pink" disabled>resume</button>
                        <a href='https://github.com/codeitayush?tab=repositories' target="_blank" rel="noreferrer" className="btn btn-white" >projects</a>
                    </div>
                    <div style={{ textAlign: "justify" }}>
                        My name is Ayush Pathania and I live in Kangra, Himachal Pradesh, IN. I am Front-end web developer with experience in building, optimizing and maintaining the performance of user centric websites. Clear understanding of modern technologies and best design practices.
                        <p className='py-3'>An ambitious problem solver willing to join a team of like-minded people.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
