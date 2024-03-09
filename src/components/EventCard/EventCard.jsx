import PropTypes from "prop-types";
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

import {
  CardStyled,
  EventNameStyled,
  InfoStyled,
  ChipStyled,
} from "./EventCard.syled.js";
import { formatEventStart, formatEventDuration } from "helpers";
import { iconSize } from "constans";

export const EventCard = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <CardStyled>
      <EventNameStyled>{name}</EventNameStyled>
      <InfoStyled>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </InfoStyled>
      <InfoStyled>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </InfoStyled>
      <InfoStyled>
        <FaCalendarAlt size={iconSize.sm} />
        {formattedStart}
      </InfoStyled>
      <InfoStyled>
        <FaClock size={iconSize.sm} />
        {duration}
      </InfoStyled>
      <ChipStyled eventType={type}>{type}</ChipStyled>

      {/* free | paid | vip */}
    </CardStyled>
  );
};

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
