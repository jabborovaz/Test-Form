import React, { useState } from "react";
import styles from "../App.module.scss";
import InputBox from "../components/InputBox";

const Main: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [valueOnText, setValueOnText] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [formObj, setFormObj] = useState<any>({
    email: "",
    description: "",
    password: "",
    confirmPass: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e: any) => {
    setShowPassword(!showPassword);
  };

  function formHandleChange(key: any, value: any) {
    setFormObj((prev: any) => ({ ...prev, [key]: value }));
  }

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
          checked={null}
          onChecked={null}
          isTextarea={false}
          name="debounce"
          labelText="debounce тест"
          value={value}
          handleChange={asyncHandleChange}
          type="text"
        />
        <InputBox
          checked={null}
          onChecked={null}
          isTextarea={false}
          name="trottle"
          labelText="trottling тест"
          value={value2}
          handleChange={syncHandleChange}
          type="text"
        />
        <p className={styles.middleText}>Debounce: {valueOnText}</p>
        <p className={styles.middleText}>Trottle: {value2}</p>
      </section>

      <form className={styles.formBlock}>
        <InputBox
          checked={null}
          onChecked={null}
          isTextarea={false}
          labelText="Эл. почта"
          value={formObj.email}
          name="email"
          type="email"
          handleChange={(e: any) =>
            formHandleChange(e.target.name, e.target.value)
          }
        />

        <InputBox
          checked={null}
          onChecked={null}
          isTextarea={true}
          labelText="Описание"
          value={formObj.description}
          name="description"
          type="text"
          handleChange={(e: any) =>
            formHandleChange(e.target.name, e.target.value)
          }
        />

        <InputBox
          checked={showPassword}
          onChecked={togglePasswordVisibility}
          isTextarea={false}
          labelText="Пароль"
          value={formObj.password}
          name="password"
          type={showPassword ? "text" : "password"}
          handleChange={(e: any) => {
            formHandleChange(e.target.name, e.target.value);
          }}
        />

        <InputBox
          checked={null}
          onChecked={null}
          isTextarea={false}
          labelText="Подтвердите пароль"
          value={formObj.confirmPass}
          name="confirmPass"
          type={showPassword ? "text" : "password"}
          handleChange={(e: any) => {
            formHandleChange(e.target.name, e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Main;
