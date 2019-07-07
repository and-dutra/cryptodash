import React from "react";

export default function CoinImage({ coin, style }) {
  return (
    <img
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
      alt={coin.CoinName}
      style={style || { height: "40px", paddingTop: "5px" }}
    />
  );
}
