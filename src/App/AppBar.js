import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 180px 100px;
`;

export default function() {
  return (
    <Bar>
      <div>Hello</div>
      <div />
      <div>Hello</div>
      <div>Hello</div>
    </Bar>
  );
}
