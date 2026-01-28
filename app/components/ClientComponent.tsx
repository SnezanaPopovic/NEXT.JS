"use client";

import ServerComponent from "./ServerComponent";

const ClientComponent = () => {
  console.log("Client Component Rendered");
  return (
    <div>
      <ServerComponent />
    </div>
  );
};
export default ClientComponent;

// evo i neki komentari sa casa: klijent-server
// po defaultu je sve server komponenta, server moze da pozove klijent a klijent ne moze server
// u server kompo ne moze useefekt
// klijent kompo ne moze da bude asinh samo server
// komponenta je fja home npr
// onda server postaje klijent komponenta ako klijent pozove server

// use klijent mora da sadrzi useState
// klijent komponenta ne moze da poziva server komponentu
// bolje vise server komponenti nego klijent
