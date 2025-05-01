"use client";
export default function Intro() {
  return (
    <div
      id="intro"
      className="grid grid-rows-3 justify-center items-center px-8 text-center h-screen"
    >
      <div className="row-start-2 z-10">
        <div className="text-5xl">Hello there!</div>
        <div className="text-3xl">
          My name is Daniel, im a web developer and this is my work.
        </div>
      </div>
      {/*       <svg
        className="row-start-3 self-end justify-self-center animate-bounce"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        height="40px"
        width="40px"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 330 330"
      >
        <path
          id="XMLID_225_"
          d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
        />
      </svg> */}
      {/*       <svg className="row-start-3 self-end justify-self-center animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 330 330">
      <path id="XMLID_30_" d="M154.394,325.606C157.322,328.535,161.161,330,165,330s7.678-1.465,10.607-4.394l75-75  c5.858-5.857,5.858-15.355,0-21.213c-5.858-5.857-15.356-5.857-21.213,0L180,278.787V15c0-8.284-6.716-15-15-15  c-8.284,0-15,6.716-15,15v263.787l-49.394-49.394c-5.858-5.857-15.355-5.857-21.213,0c-5.858,5.857-5.858,15.355,0,21.213  L154.394,325.606z"/>
      </svg> */}
      <svg
        onClick={() => {
          const element = document.getElementById("nav");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
        className="row-start-3 self-end justify-self-center animate-bounce"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        height="40px"
        width="40px"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 330 330"
      >
        <g id="XMLID_169_">
          <path
            id="XMLID_197_"
            d="M304.394,139.394l-139.39,139.393L25.607,139.393c-5.857-5.857-15.355-5.858-21.213,0.001   c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150   c5.858-5.858,5.858-15.355,0-21.213C319.749,133.536,310.251,133.535,304.394,139.394z"
          />
          <path
            id="XMLID_221_"
            d="M154.398,190.607c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150   c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0l-139.39,139.393L25.607,19.393   c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213L154.398,190.607z"
          />
        </g>
      </svg>
    </div>
  );
}
