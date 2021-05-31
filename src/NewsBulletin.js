import React from "react";
import Categories from "./Categories";
import EntertainmentBoard from "./EntertainmentBoard";

function NewsBulletin({ match }) {
  const category = match.params.category || "all";

  return (
    <>
      <Categories />
      <EntertainmentBoard category={category} />
    </>
  );
}

export default NewsBulletin;
