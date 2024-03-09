import PropTypes from "prop-types";
import { H1Styled } from "./PageTitle.styled";

export const PageTitle = ({ text }) => {
  return <H1Styled>{text}</H1Styled>;
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
