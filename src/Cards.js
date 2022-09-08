import React from "react";
import {
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import SingleCard from "./SingleCard";
const Cards = ({ data }) => {
  return (
    <MDBContainer
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "720px",
        alignContent: "center",
      }}
    >
      <h1>Space X Api</h1>
      <MDBRow>
        <h2>Past Missions' Details</h2>
        {data.map((item, index) => (
            <SingleCard item={item} index={index} key={index}/>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default Cards;
