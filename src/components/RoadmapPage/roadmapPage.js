import {useEffect, useState} from "react";
import {useScrollContext} from "../SmoothScroll/scroll-context";


export const RoadmapPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  const { updateScrollData, previous, current, rounding } = useScrollContext();

  useEffect(() => {
    updateScrollData({
      previous,
      current,
      rounding,
      ease: 1,
    })
  }, [])

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 720)
    const handleResize = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 720)
    };

    window.addEventListener('resize', handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="bg">
        <div className="bg-img" />
        <div className="bg-dim" />
        <div className="bg-shadow-flipped" style={{ top: '-350px', height: 'calc(100% + 350px)' }} />
        <div className="bg-shadow" style={{ top: '-1050px', height: 'calc(100% + 1050px)' }} />
        <div className="bg-gradient" />
      </div>
        {isMobile ? mobileRoadmap() : desktopRoadmap()}
    </div>
  )
}
function mobileRoadmap() {
  return (
    <div style={{justifyContent: "center", marginTop: 100}}>
      <span className="title">ROADMAP</span>
      <img src={require("../../Images/Projects/Roadmap2.png")} width={"90%"}></img>
      <span className="roadmap-disclaimer">This roadmap is not final and subject to change at any time in the development phase</span>
    </div>
  )
}
function desktopRoadmap() {
  return (
      <div style={{display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", marginTop: 100}}>
      <img src={require("../../Images/Projects/Roadmap1.png")} width={"80%"}></img>
      </div>
  )
}