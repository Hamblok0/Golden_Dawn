import React from "react";
import Card from "../Card";

const GoldenDawn = props => {
  const imgs = props.getImgs(props.deck, 15);
  return (
    <div className="spreadGD">
      <div className="row1">
        <div className="triadWrap">
          <h3>Alternate Path</h3>
          <div className="triad">
            <Card card={{...props.data[props.deck[12]]}} img={imgs[12]}/>
            <Card card={{...props.data[props.deck[8]]}} img={imgs[8]}/>
            <Card card={{...props.data[props.deck[4]]}} img={imgs[4]}/>
          </div>
        </div>
        <div className="spacer"></div>
        <div className="triadWrap">
          <h3>Current Path</h3>
          <div className="triad">    
            <Card card={{...props.data[props.deck[3]]}} img={imgs[3]}/>
            <Card card={{...props.data[props.deck[7]]}} img={imgs[7]}/>
            <Card card={{...props.data[props.deck[11]]}} img={imgs[11]}/>
          </div>       
        </div>
      </div>
      <div className="row2">
        <div className="triadWrap">
          <h3>Querent</h3>
          <div className="triad">
            <Card card={{...props.data[props.deck[1]]}} img={imgs[1]}/>
            <Card card={{...props.data[props.deck[0]]}} img={imgs[0]}/>
            <Card card={{...props.data[props.deck[2]]}} img={imgs[2]}/>
          </div>
        </div>
      </div>
      <div className="row3">
        <div className="triadWrap">
          <h3>Psychological Basis</h3>
          <div className="triad">
            <Card card={{...props.data[props.deck[13]]}} img={imgs[13]}/>
            <Card card={{...props.data[props.deck[9]]}} img={imgs[9]}/>
            <Card card={{...props.data[props.deck[5]]}} img={imgs[5]}/>
          </div>
        </div>
        <div className="spacer"></div>
        <div className="triadWrap">
          <h3>Karma</h3>
          <div className="triad">
            <Card card={{...props.data[props.deck[6]]}} img={imgs[6]}/>
            <Card card={{...props.data[props.deck[10]]}} img={imgs[10]}/>
            <Card card={{...props.data[props.deck[14]]}} img={imgs[14]}/>
          </div>
        </div>   
      </div>
    </div>
  );
};

export default GoldenDawn;
