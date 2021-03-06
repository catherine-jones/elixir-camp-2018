import React from "react"

export default ({ width, height, fillColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "12"}
    height={height || "12"}
    viewBox="0 0 12 12">
    <path
      fill={fillColor || "#FFF"}
      d="M10.5,17.5 L9,17.5 L9,16.75 C9,16.3353511 8.66404358,16 8.25,16 C7.83595642,16 7.5,16.3353511 7.5,16.75 L7.5,17.5 L4.5,17.5 L4.5,16.75 C4.5,16.3353511 4.16404358,16 3.75,16 C3.33595642,16 3,16.3353511 3,16.75 L3,17.5 L1.5,17.5 C0.671912833,17.5 0,18.1719128 0,19 L0,26.5 C0,27.3280872 0.671912833,28 1.5,28 L10.5,28 C11.3280872,28 12,27.3280872 12,26.5 L12,19 C12,18.1713075 11.3280872,17.5 10.5,17.5 Z M10.5,26.5 L1.5,26.5 L1.5,20.1246973 L10.5,20.1246973 L10.5,26.5 Z"
      transform="translate(0 -16)"
    />
  </svg>
)
