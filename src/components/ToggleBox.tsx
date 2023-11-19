import React, { useState, useRef } from "react";
import "./toggleSwitch.css";
import styles from "../App.module.scss";

function ToggleBox() {
  const [value, setValue] = useState(false);

  return (
    <div className={styles.toggleFlex}>
      <label className="switch">
        <input
          checked={value}
          onChange={(e: any) => setValue(!value)}
          type="checkbox"
        />
        <span className="slider"></span>
      </label>
      <p className={styles.toggleText}>Запомнить сессию</p>
    </div>
  );
}

export default ToggleBox;
