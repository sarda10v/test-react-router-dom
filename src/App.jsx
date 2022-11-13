import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Page/MainPage";
import NewsPage from "./Page/NewsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/news" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
