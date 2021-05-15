import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
function Market() {
  const [valuesBSE, setBSE] = useState([]);
  const [valuesNSE, setNSE] = useState([]);

  useEffect(() => {
    fetch("/sensexval")
      .then((response) => response.json())
      .then((data) => setBSE(data));
    fetch("/niftyval")
      .then((response) => response.json())
      .then((data) => setNSE(data));
  }, []);
  const data = async () => {
    await fetch("/sensexval")
      .then((response) => response.json())
      .then((data) => setBSE(data));
    await fetch("/niftyval")
      .then((response) => response.json())
      .then((data) => setNSE(data));
  };
  setTimeout(data,60000);
  return (
    <>
  
      <h1 className="wrapper container">
        SENSEX :<Marquee className="bg-success text-white" speed={50} direction="right" pauseOnHover={true}>
          {valuesBSE}
        </Marquee>
      </h1>
      <h1 className="wrapper container">
        NIFTY :<Marquee className="bg-success text-white" speed={50} direction="right" pauseOnHover={true}>
          {valuesNSE}
        </Marquee>
      </h1>
    </>
  );
}

export default Market;
