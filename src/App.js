import React from "react";
import NavBar from "./component/navbar";
import MainPictures from "./component/pictures/pictures";
import "./App.css";
import FooterText from "./component/footer/footerText";

const App = () => {
  return (
    <React.Fragment>
      <main>
        <body>
          <NavBar />
          <MainPictures />
          <FooterText />
        </body>
      </main>
    </React.Fragment>
  );
};

export default App;
