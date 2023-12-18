import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
      <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Meet Abhishek prasad</h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>I specialize in building responsive full-stack web applications. I am the guy who can handle the entire project, from creating an attractive web application to hosting and SEO. I am passionate about learning new technologies and understand that there is more than one way to accomplish a task. Though I am most proficient in building MERN Stack applications, I am a quick learner and can pick up new tech stacks as needed. I believe that being a great developer is not about using one specific language but about choosing the best tool for the job..</p>
          </div>
          <div className="right_container mt-3">
            <img src="Abhi.jpeg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About