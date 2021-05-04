import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  console.log(eventData, "here");
  const markers = eventData.map((ev) => {
    return (
      <LocationMarker
        lat={ev.lat}
        lng={ev.lng}
        onClick={() =>
          setLocationInfo({
            end: ev.end,
            title: ev.title,
            link: ev.link,
            length: ev.length,
            rss: ev.rss,
            src: ev.src,
            start: ev.start,
            walkability: ev.walkability,
          })
        }
      />
    );
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDYCX_UbqB5hZQD4NgvzpaSR2tj6XJwtxw" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};
Map.defaultProps = {
  center: {
    lat: 43.67030399626069,
    lng: -79.38678376645248,
  },
  zoom: 13,
};

export default Map;
