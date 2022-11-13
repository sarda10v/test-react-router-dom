import React from "react";
import styles from "./News.module.scss";
import news from "../../../assets/news.js";

const News = () => {
  console.log(news);
  return (
    <React.Fragment>
      {news.map((item) => {
        return (
          <div className={styles.wrapper} key={item.id}>
            <div className={styles.imageSide}>
              <img src={item.image} alt="img" />
            </div>
            <div className={styles.informationSide}>
              <h2 className={styles.title}>{item.title}</h2>
              <div className={styles.description}>{item.description}</div>
              <button>Read More...</button>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default News;
