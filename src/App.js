import React from "react";
import GlobalStyles from "./components/Globalstyles";
import Header from "./components/Header";
import Middle from "./components/Middle";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
