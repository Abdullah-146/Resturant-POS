import React, { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";

const libraries = ["places"];

const Maps = ({ route, move = null }) => {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [moving, setMoving] = useState();

  useEffect(() => {
    setStart(route.start);
    setEnd(route.end);
  }, [route.start, route.end]);

  useEffect(() => {
    setMoving(move);
  }, [move]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDPvCZmeGuN-y_pJ3ug7PYrwp6BHyKnNUY",
    libraries: libraries,
  });

  if (!isLoaded) return <div>Loading ....</div>;
  return <Map startPos={start} endPos={end} move={move} />;
};

export default Maps;
