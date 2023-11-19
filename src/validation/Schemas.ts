import * as yup from "yup";

export const submitFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Введите почту правильно")
    .required("Почта обязательна"),
  description: yup.string().required("Описание обязательно"),
  password: yup
    .string()
    .min(6, "Минимальная длина пароля 6 символов")
    .required("Минимальная длина пароля 6 символов"),
  confirmPass: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли не совпадают")
    .required("Пароли не совпадают"),
});
