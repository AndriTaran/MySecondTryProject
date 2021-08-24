import * as Yup from 'yup';

export default {
  LoginSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address ")
      .required("Required"),
    password: Yup.string()
      .min(8, "Must be more than 8 characters, ")
      .matches(/[A-Z]+/g, 'Must be at least one uppercase letter, ')
      .matches(/[a-z]+/g, 'Must be at least one lowercase letter, ')
      .matches(/[^\s\w\d]+|_+/g, 'Must be at least one symbol ')
      .required("Required")
  }),

}
