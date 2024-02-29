import React from 'react'
import hero from "../assets/image/gta san.jpg"

const Hero = (props) => {
    // destructuring props
    const {heading="welcome to my page", image} = props
  return (
    <div style={{backgroundColor: "purple", color: "white"}}>
        <div className="">
            <img src={hero} alt="" height="200px" />
        </div>
        {/* <h1>Welcome To My Life</h1> */}
        <h1>{heading}</h1>
    </div>
  )
}

export default Hero