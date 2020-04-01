import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";

/**
 * @author
 * @function Rooms
 **/

const Rooms = props => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link className="btn-primary" to="/">
            Return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
