import React from "react";
import ShuffleOutlinedIcon from "@material-ui/icons/ShuffleOutlined";
import SaveAltOutlinedIcon from "@material-ui/icons/SaveAltOutlined";

const SpreadUtil = (props) => {
  return (
    <div className="spreadUtil">
      <div
        className="utilButton"
        onClick={() =>
          props.updateSession({
            ...props.session,
            deck: props.shuffle(props.session.deck),
          })
        }
      >
        <ShuffleOutlinedIcon />
        Shuffle
      </div>
      <div className="utilButton" onClick={() => props.saveReading()}>
        <SaveAltOutlinedIcon />
        Archive
      </div>
    </div>
  );
};

export default SpreadUtil;
