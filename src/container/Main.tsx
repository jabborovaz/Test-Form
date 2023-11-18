import React from "react";
import styles from "../App.module.scss";
import InputBox from "../components/InputBox";

const Main: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.formBlock}>
        <InputBox />
      </section>
    </div>
  );
};

export default Main;
