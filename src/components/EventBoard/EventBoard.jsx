import PropTypes from "prop-types";
import { EventCard } from "components/EventCard/EventCard.jsx";

import { ContainerStyled } from "./EventBoard.styled";

export const EventBoard = ({ events }) => {
  console.log(events);
  return (
    <ContainerStyled>
      {events.map((event) => {
        const { name, location, speaker, type, time } = event;
        return (
          <EventCard
            key={name}
            name={name}
            location={location}
            speaker={speaker}
            type={type}
            start={time.start}
            end={time.end}
          />
        );
      })}
    </ContainerStyled>
  );
};
EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    })
  ),
};
