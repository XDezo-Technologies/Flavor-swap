import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../assets/slider1.jpg"
import img2 from "../assets/slider2.jpg"
import img3 from "../assets/slider3.jpg"
import img4 from "../assets/slider4.jpg"
import img5 from "../assets/slider5.jpg"

export const Slider = () => {
  return (
    <div className='' >
        
        <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} stopOnHover={false} showStatus={false} centerMode className='carousel '>
                <div className=''>
                    <img src={img1} className=''/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} className='' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} className='' />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img4} className='' />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img5} className='' />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  )
}
