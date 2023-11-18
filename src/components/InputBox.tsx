import React, { useState } from "react";
import styles from "../App.module.scss";

const InputBox: React.FC = () => {
  return (
    <div className={styles.inputGroup}>
      <input
        required
        type="text"
        name="text"
        autoComplete="off"
        className={styles.input}
      />
      <label className={styles.userLabel}>debounce тест</label>
    </div>
  );
};

export default InputBox;
