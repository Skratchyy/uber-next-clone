import React from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2tyYXRjaHkiLCJhIjoiY2t2b3d1anFnMDF3aTMxcXB4d3FxdTA3ZiJ9.259MX011YPM2Cmcj4IyyXg';



const map = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [	44.8131864, 41.6939651],
          zoom: 8
        });
        
  });
    return (
        <Wrapper id="map"></Wrapper>
    )
}

export default map

const Wrapper = tw.div`
    flex-1
`