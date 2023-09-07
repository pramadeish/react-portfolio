import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-85,-25, 2],
        center: [-5, -3],
        scale: 1300
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/feature.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[80.2707,13.0827]}
        dx={100}
        dy={-20}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="40" y="-10" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Chennai"}
        </text>
      </Annotation>
      <Annotation
        subject={[72.8777, 19.0760]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Mumbai"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;