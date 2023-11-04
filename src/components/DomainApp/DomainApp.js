import React from "react";
import DomainGetter from "./GetDomain";
import NavigationBar from "./NavBar";

function DomainApp() {
  const pageStyle = {
    backgroundColor: '#FFF8F0', // Set your desired background color here
    height: '190vh', // Ensure the background covers the entire viewport height
  };
  return (
    <div style={pageStyle} className="App">
      <NavigationBar />
     <DomainGetter />
    </div>
  );
}

export default DomainApp;
