import styled from "styled-components";
import {
  subtleBoxShadow,
  greenBoxShadow,
  lightBlueBackground,
  redBoxShadow
} from "./Styles";

export const Tile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
    padding: 10px;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    ${greenBoxShadow}
  }
`;

export const DeletableTyle = styled(SelectableTile)`
  &:hover {
    cursor: pointer;
    ${redBoxShadow}
  }
`;

export const DisableTyle = styled(Tile)`
  pointer-events: none;
  opacity: 0.4;
`;
