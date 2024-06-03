import React from "react";
import Footballer from "./footballer";
import Palmer from "../src/images/palmer.jpg";
import Haaland from "../src/images/haaland.jpg";
import Watkins from "../src/images/watkins.jpg";
import Salah from "../src/images/salah.jpg";

export default function App() {
  return (
    <div className="player-profiles">
      <Footballer
        img={Palmer}
        name="Cole Palmer"
        club="Chelsea"
        goals="22"
        assists="11"
        total="32"
      />

      <Footballer
        img={Haaland}
        name="Erling Haaland"
        club="Man City"
        goals="27"
        assists="5"
        total="32"
      />

      <Footballer
        img={Watkins}
        name="Ollie Watkins"
        club="Aston Villa"
        goals="19"
        assists="13"
        total="32"
      />

      <Footballer
        img={Salah}
        name="Mohamed Salah"
        club="Liverpool"
        goals="18"
        assists="10"
        total="28"
      />
    </div>
  );
}
