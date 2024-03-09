import styled from "@emotion/styled";

export const CardStyled = styled.div`
  position: relative;
  border: ${(props) => `2px dashed ${(props) => props.theme.black}`};
  padding: ${(props) => props.theme.spacing}px;
  border-radius: 4px;
`;
export const EventNameStyled = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;
export const InfoStyled = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: var(—color-primary-text);
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;

  & svg {
    display: block;
    margin-right: 8px;
    color: var(—color-secondary-text);
  }
`;
const setBgColor = (props) => {
  const { eventType, theme } = props;
  switch (eventType) {
    case "free":
      return theme.colors.green;
    case "paid":
      return theme.colors.blue;
    case "vip":
      return theme.colors.red;
    default:
      return theme.colors.black;
  }
};

export const ChipStyled = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  color: #fff;
  background-color: ${setBgColor};
`;
