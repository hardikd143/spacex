import React from 'react'

import {
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
  } from "mdb-react-ui-kit";
const SingleCard = ({item,index}) => {
  return (
    <MDBCard
              key={index}
              style={{ maxWidth: "22rem", margin: "10px 0" }}
            >
              <MDBCardImage
                src={
                  item && item.ships[0] && item.ships[0].image
                    ? item.ships[0].image
                    : "https://i.imgur.com/MtEgYbY.jpg"
                }
                alt={item.mission_name}
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Mission Name: {item.mission_name}</MDBCardTitle>
                <MDBCardText>
                  Launch site: {item.launch_site.site_name_long}
                </MDBCardText>
                <MDBCardText>Launch Date: {item.launch_date_local}</MDBCardText>
                <MDBCardText>
                  Rocket Name: {item.rocket.rocket_name}
                </MDBCardText>
                <MDBCardText>
                  Success Rate: {item.rocket.rocket.success_rate_pct}
                </MDBCardText>
                <MDBCardText>
                  Mission Details: {item.details ? item.details : "N/A"}
                </MDBCardText>
                {item.launch_success && (
                  <MDBCardText>
                    Success Status:{" "}
                    {item.launch_success ? item.launch_success : "N/A"}
                  </MDBCardText>
                )}
                <MDBCardText>
                  Reusable:{" "}
                  {item.rocket.rocket.first_stage.reusable
                    ? item.rocket.rocket.first_stage.reusable
                    : "N/A"}
                </MDBCardText>
                {item.links.article_link && (
                  <a
                    href={item.links.article_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    click here for more info...
                  </a>
                )}
              </MDBCardBody>
            </MDBCard>
  )
}

export default SingleCard