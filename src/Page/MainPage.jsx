import React from "react";
import Header from "../Components/Elements/Header/Header";
import MainContent from "../Components/UI/MainContent/MainContent";

const MainPage = () => {
  return (
    <React.Fragment>
      <Header />
      <MainContent/>
      <Header/>
    </React.Fragment>
  );
};

export default MainPage;
