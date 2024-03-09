import { PageTitle } from "components/PageTitle/PageTitle.jsx";
import { EventBoard } from "components/EventBoard/EventBoard.jsx";
import upcomingEvents from "upcoming-event.json";

import { DivStyled } from "./App.styled.js";

const App = () => {
  return (
    <DivStyled>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </DivStyled>
  );
};

export default App;
