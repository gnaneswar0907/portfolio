import React, { useState } from "react";

import ReactMapGL, { SVGOverlay } from "react-map-gl";

import { LocationPin } from "./LocationPin";

import MapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl
} from "react-map-gl";

import LocationOnIcon from "@material-ui/icons/LocationOn";

const key =
  "pk.eyJ1Ijoia2F3YWFraSIsImEiOiJjanhvNno2YmgwM3c1M2pxdXc3c3VyOGN3In0.3uf9seRkB3z_MZMEP7Nrpg";

const fullscreenControlStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

export const Location = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 250,
    latitude: 33.0020416,
    longitude: -96.7777966,
    mapStyle: "mapbox://styles/mapbox/streets-v11",
    zoom: 7
  });

  const [popupInfo, togglePopup] = useState(null);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={key}
        onViewportChange={viewport => setViewport(viewport)}
      >
        <Marker latitude={33.0020416} longitude={-96.7777966}>
          <LocationOnIcon onClick={() => togglePopup("Dallas, Texas 75252")} />
        </Marker>

        {popupInfo && (
          <Popup
            tipSize={5}
            anchor="bottom"
            longitude={-96.7777966}
            latitude={33.0020416}
            closeOnClick={false}
            onClose={() => togglePopup(null)}
          >
            <div
              style={{
                marginRight: "15px",
                color: "#4570e0"
              }}
            >
              {popupInfo}
            </div>
          </Popup>
        )}
        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div>
      </ReactMapGL>
    </div>
  );
};
