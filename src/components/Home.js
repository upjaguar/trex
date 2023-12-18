import React from 'react'
import Button from 'react-bootstrap/Button';

import './Home.css'
const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
          <h2>Welcome to <span style={{ color: "#6c63ff" }}>Abhishek Prasad Singh</span> </h2>
          <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>Hello Dear <br/> I am Abhishek Prasad singh, a 22 year old boy currently i am  pursuing engineering from Delhi technological university in production and industrial engineering branch  in Final year.<br/> My keen interest in technology so i am exploring different technologies.<br/>
          I'm a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building professional MERN stack web applications while freelancing.
          
          
     </p>
          
          <div className="btn_div mt-4">
              <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#2f2d69", marginRight: 24 }}>YouTube</Button>
              <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#6c63ff" }}>YouTube</Button>
            </div>


          </div>
          <div className="right_div">
            <img src="hp.png" alt="" />
          </div>
        </div>
      </div>
    </>  )
}

export default Home