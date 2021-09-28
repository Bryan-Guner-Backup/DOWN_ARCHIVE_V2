import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

import RemoveOption from "./RemoveOption";

const LocationDetails = props => {
  const { location, visit } = props;
  const { name, address, icon, phone } = location || visit.location;

  return (
    <Container>
      <ExtrasContainer>
        <Popup
          trigger={<i className="fas fa-ellipsis-h"></i>}
          position="bottom right"
        >
          <Menu>
            <RemoveOption {...props} />
          </Menu>
        </Popup>
      </ExtrasContainer>
      <DetailsContainer>
        <LocationName>{name}</LocationName>
        <address>{address}</address>
        <PhoneNumber href={`tel:${phone}`}>{phone}</PhoneNumber>
        <DirectionsContainer>
          <Directions
            href={`https://www.google.com/maps/dir//${address}/`}
            target="_blank"
          >
            {"Directions "}
            <i className="fas fa-directions"></i>
          </Directions>
        </DirectionsContainer>
      </DetailsContainer>
      <ImageContainer>
        {!!icon ? <Image src={icon} /> : <i className="fas fa-store-alt fa-7x" />}
      </ImageContainer>
    </Container>
  );
};
const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const ExtrasContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DetailsContainer = styled.section`
  margin-bottom: 2rem;
`;

const LocationName = styled.h2`
  margin: 0.5rem 0;
`;

const PhoneNumber = styled.a`
  text-decoration: none;
`;

const DirectionsContainer = styled.div`
  display: flex;
  flex-flow: row-reverse;
`;

const Directions = styled.a`
  color: black
  text-decoration: none;
  padding: 0.2rem 0.5rem;
  background-color: gold;
  border-radius: 5px;
  font-weight: 500;

  &&:hover {
    background-color: yellow;
  }
`;

const ImageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

const Image = styled.img`
  border-radius: 1rem;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export default LocationDetails;
