import { PageTitle } from "components/PageTitle/PageTitle.jsx";
import { EventBoard } from "components/EventBoard/EventBoard.jsx";
import upcomingEvents from "upcoming-event.json";

const App = () => {
  return (
    <div>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </div>
  );
};

export default App;
