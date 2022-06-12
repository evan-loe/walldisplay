import React, { useEffect } from 'react';
import $ from "jquery"

import { Slide } from "react-slideshow-image";

const pictures = [
  "darkblueskydock.jpeg",
  "cityroad.jpg",
  "purplemountains.jpg",
  "earthoceancloud.jpg",
  "sanddune.jpg",
  "sparklefiber.jpg",
  "nightmountains.jpg",
  "redtreelake.jpg",
  "taffyswirl.jpg",
  "desertfence.jpg",
  "skateboard.jpg",
  "intersection.jpg",
  "rainystreet.jpg",
  "blueredmoon.jpg",
  "bluespaceice.jpg",
  "blackyellowstairs.jpg",
  "blobswirlpurplewhite.jpg",
  "redplanet.jpg",
  "campervannight.jpg",
  "darthvader.png",
  "deathstar.jpg",
  "tentstarrynight.jpg",
  "stonenightlake.jpg",
  "lightdarkocean.jpg",
  "smallboatlake.jpg",
  "firevinylpaint.jpg",
  "nightroadheadlight.jpg",
  "dusknewyork.jpg",
  "darkoceanisland.jpg",
  "citynightheadlight.jpg",
  "fognightcity.jpg",
  "castleonmountain.jpg",
  "metallspikeball.jpg",
  "nightalleyway.jpg",
  "catknight.jpg",
  "sharpoceanrock.jpg",
  "bluemountain.jpg",
  "mountainlookout.jpg",
  "purpleredplanet.jpg",
  "nightfields.jpg",
  "wetroadnight.jpg",
];


function doTransition() {
  $("#backImage").fadeIn()
}

function selectRandomImage() {
  return `backgrounds/${pictures[Math.floor(Math.random() * pictures.length)]}`;
}

function Background() {
  

  const slideImages = pictures.map((picName) => {
    return {
      url: `backgrounds/${picName}`,
      caption: picName
    };
  })

  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Background

