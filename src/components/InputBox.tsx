import React, { useState } from "react";
import styles from "../App.module.scss";

interface InputBoxProps {
  labelText: string;
  value: string;
  handleChange: any;
}

const InputBox: React.FC<InputBoxProps> = ({
  labelText,
  value,
  handleChange,
}) => {
  return (
    <div className={styles.inputGroup}>
      <input
        value={value}
        onChange={handleChange}
        required
        type="text"
        autoComplete="off"
        className={styles.input}
      />
      <label className={styles.userLabel}>{labelText}</label>
    </div>
  );
};

export default InputBox;
