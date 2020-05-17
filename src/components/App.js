import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import Counter from "./Counter"

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <TicketControl />
      <Counter />
    </React.Fragment>
  );
}

export default App;