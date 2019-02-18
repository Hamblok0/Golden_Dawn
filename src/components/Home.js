import React from "react";
import card from "../img/card.jpg";

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

      <div className="readingBut">
        <div className="homeNav">
          <img src={card} alt="Card" />
        </div>
        <h3>Golden Dawn Spread</h3>
      </div>

      <div className="dictBut">
        <div className="homeNav">
          <img src={card} alt="Card" />
        </div>
        <h3>Card Dictionary</h3>
      </div>

      <div className="histBut">
        <div className="homeNav">
          <img src={card} alt="Card" />
        </div>
        <h3>Reading History</h3>
      </div>
    </div>
  );
};

export default Home;
