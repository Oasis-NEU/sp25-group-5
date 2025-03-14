import React from 'react';
import Footer from "./components/Footer.jsx";
import FrontPageScrollDown from "./components/FrontPageScrollDown.jsx";
import RequestPage from "./components/RequestPage.jsx";
import Sources from "./components/Sources.jsx";

function App() {
  return (
    <div className="app">
      <main>
        <FrontPageScrollDown />
        <RequestPage />
        <Sources />
      </main>
      <Footer />
    </div>
  );
}

export default App;