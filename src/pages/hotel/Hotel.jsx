import React from 'react';
import "./Hotel.css";
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import {  faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  
    const photos = [
      {
        src:"https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_640.jpg"
      },
      {
        src:"https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_640.jpg"
      },
      {
        src:"https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_640.jpg"
      },
      {
        src:"https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_640.jpg"
      },
      {
        src:"https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_640.jpg"
      },
      {
        src:"https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_640.jpg"
      },
    ];

    const handleOpen =(i)=>{
      setSlideNumber(i);
      setOpen(true);
    };


    const handleMove=(direction)=>{
      let newSlideNumber;
      if(direction==="l"){
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
      }
      else if(direction==="r"){
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1;

      }

      setSlideNumber(newSlideNumber)

    };


return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
       { open && (
         <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className='sliderImg'/>
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}/>
        </div>
)}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or BookNow!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location -500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $112 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {
              photos.map((photo,i)=>(
                <div className="hotelImgWrapper" key={i}>
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className='hotelImg'/>
                </div>
              ))
            };
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                located a 5-minute walk from St. Florian's Gate in Krakow, Tower 
                Street Apartments has accomondatioins with air conditioning and 
                free wifi. The Unints come with hardwood floors and feature a fully
                 equipped kitchentte with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer.A fridge 
                is also offered, as well as an electric tea pot and a coffee machine. 
                Popular points of interest near the apartment include Cloth Hall,
                 Main Market Square and Town Hall Tower. The nearest airport is 
                 John Paul II international Krakow-Balice, 16.1KM 
                from Tower Street Apartments, and property offers a paid airport shuttle service.
              </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of krakow, this property has an Excellent location score af 9.8!
                </span>
                <h2>
                  <b>$945</b> (9 night)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList/>
      <Footer className="footer"/>

      </div>
      
    </div>
  )
}

export default Hotel
