/** @format */

import React from "react";

export default function Home() {
  return (
    <div className='_landing_page'>
      <div className='_greet'>
        <div className='overlay'></div>
        <video
          className='_media'
          src='/media/background.mp4'
          autoPlay
          loop
        ></video>
      </div>
      <div className='_content'>
        <div className='content-one'>
          <h2>my name is nikhil pokharel</h2>
        </div>
        <div className='content-one'>
          <h2>my name is nikhil pokharel</h2>
        </div>

        <div className='content-one'>
          <h2>my name is nikhil pokharel</h2>
        </div>
      </div>
    </div>
  );
}
