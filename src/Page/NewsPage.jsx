import React from "react";
import Header from "../Components/Elements/Header/Header";
import News from "../Components/Elements/News/News";

const NewsPage = () => {
  return (
    <React.Fragment>
      <Header />
      <News />
      <Header/>
    </React.Fragment>
  );
};

export default NewsPage;
