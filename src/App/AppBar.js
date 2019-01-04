import React from "react";
import styled, { css } from "styled-components";

const Logo = styled.div`
  font-size: 1.5rem;
`;

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 180px 100px;
  margin-bottom: 40px;
`;

const ControlButtonElement = styled.div`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #03ff03;
    `}
`;

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({ name, active }) {
  return (
    <ControlButtonElement active={active}>
      {toProperCase(name)}
    </ControlButtonElement>
  );
}

export default function() {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div />
      <ControlButton name="dashboard" active />
      <ControlButton name="settings" />
    </Bar>
  );
}
