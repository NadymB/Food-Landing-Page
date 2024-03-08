import React, { useState } from "react";

const Icon = (props : any) => {
  // const [isHover, setIsHover] = useState<boolean>();
  return (
    <svg
      viewBox={props.viewBox || "0 0 24 24"}
      width={props.width}
      height={props.height}
      fill={props.fill}
      // onMouseMove={() => setIsHover(true)}
      // onMouseLeave={() => setIsHover(false)}
    >
      <g>
        {props.d.map((value:any) => (
          <path key={value} d={value}></path>
        ))}
      </g>
    </svg>
  );
};

export default Icon;
