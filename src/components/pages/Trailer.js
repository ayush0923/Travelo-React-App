import React from 'react';
import '../../App.css';
import './Trailers.css'
export default function Trailer() {
  return (
    <>
      {/* <iframe width="1536" height="637.9" src="https://www.youtube.com/embed/nkLQ_VTi91U?start=11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/nkLQ_VTi91U?controls=1&amp;start=11&amp;autoplay=1&amp;mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" frameborder="0" allowfullscreen></iframe>
      </div>
    </>
  );

}

// width="1534vw" height="637.9vh"