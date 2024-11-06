import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import DisplayGadget from "./DisplayGadget";
import { Helmet } from "react-helmet";
import CommonHeading from "../Home/CommonHeading/CommonHeading";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"

const carousel = (slider) => {
    const z = 300
    function rotate() {
        const deg = 360 * slider.track.details.progress
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
        const deg = 360 / slider.slides.length
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
        })
        rotate()
    })
    slider.on("detailsChanged", rotate)
}


const UpcomingGadget = () => {
    const [gadgets, setGadgets] = useState([])
    useEffect(() => {
        axios.get('upcoming.json')
            .then(data => setGadgets(data.data))
    }, [])

    //slider 
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    )

    
    const headTag = <h1 className="text-center text-3xl font-semibold mb-3">Up-Coming Technology</h1>
    const byText = <p className="px-3 lg:px-0 md:text-center lg:w-[60%] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

    return (
        <div>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <div className="bg-[#9538E2] h-full text-white py-12 space-y-5 mb-10">
                <CommonHeading headTag={headTag} byText={byText} />
                <div className=" flex justify-center gap-5">

                </div>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-16 max-w-7xl mx-auto">
                 <div className="wrapper">
                <div className="scene">
                    <div className="carousel keen-slider" ref={sliderRef}>
                        <div className="carousel__cell number-slide1 "></div>
                        <div className="carousel__cell number-slide2"></div>
                        <div className="carousel__cell number-slide3"></div>
                        <div className="carousel__cell number-slide4"></div>
                        <div className="carousel__cell number-slide5"></div>
                        <div className="carousel__cell number-slide6"></div>
                    </div>
                </div>
                </div>
               

                {
                    gadgets.map((gadget, idx) => <DisplayGadget key={idx} gadget={gadget} />)
                }
               
            </div>
        </div>
    );
};

export default UpcomingGadget;