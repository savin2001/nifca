import React from 'react'

const About = () => {
  return (
    <div className="carousel w-full h-screen">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div>
              <h1 className="mb-5 text-5xl font-light uppercase">
                The Preferred Financial Gateway
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About