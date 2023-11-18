import React, { useState } from "react";
import styles from "../App.module.scss";
import InputBox from "../components/InputBox";

const Main: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [valueOnText, setValueOnText] = useState<string>("");
  const [value2, setValue2] = useState<string>("");

  let debounceTimer: any = null;

  function asyncHandleChange(e: any) {
    setValue(e.target.value);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      setValueOnText(e.target.value);
    }, 400);
  }

  function syncHandleChange(e: any) {
    setValue2(e.target.value);
  }

  return (
    <div className={styles.container}>
      <section className={styles.formBlock}>
        <InputBox
          labelText="debounce тест"
          value={value}
          handleChange={asyncHandleChange}
        />
        <InputBox
          labelText="trottling тест"
          value={value2}
          handleChange={syncHandleChange}
        />
        <p className={styles.middleText}>Debounce: {valueOnText}</p>
        <p className={styles.middleText}>Trottle: {value2}</p>
      </section>
    </div>
  );
};

export default Main;
