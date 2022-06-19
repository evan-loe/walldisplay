import React, { useEffect } from 'react';
import $ from "jquery"

import _ from 'lodash'

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

function Background() {
  const slideImages = pictures.map((picName) => {
    return require(`../assets/backgrounds/${picName}`)
  })

  const doTransition = () => {
    const image = _.sample(slideImages)
  
    $("#frontImage").attr('src', image).fadeIn(1500, 'swing', () => {
      $("#backImage").attr('src', image);
      $("#frontImage").css('display', 'none')
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      doTransition()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <img id="frontImage" className="w-full h-auto absolute" style={{'zIndex': -1, 'display': 'none'}} src={_.sample(slideImages)} alt="" />
      <img id="backImage" className="w-full h-auto absolute" style={{'zIndex': -5}} src={_.sample(slideImages)} alt="" />
    </div>
  );
}

export default Background

