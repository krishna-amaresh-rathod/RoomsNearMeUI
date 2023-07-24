import React from 'react';
import "./Featured.css";

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src="https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_640.jpg" alt="" className='featuredImg' />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_640.jpg" alt="" className='featuredImg' />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
       
        <img src="https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_640.jpg" alt="" className='featuredImg'/>
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>

    </div>
  )
}

export default Featured