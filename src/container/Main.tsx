import React, { useState } from "react";
import styles from "../App.module.scss";
import InputBox from "../components/InputBox";
import ToggleBox from "../components/ToggleBox";
import { useFormik } from "formik";
import { submitFormSchema } from "../validation/Schemas";

interface FormValues {
  email: string;
  description: string;
  password: string;
  confirmPass: string;
}

const Main: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [valueOnText, setValueOnText] = useState<string>("");
  const [value2, setValue2] = useState<string>("");

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik<FormValues>({
      initialValues: {
        email: "",
        description: "",
        password: "",
        confirmPass: "",
      },
      validationSchema: submitFormSchema,
      onSubmit: () => {},
    });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowPassword(!showPassword);
  };

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

  //   const handleFieldBlur = (field: string) => {
  //     setFieldTouched(field, true, false);
  //   };

  return (
    <div className={styles.container}>
      <section className={styles.formBlock}>
        <InputBox
          checked={false}
          onChecked={() => {}}
          isTextarea={false}
          name="debounce"
          labelText="debounce тест"
          value={value}
          handleChange={asyncHandleChange}
          handleBlur={() => {}}
          inputStyle={styles.input}
          labelStyle={styles.userLabel}
          type="text"
        />
        <InputBox
          checked={false}
          onChecked={() => {}}
          isTextarea={false}
          name="trottle"
          labelText="trottling тест"
          value={value2}
          handleChange={syncHandleChange}
          handleBlur={() => {}}
          inputStyle={styles.input}
          labelStyle={styles.userLabel}
          type="text"
        />
        <p className={styles.middleText}>Debounce: {valueOnText}</p>
        <p className={styles.middleText}>Trottle: {value2}</p>
      </section>

      <form onSubmit={handleSubmit} className={styles.formBlock}>
        <InputBox
          checked={false}
          onChecked={() => {}}
          isTextarea={false}
          labelText={
            errors?.email && touched?.email ? errors?.email : "Эл. почта"
          }
          value={values.email}
          name="email"
          type="email"
          handleChange={handleChange}
          handleBlur={handleBlur}
          inputStyle={
            errors?.email && touched?.email ? styles.inputInvalid : styles.input
          }
          labelStyle={
            errors?.email && touched?.email
              ? styles.userLabelInvalid
              : styles.userLabel
          }
        />

        <InputBox
          checked={false}
          onChecked={() => {}}
          isTextarea={true}
          labelText={
            errors?.description && touched?.description
              ? errors?.description
              : "Описание"
          }
          value={values.description}
          name="description"
          type="text"
          handleChange={handleChange}
          handleBlur={handleBlur}
          inputStyle={
            errors?.description && touched?.description
              ? styles.inputInvalid
              : styles.input
          }
          labelStyle={
            errors?.description && touched?.description
              ? styles.userLabelInvalid
              : styles.userLabel
          }
        />

        <InputBox
          checked={showPassword}
          onChecked={togglePasswordVisibility}
          isTextarea={false}
          labelText={
            errors?.password && touched?.password ? errors?.password : "Пароль"
          }
          value={values.password}
          name="password"
          type={showPassword ? "text" : "password"}
          handleChange={handleChange}
          handleBlur={handleBlur}
          inputStyle={
            errors?.password && touched?.password
              ? styles.inputInvalid
              : styles.input
          }
          labelStyle={
            errors?.password && touched?.password
              ? styles.userLabelInvalid
              : styles.userLabel
          }
        />

        <InputBox
          checked={false}
          onChecked={() => {}}
          isTextarea={false}
          labelText={
            errors.confirmPass && touched?.confirmPass
              ? errors.confirmPass
              : "Подтвердите пароль"
          }
          value={values.confirmPass}
          name="confirmPass"
          type={showPassword ? "text" : "password"}
          handleChange={handleChange}
          handleBlur={handleBlur}
          inputStyle={
            errors?.confirmPass && touched?.confirmPass
              ? styles.inputInvalid
              : styles.input
          }
          labelStyle={
            errors?.confirmPass && touched?.confirmPass
              ? styles.userLabelInvalid
              : styles.userLabel
          }
        />

        <ToggleBox />

        <button className={styles.submitStyle} type="submit">
          Подтвердить
        </button>
      </form>
    </div>
  );
};

export default Main;
