// import PropTypes from "prop-types";
import { EventCard } from "components/EventCard/EventCard.jsx";
import css from "components/EventBoard/EventBoard.module.css";

export const EventBoard = ({ events }) => {
  console.log(events);
  return (
    <div className={css.eventBoard}>
      {events.map((event) => {
        const { name, location, speaker, type, time } = event;
        return (
          <EventCard
            key={`{name}_{time}`}
            name={name}
            location={location}
            speaker={speaker}
            type={type}
            start={time.start}
            end={time.end}
          />
        );
      })}
    </div>
  );
};
// EventBoard.propTypes = {
//   events: PropTypes.arrayOff({
//     name: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     speaker: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     time: PropTypes.shape({
//       start: PropTypes.string.isRequired,
//       end: PropTypes.string.isRequired,
//     }),
//   }),
// };
