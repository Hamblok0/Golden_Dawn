import React from "react";
import hexagram from "../img/unicursal_hexagram.svg.png";
import roseCross from "../img/rose_cross.png";

const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="intro">
        Lorem ipsum dolor sit amet, te omnium alterum nec. Vix et veri postea
        consectetuer. Ne meis temporibus pro. Quo ut aeque erroribus. Cu ullum
        audire per, civibus praesent definitionem ut ius, sed ea virtute
        probatus assueverit. Vix accusam explicari corrumpit ad, nec illud
        dolore at, dicant honestatis adversarium ne vel.
      </div>
      <div className="navWrapper">
        <div className="readingBut">
          <div className="homeNav">
            <img src={hexagram} alt="Card" />
          </div>
          <h3>Golden Dawn Spread</h3>
        </div>
        <div className="dictBut">
          <div className="homeNav">
            <img src={roseCross} alt="Card" />
          </div>
          <h3>Card Dictionary</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
