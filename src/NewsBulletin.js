import React from "react";
import Categories from "./Categories";
import EntertainmentBoard from "./EntertainmentBoard";
import Abcd from "./Abcd";

function NewsBulletin({ match }) {
  const category = match.params.category || "all";
  console.log(match);

  return (
    <>
      <Categories />
      <EntertainmentBoard category={category} />
      {/* <Abcd category={category} /> */}
    </>
  );
}

export default NewsBulletin;
