import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import ConfirmButton from "./ConfirmButton";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";

export default function() {
  return (
    <div>
      <Page name="settings">
        <WelcomeMessage />
        <CoinGrid topSection />
        <ConfirmButton />
        <CoinGrid />
      </Page>
    </div>
  );
}
